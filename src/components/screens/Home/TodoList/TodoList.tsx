import { FC } from 'react'
import { ITodo } from '../../../../types/todo.interface'
import TodoCard from '../../../ui/TodoCard/TodoCard'
import style from './TodoList.module.scss'

interface TodoListProps {
	data: ITodo[]
	onDeleteTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({ data, onDeleteTodo }) => {
	return (
		<div className={style.body}>
			{data.length ? (
				data.map(todo => (
					<TodoCard
						key={todo.id}
						data={todo}
						onDeleteTodo={() => onDeleteTodo(todo.id)}
					/>
				))
			) : (
				<p>Something went wrong :(</p>
			)}
		</div>
	)
}

export default TodoList
