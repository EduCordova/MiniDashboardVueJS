<template>
  <tbody  v-if="alumnos.length > 0">
    <tr v-for="alumno in alumnos">
      <td>{{ alumno.id }}</td>
      <td>{{ alumno.nombre }}</td>
      <td>{{ alumno.apellido_paterno }}</td>
      <td>{{ alumno.apellido_materno }}</td>
      <td>{{ alumno.edad }}</td>
      <td>{{ alumno.semestre }}</td>
      <td>{{ alumno.carrera.nombre }}</td>
      <td>{{ alumno.municipio }}</td>          
    </tr>    
  </tbody>
  <tbody  v-else>
    <tr>
      <td colspan="8">
        No existen datos para este criterio de búsqueda.
      </td>
    </tr>
  </tbody>  
</template>

<script>
export default {
  name: 'lista-alumnos',
  props: ['alumnos']
}
</script>
