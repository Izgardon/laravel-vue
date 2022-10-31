<template>
  <AddTask v-show="showAddTask" @add-task="async (task) => { await addTask(task); getTasks() }" />
  <Tasks @toggle-reminder="async (id)=>{await toggleReminder(id);getTasks()}"
    @delete-task="async (id)=>{await deleteTask(id);getTasks()}" :tasks="altTasks" />

</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HomePage',
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },

  computed: {
    ...mapGetters(['allTasks'])


  },

  data() {
    return { altTasks: [] }
  },


  methods: {

    ...mapActions(['fetchTasks', 'addTask', 'deleteTask', 'toggleReminder']),

    async getTasks() {
      await this.fetchTasks()
      this.altTasks = this.allTasks.reverse()

    }

  },
  created() {
    this.getTasks()
  },
}
</script>
