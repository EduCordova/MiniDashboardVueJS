<template>
  <select v-model="carreraSeleccionada" @click="seleccionarCarrera">
    <option value="0" selected>Todas</option>
    <option  v-for="carrera in carreras" v-bind:value="carrera.id">
      {{ carrera.nombre }}
    </option>
  </select>	  
</template>

<script>
export default {
  name: 'lista-carreras',
  props: ['carreras'],
  data () {
    return {
      carreraSeleccionada: 0
    }
  },
  methods: {
    seleccionarCarrera () {
      this.$emit('seleccionar-carrera', this.carreraSeleccionada)
    }
  }
}
</script>
