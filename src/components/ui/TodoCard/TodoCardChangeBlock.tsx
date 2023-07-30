import { FC } from 'react'
import { TodoService } from '../../../services/todo.service'
import { ITodo } from '../../../types/todo.interface'
import style from './TodoCard.module.scss'

interface ITodoCardChangeBlockProps {
	isChecked: boolean
	handleClickUpdateTodo: () => void
	data: ITodo
	onDeleteTodo: () => void
}

const TodoCardChangeBlock: FC<ITodoCardChangeBlockProps> = ({
	isChecked,
	handleClickUpdateTodo,
	data,
	onDeleteTodo,
}) => {
	const handleClickDeleteTodo = async () => {
		await TodoService.deleteById(data.id)
		onDeleteTodo()
	}

	return (
		<div className={`${style.leftPanel} ${isChecked ? style.crossedOut : ''}`}>
			<div className={style.change} onClick={handleClickUpdateTodo}></div>
			<div className={style.delete} onClick={handleClickDeleteTodo}></div>
		</div>
	)
}

export default TodoCardChangeBlock
