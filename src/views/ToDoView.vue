<template>
  <div class ="home">
    <v-card class="mx-auto" max-width="400" >
    <v-text-field
      v-model="NewTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      class="pa-3"
      outlined
      label="Add Task to-do"
      append-icon="mdi-plus"
      hide-details
      clearable
   ></v-text-field>
      <v-list class="tasks">
        <Task
          v-for="(task, i) in $store.state.tasks"
          :key="i"
          :task="task" />

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
    data(){
      return{
        NewTaskTitle: '',
      }
    },
    methods:{
      addTask(){
        if(this.NewTaskTitle){
          this.$store.commit('ADD_TASK', this.NewTaskTitle);
         // localStorage.setItem("task", this.NewTaskTitle);
          this.NewTaskTitle = '';
        }
      }
    }
  }
</script>