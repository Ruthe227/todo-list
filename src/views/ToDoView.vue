<template>
  <div class ="home">
    <v-card class="mx-auto" max-width="400" >
    <v-text-field
     
      @click:append="addTodo"
      @keyup.enter="addTodo"
      class="pa-3"
      outlined
      label="Add Task to-do"
      append-icon="mdi-plus"
      hide-details
      clearable
   ></v-text-field>
   <!--
      <v-list class="tasks">
        <Task
          v-for="(task, i) in $store.state.tasks"
          :key="i"
          :task="task" />

      </v-list>
    -->
      <v-list 
          v-for="(task, i) in $store.state.tasks"
          :key="i"
          :task="task"
      >
      <v-list-item>
        {{ task.content }}
      </v-list-item>
      </v-list>
    
    </v-card>
  </div>
</template>

<script>
import Task from '../components/Task.vue'
  export default{
    name: 'home' ,
    components:{
        Task
     },
    computed: {
      loadTasks () {
        return this.$store.state.tasks
      }
    },
    methods:{

      addTodo(NewTaskTitle){
        //checks for blank input
        //if(NewTaskTitle.target.value.trim()){
          this.$store.dispatch('createTask', NewTaskTitle)
       // }
        //reset input value to a blank to clear UI
        NewTaskTitle = ''
      },

      updateTask(NewTaskTitle){
      //const newTaskvalue = NewTaskTitle.target.value.trim()
      this.$store.dispatch('updateTask', NewTaskTitle);
      },

      deleteTask(index) {
        this.$store.dispatch('deleteTask', index).then(()=>{
          this.loadTasks
        })
      }
    }
  }
</script>