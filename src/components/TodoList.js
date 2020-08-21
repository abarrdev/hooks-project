import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

import Divider from '@material-ui/core/Divider'
import Todo from './Todo'

function TodoList(props) {
	
	return(
		// just the list div
		<Paper>
			<List style={{backgroundColor:'#b2bae8'}}>
			{props.todos.map(todo => ( //map through todos being passed down from TodoApp
				<>
				<Todo task={todo.task} key={todo.id} completed={todo.completed} />
				<Divider />
				</>
			))}
			</List>
		</Paper>
	)
}

export default TodoList