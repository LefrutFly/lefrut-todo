import { FC } from 'react'
import CreateNewTodo from '../../../ui/ChangeWindow/CreateNewTodo'

interface ICreateTodoFormProps {
	isVisible: boolean
}

const CreateTodoForm: FC<ICreateTodoFormProps> = ({ isVisible }) => {
	return <>{isVisible && <CreateNewTodo />}</>
}

export default CreateTodoForm
