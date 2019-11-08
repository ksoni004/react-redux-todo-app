import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/constants'

const INITIAL_STATE = []

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            if (!action.text.trim()) {
                alert("Please enter Todo text!");
                return state
            } else {
                return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case DELETE_TODO:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
        default:
            return state
    }
}

export default todos