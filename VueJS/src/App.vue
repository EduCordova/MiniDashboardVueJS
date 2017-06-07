<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 visible-md visible-lg text-center">
          <h1>Dashboard - Functional Programming in JavaScript with VueJS2</h1>
      </div>
      <div class="col-xs-12 col-sm-12 visible-xs visible-sm text-center">
          <h1>Dashboard</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-lg-3">
        <section>
          <header>
              <label>Carreras</label>
          </header>
          <lista-carreras :carreras="carreras" v-on:seleccionar-carrera="seleccionarCarrera"></lista-carreras>
        </section>
      </div>
      <div class="col-md-1 col-lg-1">
        <section>
          <header>
              <label>Semestre</label>
          </header>            
          <select v-model="semestre">
              <option value="0" selected>Todos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
          </select>
        </section>
      </div>
      <div class="col-md-2 col-lg-2">
        <section>
          <header>
              <label>Edad</label>
          </header>
          <div class="row">
            <div class="col-md-6">
              <select v-model="edadMin">
                  <option value="0" selected>Mínima</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
              </select>              
            </div>
            <div class="col-md-6">
              <select v-model="edadMax" >
                  <option value="0" selected>Máxima</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
              </select>              
            </div>
          </div>
        </section>
      </div>
      <div class="col-md-3 col-lg-3">
        <section>
          <header>
            <label>Municipio</label>
          </header>            
          <select v-model="municipio">
            <option value="Todos" selected>Todos</option>
            <option value="Mexicali">Mexicali</option>
            <option value="Tijuana">Tijuana</option>
            <option value="Ensenada">Ensenada</option>
            <option value="Tecate">Tecate</option>
            <option value="Rosarito">Rosarito</option>
          </select>
        </section>
      </div>            
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="table-responsive">
          <table id="resultados" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Edad</th>
                <th>Semestre</th>
                <th>Carrera</th>
                <th>Municipio</th>
              </tr>
            </thead>
            <lista-alumnos :alumnos="onChangeData"></lista-alumnos>
            <tfoot>
              <tr>
                <td colspan="7">
                    <label>Alumnos totales</label>
                </td>
                <td>{{ totalAlumnos }}</td>   
              </tr>
            </tfoot>
          </table>
        </div>                      
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ListaCarreras from './components/ListaCarreras'
import ListaAlumnos from './components/ListaAlumnos'
const BASE_URL = 'http://localhost/api/'

export default {
  name: 'app',
  components: {
    ListaCarreras,
    ListaAlumnos
  },
  data () {
    return {
      carreras: [],
      semestre: 0,
      edadMin: 0,
      edadMax: 0,
      municipio: 'Todos',
      alumnos: [],
      carrera: 0,
      totalAlumnos: 0
    }
  },
  mounted () {
    this.fetchCarreras()
    this.fetchAlumnos()
  },
  methods: {
    fetchCarreras () {
      axios.get(BASE_URL + 'carreras')
           .then(response => {
             this.carreras = response.data.carreras
           })
    },
    fetchAlumnos () {
      axios.get(BASE_URL + 'alumnos')
           .then(response => {
             this.alumnos = response.data.alumnos
             this.totalAlumnos = this.alumnos.length
           })
    },
    seleccionarCarrera (idCarrera) {
      this.carrera = idCarrera
    }
  },
  computed: {
    onChangeData () {
      var carrera = this.carrera === '0' ? 0 : this.carrera
      var semestre = parseInt(this.semestre)
      var edadMin = parseInt(this.edadMin)
      var edadMax = parseInt(this.edadMax)
      var municipio = this.municipio
      var alumnos = []

      if ((carrera > 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio === 'Todos')) {
        alumnos = this.alumnos.filter((a) => a.carrera.id === carrera)
        this.totalAlumnos = alumnos.length
      } else if ((carrera > 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio !== 'Todos')) {
        alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.municipio === municipio))
        this.totalAlumnos = alumnos.length
      } else if ((carrera > 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio === 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad >= edadMin && a.edad < edadMax))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad === edadMin))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera > 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio !== 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad === edadMin) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera > 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio === 'Todos')) {
        alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre))
        this.totalAlumnos = alumnos.length
      } else if ((carrera > 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio !== 'Todos')) {
        alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.municipio === municipio))
        this.totalAlumnos = alumnos.length
      } else if ((carrera > 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio === 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad === edadMin))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera > 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio !== 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad === edadMin) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera === 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio === 'Todos')) {
        return this.alumnos
      } else if ((carrera === 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio !== 'Todos')) {
        alumnos = this.alumnos.filter((a) => a.municipio === municipio)
        this.totalAlumnos = alumnos.length
      } else if ((carrera === 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio === 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.edad >= edadMin && a.edad < edadMax))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.edad === edadMin))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera === 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio !== 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.edad === edadMin) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera === 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio === 'Todos')) {
        alumnos = this.alumnos.filter((a) => (a.semestre === semestre))
        this.totalAlumnos = alumnos.length
      } else if ((carrera === 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio !== 'Todos')) {
        alumnos = this.alumnos.filter((a) => (a.semestre === semestre) && (a.municipio === municipio))
        this.totalAlumnos = alumnos.length
      } else if ((carrera === 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio === 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.semestre === semestre) && (a.edad === edadMin))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else if ((carrera === 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio !== 'Todos')) {
        if (edadMin < edadMax) {
          alumnos = this.alumnos.filter((a) => (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else if (edadMin === edadMax) {
          alumnos = this.alumnos.filter((a) => (a.semestre === semestre) && (a.edad === edadMin) && (a.municipio === municipio))
          this.totalAlumnos = alumnos.length
        } else {
          this.totalAlumnos = 0
        }
      } else {
        this.totalAlumnos = 0
      }

      return alumnos
    }
  }
}
</script>

<style type="text/css" scoped>
    .container {
        margin-top: 50px;
    }

    table {
        margin-top: 25px;
    }    
</style>
