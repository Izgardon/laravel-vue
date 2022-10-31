<template>
  <v-layout>
    <v-app-bar>

      <v-list class="mx-auto">
        <router-link class="pr-5" to="/">Home</router-link>
        <router-link class="pr-5" to="/about">About</router-link>
        <router-link class="pr-5" to="/teams">Teams</router-link>
        <router-link class="pr-5" to="/alltasks">All Tasks</router-link>
        <router-link class="pr-5" to="/login">Login</router-link>
      </v-list>

    </v-app-bar>
    <v-main>
      <v-card height="fit-content" class="mx-auto mt-10" width="700px">
        <Header @toggle-add-task="toggleAddTask"
          :title="teamsPage === 'teams' ? 'Teams Page' : teamsPage === 'login' ? 'Login Page' : 'Task Tracker'"
          :showAddTask="showAddTask" />
        <router-view :showAddTask="showAddTask"></router-view>
        <Footer />
      </v-card>
    </v-main>
  </v-layout>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
  computed: {
    teamsPage() {
      if (this.$route.path === '/teams') {
        return 'teams'
      }
      else if (this.$route.path === '/login') {
        return 'login'
      } else {
        return false
      }
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
