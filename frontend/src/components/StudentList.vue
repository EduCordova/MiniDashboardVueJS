<template>
  <tbody  v-if="students.length > 0">
    <tr v-for="student in students">
      <td>{{ student.id }}</td>
      <td>{{ student.name }}</td>
      <td>{{ student.first_last_name }}</td>
      <td>{{ student.second_last_name }}</td>
      <td>{{ student.age }}</td>
      <td>{{ student.semester }}</td>
      <td>{{ student.career.name }}</td>
      <td>{{ student.city }}</td>          
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
  name: 'student-list',
  props: ['students']
}
</script>
