import Vue from 'vue'
import Vuex from 'vuex'
import c from './modules/careers'
import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api/'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    students: [],
    totalStudents: 0,
    semester: 0,
    ageMin: 0,
    ageMax: 0,
    city: 'Todos'
  },
  mutations: {
    updateStudents (state, students) {
      state.students = students
    },
    updateTotalStudents (state, totalStudents) {
      state.totalStudents = totalStudents
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
    }
  },
  getters: {
    getTotalStudents: (state) => {
      return state.totalStudents
    },
    onChangeData: (state) => {
      var career = state.c.career === '0' ? 0 : state.c.career
      var semester = parseInt(state.semester)
      var ageMin = parseInt(state.ageMin)
      var ageMax = parseInt(state.ageMax)
      var city = state.city
      var students = []
      if ((career > 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        students = state.students.filter((a) => a.career.id === career)
        state.totalStudents = students.length
      } else if ((career > 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        students = state.students.filter((a) => (a.career.id === career) && (a.city === city))
        state.totalStudents = students.length
      } else if ((career > 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.age >= ageMin && a.age < ageMax))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.age === ageMin))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career > 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.age >= ageMin && a.age < ageMax) && (a.city === city))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.age === ageMin) && (a.city === city))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career > 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        students = state.students.filter((a) => (a.career.id === career) && (a.semester === semester))
        state.totalStudents = students.length
      } else if ((career > 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        students = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.city === city))
        state.totalStudents = students.length
      } else if ((career > 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age >= ageMin && a.age < ageMax))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age === ageMin))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career > 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age >= ageMin && a.age < ageMax) && (a.city === city))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.career.id === career) && (a.semester === semester) && (a.age === ageMin) && (a.city === city))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career === 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        return state.students
      } else if ((career === 0) && (semester === 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        students = state.students.filter((a) => a.city === city)
        state.totalStudents = students.length
      } else if ((career === 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.age >= ageMin && a.age < ageMax))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.age === ageMin))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career === 0) && (semester === 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.age >= ageMin && a.age < ageMax) && (a.city === city))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.age === ageMin) && (a.city === city))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career === 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city === 'Todos')) {
        students = state.students.filter((a) => (a.semester === semester))
        state.totalStudents = students.length
      } else if ((career === 0) && (semester > 0) && (ageMin === 0) && (ageMax === 0) && (city !== 'Todos')) {
        students = state.students.filter((a) => (a.semester === semester) && (a.city === city))
        state.totalStudents = students.length
      } else if ((career === 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city === 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.semester === semester) && (a.age >= ageMin && a.age < ageMax))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.semester === semester) && (a.age === ageMin))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else if ((career === 0) && (semester > 0) && (ageMin > 0) && (ageMax > 0) && (city !== 'Todos')) {
        if (ageMin < ageMax) {
          students = state.students.filter((a) => (a.semester === semester) && (a.age >= ageMin && a.age < ageMax) && (a.city === city))
          state.totalStudents = students.length
        } else if (ageMin === ageMax) {
          students = state.students.filter((a) => (a.semester === semester) && (a.age === ageMin) && (a.city === city))
          state.totalStudents = students.length
        } else {
          state.totalStudents = 0
        }
      } else {
        state.totalStudents = 0
      }
      return students
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
