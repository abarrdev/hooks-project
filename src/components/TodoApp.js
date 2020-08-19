import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp() {
	const initialTodos = [
		{id: 1, task: 'clean litter box', completed: false},
		{id: 2, task: 'wash Cruze', completed: false},
		{}
	]

	const [todos, setTodos] = useState()

	return(
		<Paper 
			style={{
				padding: 0, 
				margin: 0, 
				height: '100vh', 
				backgroundColor: '#7ba0ff'
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{height:'64px'}}>
				<Toolbar>
					<Typography color='inherit'>TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
		</Paper>
	)
}

export default TodoApp



// TodoApp
//    TodoForm
//    TodoList
//      TodoItem


// id, taskName, completed (boolean)