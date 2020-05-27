<template>
  <div>
    <h3>Список дел</h3>

    <table v-if="allTasks.length">
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Описание</th>
        <th>Дедлайн</th>
        <th>Дата добавления</th>
        <th>Статус</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(task, indx) of allTasks"
          :key="task.id"
      >
        <td>{{indx + 1}}</td>
        <td>{{task.title}}</td>
        <td class="descript">
          <div class="descript_inp">{{task.description}}</div>
        </td>
        <td>{{new Date(task.deadline).toLocaleDateString()}}</td>
        <td>{{new Date(task.created_at).toLocaleDateString()}}</td>
        <td v-if="task.status !== 'Активно'">{{task.status}} ({{new Date(task.done_at).toLocaleDateString()}})</td>
        <td v-else>{{task.status}}</td>
        <td>
          <button v-if="task.status !== 'Завершено'" class="btn btn-small" @click.prevent="doneTask(task.id)">
            <i class="material-icons right">check</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>Вы не создали ни одного дела</p>
  </div>
</template>

<script>

export default {

  computed: {
    allTasks() {
      return this.$store.getters.tasks
    }
  },

  methods: {
    doneTask(taskid) {
      const task = this.$store.getters.taskById(+taskid)
      task.status = 'Завершено'
      this.$store.dispatch('doneTask', task)
      this.$router.push('/list')
    }
  },

  created() {
    this.$store.dispatch('listTasks')
  },
}
</script>

<style lang="scss" scoped>
  button {
    width: 50px;
    height: 30px;
  }

  .descript {
    max-width: 400px;
  }

  .descript_inp {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>