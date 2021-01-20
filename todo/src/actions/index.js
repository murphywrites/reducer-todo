export const ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

export const addTodo = (name) => {
    return ( {type: ADD_TODO, payload: name})
}

export const toggleCompleted = (id) => {
    return( {type: TOGGLE_COMPLETED, payload: id} )
}

export const clearCompleted = () => {
    return( {type: CLEAR_COMPLETED} )
}