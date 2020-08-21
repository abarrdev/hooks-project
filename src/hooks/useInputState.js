import { useState } from 'react'

//generic, reusable hook for input fields (forms, etc)
function useInputState(initial = false) {
	const [value, setValue] = useState(initial) //reserving piece of state

	const handleChange = (e) => { //similar to setState
		setValue(e.target.value)
	}

	const reset = () => { //resets form
		setValue('')
	}

	return [value, handleChange, reset] //return piece of state, fn to set, fn to reset
}

export default useInputState