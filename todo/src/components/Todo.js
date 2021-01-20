// import { useState } from "react"

function Todo (props) {
    const {todo, handleToggleCompleted}  = props
    // let currentState = reducer(initialState, {type: "SET_COMPLETE", payload: true})
    // console.log(currentState)
    
    // const [isComplete, setIsComplete] = useState(todo.completed)

   const handleClick = () => {
        handleToggleCompleted(todo.id)
   } 

    return(
        <ul>
        <li style = {props.todo.completed ? {textDecoration: "line-through"} : {textDecoration: ""}} onClick={handleClick}>{todo.name}</li>
        </ul>
    )
}
export default Todo