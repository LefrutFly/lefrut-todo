import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { TodoService } from '../../../services/todo.service'
import { ITodo } from '../../../types/todo.interface'
import CreateTodo from './CreateTodo/CreateTodo'
import Header from './Header/Header'
import style from './Home.module.scss'
import NoTodos from './NoTodos/NoTodos'
import TodoList from './TodoList/TodoList'

const Home = () => {
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
			console.error('Ошибка при удалении задачи:', error)
		}
	}

	if (isLoading) return <p>Loading...</p>

	return (
		<div className={style.body}>
			<Header />
			<CreateTodo />
			{data ? (
				data.data.length > 0 ? (
					<TodoList data={todos} onDeleteTodo={handleDeleteTodo} />
				) : (
					<NoTodos />
				)
			) : null}
		</div>
	)
}

export default Home
