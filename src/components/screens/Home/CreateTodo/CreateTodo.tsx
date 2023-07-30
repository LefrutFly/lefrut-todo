import { useState } from 'react'
import CreateTodoButton from './CreateTodoButton'
import CreateTodoForm from './CreateTodoForm'

const CreateTodo = () => {
	const [isShowChangeTodoWindow, setShowChangeTodoWindow] = useState(false)

	const openChangeTodoWindow = () => {
		setShowChangeTodoWindow(!isShowChangeTodoWindow)
	}

	return (
		<>
			<CreateTodoButton
				onClick={openChangeTodoWindow}
				isShowChangeTodoWindow={isShowChangeTodoWindow}
			/>
			<CreateTodoForm isVisible={isShowChangeTodoWindow} />
		</>
	)
}

export default CreateTodo
