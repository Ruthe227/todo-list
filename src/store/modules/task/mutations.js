
//resets array to null/empty array
export const REST_TASKS = (state) => {
    state.tasks = []
}

//create new tasks and pushing it the tasks array
export const CREATE_TASK = (state, payload) => {
    state.tasks.push(payload) 
}

//updates task in array at a specified index
export const UPDATE_TASK = (state, payload) => {
    Object.assign(state.tasks[payload.idex], {text: payload.text});
}

//deletes task from array
export const DELETE_TASK = (state, payload) => {
    state.tasks.splice(payload, 1)
}


