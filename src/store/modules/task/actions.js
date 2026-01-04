//rest task list to empty list
export const reset = ({ commit }) => {
    commit('REST_TASKS')
}

//create new task in to-do list
export const createTask = ({commit}, newTask) => {
    commit('CREATE_TASK', newTask)
}

//update a current task in to-do list
export const updateTask = ({ commit }, updateTask) => {
   //return new Promise((resolve, reject))
    commit('UPDATE_TASK', updateTask)
}

//delete task from to-do list
export const deleteTask = ({commit}, index) => {
    commit('DELETE_TASK', index)
}