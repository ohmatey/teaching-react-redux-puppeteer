import React from 'react'

import Todo from '../components/Todo'

const TodosList = ({
  todos
}) => {

  return (
    <div>
      {!todos.length ? <p>No todos</p> : (
        <div>
          {todos.map(todo => <Todo key={todo} value={todo} />)}
        </div>
      )}
    </div>
  )
}

export default TodosList
