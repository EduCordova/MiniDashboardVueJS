import Vue from 'vue'
import Vuex from 'vuex'
import c from './modules/careers'
import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api/'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    students: [],
    semester: 0,
    ageMin: 0,
    ageMax: 0,
    city: 'Todos',
    studentsTemp: []
  },
  mutations: {
    updateStudents (state, students) {
      state.students = students
    },
    updateSemester (state, semester) {
      state.semester = semester
    },
    updateAgeMin (state, ageMin) {
      state.ageMin = ageMin
    },
    updateAgeMax (state, ageMax) {
      state.ageMax = ageMax
    },
    updateCity (state, city) {
      state.city = city
    },
    updateStudentsTemp (state, studentsTemp) {
      state.studentsTemp = studentsTemp
    }
  },
  getters: {
    getTotalStudents: (state) => {
      return state.studentsTemp.length > 0 ? state.studentsTemp.length : state.students.length
    },
    onChangeData: (state) => {
      var career = state.c.career === '0' ? 0 : state.c.career
      var semester = parseInt(state.semester)
      var ageMin = parseInt(state.ageMin)
      var ageMax = parseInt(state.ageMax)
      var city = state.city

      if ((career > 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        state.studentsTemp = state.students.filter((a) => a.career.id === career)
      } else if ((career > 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.city === city))
      } else if ((career > 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.age >= ageMin && a.age < ageMax))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.age === ageMin))
        }
      } else if ((career > 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.age >= ageMin && a.age < ageMax) && (a.city === city))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.age === ageMin) && (a.city === city))
        }
      } else if ((career > 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.semester === semester))
      } else if ((career > 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.city === city))
      } else if ((career > 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age >= ageMin && a.age < ageMax))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age === ageMin))
        }
      } else if ((career > 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age >= ageMin && a.age < ageMax) && (a.city === city))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age === ageMin) && (a.city === city))
        }
      } else if ((career === 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        return state.students
      } else if ((career === 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        state.studentsTemp = state.students.filter((a) => a.city === city)
      } else if ((career === 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.age >= ageMin && a.age < ageMax))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.age === ageMin))
        } else {
          state.totalStudents = 0
        }
      } else if ((career === 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.age >= ageMin && a.age < ageMax) && (a.city === city))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.age === ageMin) && (a.city === city))
        }
      } else if ((career === 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        state.studentsTemp = state.students.filter((a) => (a.semester === semester))
      } else if ((career === 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        state.studentsTemp = state.students.filter((a) => (a.semester === semester) && (a.city === city))
      } else if ((career === 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.semester === semester) && (a.age >= ageMin && a.age < ageMax))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.semester === semester) && (a.age === ageMin))
        }
      } else if ((career === 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.semester === semester) && (a.age >= ageMin && a.age < ageMax) && (a.city === city))
        } else if (ageMin === ageMax) {
          state.studentsTemp = state.students.filter((a) => (a.semester === semester) && (a.age === ageMin) && (a.city === city))
        }
      }

      return state.studentsTemp
    }
  },
  actions: {
    fetchStudents (context) {
      axios.get(BASE_URL + 'students').then(response => {
        context.commit('updateStudents', response.data.students)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  modules: {
    c
  }
})
