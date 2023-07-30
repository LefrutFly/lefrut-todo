import { useForm } from 'react-hook-form'
import { useCreateTodo } from '../../../hooks/useCreateTodo'
import { ITodo } from '../../../types/todo.interface'
import ChangeTodoWindow from './ChangeTodoWindow'

const CreateNewTodo = () => {
	const { register, reset, handleSubmit } = useForm<ITodo>({
		mode: 'onChange',
	})

	const { createTodo } = useCreateTodo(reset)

	return (
		<ChangeTodoWindow
			register={register}
			handleSubmit={handleSubmit}
			changeTodo={createTodo}
			requiredHeader={true}
			requiredDescription={true}
		/>
	)
}

export default CreateNewTodo
