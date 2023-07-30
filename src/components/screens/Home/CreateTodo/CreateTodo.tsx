import React, { useState } from 'react'
import CreateTodoButton from './CreateTodoButton'
import CreateTodoForm from './CreateTodoForm'

const CreateTodo: React.FC = () => {
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
