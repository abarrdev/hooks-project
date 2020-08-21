import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from '../hooks/useInputState'


function TodoForm({addTodo}) {

	const [value, handleChange, reset] = useInputState('') //utilizing our custom hook to save form inputs in state

	return(
		// just the form itself
		<Paper style={{margin:'1rem 0', padding:'0 1rem'}}>
			<form onSubmit={e => {
			e.preventDefault()
			addTodo(value) //passed down from TodoApp
			reset()
			}}>
				<TextField value={value} onChange={handleChange} margin='normal' label='Add new todo' fullWidth />
			</form>
		</Paper>
	)
}

export default TodoForm