<template>
    <v-card>
        <v-list class="all-tasks">
            <div>{{ getAllTasks }}</div>
            <v-list-item v-for="task in allTasks" :key="task.id">{{ task.text }}</v-list-item>
        </v-list>


    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import $store from '../store'


export default {
    name: "ShowAll",
    computed: {
        getAllTasks() {
            console.log($store.state.showAll.tasks)
            return $store.state.tasks
        }
    }


}
mapGetters(['allTasks'])
</script>