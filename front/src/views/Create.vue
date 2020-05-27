<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h3>Добавление дела</h3>

      <form @submit.prevent="submitForm">
        <!--title-->
        <div class="input-field">
          <input id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Заголовок</label>
          <span class="helper-text" data-error="Добавьте заголовок"></span>
        </div>
        <!--deadline-->
        <input id="daedline" type="text" ref="datepicker">
        <label for="daedline">Выберите дату выполнения</label>
        <!--description-->
        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Описание</label>
          <span class="helper-text" data-error="Добавьте описание дела"></span>
        </div>
        <button class="btn" type="submit">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'create',

  data: () => ({
    title: '',
    deadline: null,
    description: '',
    status: ''
  }),

  methods: {
    submitForm() {
      const task = {
        title: this.title,
        deadline: this.deadline.date,
        description: this.description,
        status: 'Активно',
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
      }
  },
  
  mounted() {
    // Использую плагины Materialize css
    this.deadline = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },

  destroyed() {
    // Удаляю плагин
    if (this.deadline && this.deadline.destroy) {
      this.deadline.destroy()
    }
  }
}
</script>
