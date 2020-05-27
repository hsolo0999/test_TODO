import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const base_url = 'http://localhost:5000/api/v1/tasks/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },

  mutations: {
    listTasks(state) {
      axios.get(base_url)
        .then((resp) => {
          state.tasks = resp.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    createTask(state, task) {
      state.tasks.push(task)
      // форматирую дату для DRF
      const y = task.deadline.getFullYear()
      const m = task.deadline.getMonth()
      const d = task.deadline.getDate()
      task.deadline = `${y}-${m}-${d}`,
      axios.post(base_url, task)
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    doneTask(state, task) {
      const task_id = task.id
      axios.put(`${base_url}${task_id}/`, task)
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },

  actions: {
    listTasks({commit}, tasks) {
      commit('listTasks', tasks)
    },
    createTask({commit}, task) {
      commit('createTask', task)
    },
    doneTask({commit}, id) {
      commit('doneTask', id)
    }
  },

  getters: {
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === id)
  }
})
