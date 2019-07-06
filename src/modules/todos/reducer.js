import { ADD_TODO } from './actions'

const initialState = {
  todos: [],
  inputValue: 'test'
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          action.payload.todo
        ]
      }

      return newState
    default:
      return state
  }
}

export default todosReducer
