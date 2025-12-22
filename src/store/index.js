import { createStore } from 'vuex'

export default createStore({
  state: {
    //array to store tasks in
    tasks:[],
  },
  getters: {
    //method to return all tasks
    allTasks: (state) => {
      return state.tasks;
    },
    //method to return a task by id
    getTaskById: (state) => (id) => {
      return state.tasks.find(task => task.id === id);
    }
  },
  mutations: {
    //method to add a task
    ADD_TASK(state, task){
        state.tasks = [{content: task, done: false}, ...state.tasks];
      },
      //method to "mark" a task as done
      DONE_TASK(state, task){
        task.done = !task.done
      },
      //method to update a task
      UPDATE_TASK(state, updateTask){
        const index = state.tasks.findIndex(task => task.id === updateTask.id);
        if(index !== -1){
         state.tasks = [{content: updateTask, done: false}, ...state.tasks];
        }
      },
      //method to delete a task
      DELETE_TASK(state, task){
        state.tasks.splice(state.tasks.indexOf(task), 1);
      },
  },
  actions: {
    //method to store data to browser
     // localStorage.setItem("task", state.task);
  },
  modules: {
  }
})
