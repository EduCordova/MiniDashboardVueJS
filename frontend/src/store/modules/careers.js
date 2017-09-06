import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api/'

const careers = {
  career: 0,
  careers: []
}

const mutations = {
  updateSelectedCareer (state, career) {
    state.career = career
  },
  updateCareers (state, careers) {
    state.careers = careers
  }
}

const actions = {
  fetchCareers (context) {
    axios.get(BASE_URL + 'careers').then(response => {
      context.commit('updateCareers', response.data.careers)
    }).catch(function (error) {
      console.log(error)
    })
  },
  careerChooser (context, careerId) {
    context.commit('updateSelectedCareer', careerId)
  }
}

export default {
  state: careers,
  mutations,
  actions
}
