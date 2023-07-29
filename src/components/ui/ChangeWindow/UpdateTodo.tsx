import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateTodo } from '../../../hooks/useUpdateTodo.ts'
import { TodoService } from '../../../services/todo.service'
import { ITodo } from '../../../types/todo.interface'
import ChangeTodoWindow from './ChangeTodoWindow'

interface IUpdateTodoProps {
	id: number
}

const UpdateTodo: FC<IUpdateTodoProps> = ({ id }) => {
	const { register, reset, handleSubmit } = useForm<ITodo>({
		mode: 'onChange',
	})

	const { updateTodo } = useUpdateTodo(reset)

	const [todo, setTodo] = useState<ITodo>({
		header: '',
		description: '',
		isCompleted: false,
		id: id,
	})

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
		/>
	)
}

export default UpdateTodo
