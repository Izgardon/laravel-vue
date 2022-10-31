<template>
    <v-card>
        <v-list class="all-tasks">

            <v-list-item v-for="task in allTasks" :key="task.id">{{ task.text }}</v-list-item>
        </v-list>


    </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'



export default {
    name: "ShowAll",
    computed: {
        ...mapGetters(['allTasks'])
    },
    methods: {
        ...mapActions(['fetchTasks', 'addTask'])


    },
    created() {
        this.fetchTasks();
    }


}

</script>