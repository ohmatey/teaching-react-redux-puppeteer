import React from 'react'
import { connect } from 'react-redux'

import InputBox from './modules/todos/components/InputBox'
import AddTodoButton from './modules/todos/components/AddTodoButton'
import TodosList from './modules/todos/containers/TodosList'

import { addTodo } from './modules/todos/actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'test'
    }
  }

  onTodoChange (value) {
    console.log(value)

    this.setState((state, props) => {
      return { inputValue: value }
    })
  }

  handleAddTodo = async () => {
    // this.setState(state => ({
    //   todos: [state.inputValue, ...state.todos],
    //   inputValue: ''
    // }))

    // send action
    this.props.addTodo(this.state.inputValue)
  }

  render() {
    const { inputValue } = this.state
    const { todos } = this.props

    return (
      <div className="App">
        <InputBox
          value={inputValue}
          onChange={this.onTodoChange.bind(this)}
        />

        <AddTodoButton
          handleOnClick={this.handleAddTodo.bind(this)}
        />

        <TodosList todos={todos} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
})

const enhance = connect(
  mapStateToProps,
  { addTodo }
)

export default enhance(App)
