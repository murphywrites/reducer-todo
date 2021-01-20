const initialState = {todos : [
    
   ]}
  const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                name: action.payload,
                id: Date.now(),
                completed: false,
            }
            console.log('reducer: ', action)
            return ({...state, todos: [...state.todos, newTodo]});

            
            case 'TOGGLE_COMPLETED':
                    // map through each todo
                    // if todo has the id we are looking for in the action.payload, return a copy with completed flipped, if todo doesn't have the id we are looking for, return the todo as is
                    return {...state, todos: state.todos.map(todo => {
                        if (todo.id === action.payload){
                            return({...todo, completed: !todo.completed}) 
                        } else {
                            return(todo)
                        }
                    }
                        )};
            case 'CLEAR_COMPLETED':
                return {...state, todos: state.todos.filter(todo => {
                    return todo.completed === false
                })} 
    default:
    return state
    }
  }

  export {initialState, reducer}