import React from 'react'
import CreateNewTodo from '../../../ui/ChangeWindow/CreateNewTodo'

interface CreateTodoFormProps {
	isVisible: boolean
}

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ isVisible }) => {
	return <>{isVisible && <CreateNewTodo />}</>
}

export default CreateTodoForm
