import { useTodos } from '../../../hooks/useTodos'
import CreateTodo from './CreateTodo/CreateTodo'
import Header from './Header/Header'
import style from './Home.module.scss'
import NoTodos from './NoTodos/NoTodos'
import TodoList from './TodoList/TodoList'

const Home = () => {
	const { todos, isLoading, handleDeleteTodo } = useTodos()

	if (isLoading) return <p>Loading...</p>

	return (
		<div className={style.body}>
			<Header />
			<CreateTodo />
			{todos.length > 0 ? (
				<TodoList data={todos} onDeleteTodo={handleDeleteTodo} />
			) : (
				<NoTodos />
			)}
		</div>
	)
}

export default Home
