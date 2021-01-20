import { useState, useReducer } from "react"
import { initialState, reducer } from "../reducers/reducer"

function TodoForm(props) {

    // let currentState = reducer(initialState, {type: "SET_TODO", payload: 'clean room'})
    // console.log(currentState)

    const {handleAddTodo} = props
    const [inputValue, setInputValue] = useState("")

    const handleChange = evt => {
        setInputValue(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        handleAddTodo(inputValue)
        setInputValue("")

    }

    console.log(inputValue)
    return(
        <form>
            {/* <div>{JSON.stringify(state)}</div> */}
            <input value={inputValue}
            onChange = {handleChange}
            placeholder='describe todo' ></input>
            <button onClick={handleSubmit}>add todo</button>
        </form>
    )
}
export default TodoForm