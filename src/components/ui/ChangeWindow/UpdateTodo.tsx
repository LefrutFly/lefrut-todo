import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateTodo } from '../../../hooks/useUpdateTodo.ts'
import { TodoService } from '../../../services/todo.service'
import { ITodo } from '../../../types/todo.interface'
import ChangeTodoWindow from './ChangeTodoWindow'

interface IUpdateTodoProps {
	id: number
	closeWindow: () => void
}

const UpdateTodo: FC<IUpdateTodoProps> = ({ id, closeWindow }) => {
	const [todo, setTodo] = useState<ITodo>({
		header: '',
		description: '',
		isCompleted: false,
		id: id,
	})

	const { register, reset, handleSubmit, setValue } = useForm<ITodo>({
		mode: 'onChange',
	})
	useEffect(() => {
		setValue('header', todo.header)
	}, [todo.header])
	useEffect(() => {
		setValue('description', todo.description)
	}, [todo.description])

	const { updateTodo } = useUpdateTodo(reset, id, closeWindow)

	useEffect(() => {
		const fetchData = async () => {
			const data = await TodoService.getById(id)

			setTodo(data)
		}

		fetchData()
	}, [id])

	return (
		<ChangeTodoWindow
			register={register}
			handleSubmit={handleSubmit}
			changeTodo={updateTodo}
			contentTitle={todo.header}
			contentDescription={todo.description}
			requiredHeader={false}
			requiredDescription={false}
		/>
	)
}

export default UpdateTodo
