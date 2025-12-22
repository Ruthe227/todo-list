<template>
    <div :class="`task ${task.done ? 'is-complete' : ''}`">
        <div>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox 
              :input-value="doneTask"
            ></v-checkbox>
              
            {{ task.content }}
            
              <v-btn
             @click.stop="deleteTask"
              icon
            >
              <v-icon color="blue lighten-1">mdi-delete</v-icon>
            </v-btn>
            
            <v-btn
            v-model="updatedTask"
             @click.stop="updateTask"
              icon
            >
              <v-icon color="blue lighten-1">mdi-pencil</v-icon>
            </v-btn>
            </v-list-item-action>
        </v-list-item>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['task'],
        methods: {
            doneTask(){
                this.$store.commit('DONE_TASK', this.task);
            },
            updateTask(){
              if(this.updateTaskTitle){
                this.$store.commit('UPDATE_TASK', this.updateTaskTitle);
                this.updateTaskTitle = '';
              }
            },
            deleteTask(){
                this.$store.commit('DELETE_TASK', this.task);
            }
        }
    }
</script>