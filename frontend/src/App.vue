<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 visible-md visible-lg text-center">
          <h1>Dashboard Demo with VueJS2</h1>
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
          <career-list :careers="careers"></career-list>
        </section>
      </div>
      <div class="col-md-1 col-lg-1">
        <section>
          <header>
              <label>Semestre</label>
          </header>            
          <select v-model="semester">
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
              <select v-model="ageMin">
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
              <select v-model="ageMax" >
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
          <select v-model="city">
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
          <table id="results" class="table table-bordered table-striped">
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
            <student-list :students="onChangeData"></student-list>
            <tfoot>
              <tr>
                <td colspan="7">
                    <label>Alumnos totales</label>
                </td>
                <td>{{ getTotalStudents }}</td>   
              </tr>
            </tfoot>
          </table>
        </div>                      
      </div>
    </div>
  </div>
</template>

<script>
import CareerList from './components/CareerList'
import StudentList from './components/StudentList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    CareerList,
    StudentList
  },
  mounted () {
    this.fetchCareers()
    this.fetchStudents()
  },
  methods: {
    ...mapActions(['fetchCareers', 'fetchStudents'])
  },
  computed: {
    ...mapGetters(['getTotalStudents', 'onChangeData']),
    careers: {
      get () {
        return this.$store.state.c.careers
      },
      set (value) {
        this.$store.commit('updateCareers', value)
      }
    },
    semester: {
      get () {
        return this.$store.state.semester
      },
      set (value) {
        this.$store.commit('updateSemester', value)
      }
    },
    ageMin: {
      get () {
        return this.$store.state.ageMin
      },
      set (value) {
        this.$store.commit('updateAgeMin', value)
      }
    },
    ageMax: {
      get () {
        return this.$store.state.ageMax
      },
      set (value) {
        this.$store.commit('updateAgeMax', value)
      }
    },
    city: {
      get () {
        return this.$store.state.city
      },
      set (value) {
        this.$store.commit('updateCity', value)
      }
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
