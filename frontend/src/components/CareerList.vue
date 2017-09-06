<template>
  <select v-model="selectedCareer">
    <option value="0" selected>Todas</option>
    <option  v-for="career in careers" :value="career.id">
      {{ career.name }}
    </option>
  </select>	  
</template>

<script>
export default {
  name: 'career-list',
  props: ['careers'],
  computed: {
    selectedCareer: {
      get () {
        return this.$store.state.c.career
      },
      set (value) {
        this.$store.commit('updateSelectedCareer', value)
      }
    }
  }
}
</script>
