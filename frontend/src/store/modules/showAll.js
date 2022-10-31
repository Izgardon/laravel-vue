const state = {
  tasks: [],
};
const getters = {
  allTasks: (state) => state.tasks,
};
const actions = {
  async fetchTasks({commit}){
    const res = await fetch('api/tasks')

    const data = await res.json()
  
    commit('setTasks', data.tasks)
  },
  async addTask({commit}, task) {
    try{
    const res = await fetch('api/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
   
    const data = await res.json()
    
    commit('newTask', data.task)}
    catch(err){
      console.log(err)
    }
  },
  async deleteTask({commit},id) {
    if (confirm('Are you sure?')) {
      const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE',
      })
      
      res.status === 200
        ? commit('deleteTask', id)
        : alert('Error deleting task')
    }
  },
  async toggleReminder({commit},id) {
   
    
      const resTask = await fetch(`api/tasks/${id}`)

      const taskToToggle = await resTask.json()
      
    

    const updTask = { ...taskToToggle.task, reminder: !taskToToggle.task.reminder }

    const res = await fetch(`api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    console.log('toggle')
    const data = await res.json()
    

    commit('toggleTask', data.task, id)

    
  },
  
};


const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask: (state, task)=> state.tasks.push(task),
  deleteTask: (state,id)=>(state.tasks = state.tasks.filter((task) => task.id !== id)),
  toggleTask: (state,toggleTask, id)=>state.tasks = state.tasks.map((task) =>
  task.id === id ? { ...task, reminder: toggleTask.reminder } : task
)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
