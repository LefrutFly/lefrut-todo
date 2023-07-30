import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { TodoService } from '../services/todo.service.ts'
import { ITodo } from '../types/todo.interface.ts'

export const useTodos = () => {
	const { data, isLoading } = useQuery(['todos'], () => TodoService.getAll())
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		if (data) {
			setTodos(data.data)
		}
	}, [data])

	const handleDeleteTodo = async (id: number) => {
		try {
			await TodoService.deleteById(id)
			setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
		} catch (error) {
			console.error('Error deleting todo:', error)
		}
	}

	return { todos, isLoading, handleDeleteTodo }
}
