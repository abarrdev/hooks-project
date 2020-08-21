import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


function TodoApp() {
	const initialTodos = [ //initial values displayed in the app
		{id: 1, task: 'clean litter box', completed: false},
		{id: 2, task: 'wash Cruze', completed: false},
		{id: 3, task: 'drink wine', completed: false}
	]

	const [todos, setTodos] = useState(initialTodos) //reserve piece of state
	//todos are being passed as props to TodoList

	const addTodo = (newTodo) => {
		setTodos([...todos, {id: 4, task: newTodo, completed: false}]) //create Todo (spread operator preserves todos already created)
	}
	//function passed down to TodoForm

	return(
		// paper == background
		<Paper elevation={0} style={{padding: 0, margin: 0, height: '100vh', backgroundColor: '#7ba0ff'}}>
			
			<AppBar color='primary' position='static' style={{height:'64px'}}>
				<Toolbar>
					{/* heading */}
					<Typography color='inherit'>TODOS WITH HOOKS</Typography> 
				</Toolbar>
			</AppBar>

			<Grid container justify='center' style={{marginTop:'1rem'}}>
				<Grid item xs={11} md={8} lg={4}>

					{/* form component */}
					<TodoForm addTodo={addTodo} />
					
					{/* list component */}
					<TodoList todos={todos}/>

				</Grid>
			</Grid>

		</Paper>
	)
}

export default TodoApp