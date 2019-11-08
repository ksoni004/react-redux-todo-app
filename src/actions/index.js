import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, DELETE_TODO } from "./constants"

let todoID = 0
export const addTodo = text => ({
    type: ADD_TODO,
    id: todoID++,
    text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})