import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateTodo } from '../../../../hooks/useUpdateTodo'
import { TodoService } from '../../../../services/todo.service'
import { ITodo } from '../../../../types/todo.interface'

export const useUpdateWindow = (id: number, closeWindow: () => void) => {
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

	return { register, handleSubmit, updateTodo }
}
