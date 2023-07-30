import { FC, useState } from 'react'
import { TodoService } from '../../../services/todo.service'
import { ITodo } from '../../../types/todo.interface'
import UpdateTodo from '../ChangeWindow/UpdateTodo'
import style from './TodoCard.module.scss'

interface TodoCardProps {
	data: ITodo
	onDeleteTodo: () => void
}

const TodoCard: FC<TodoCardProps> = ({ data, onDeleteTodo }) => {
	const [isChecked, setIsChecked] = useState<boolean>(data.isCompleted)

	const handleClickOnCheckMark = async () => {
		const newIsChecked = !isChecked
		setIsChecked(newIsChecked)

		await TodoService.updateById(data.id, {
			...data,
			isCompleted: newIsChecked,
		})
	}

	const handleClickDeleteTodo = async () => {
		await TodoService.deleteById(data.id)
		onDeleteTodo()
	}

	const [isShowWindow, setWindow] = useState(false)

	const handleClickUpdateTodo = () => {
		setWindow(!isShowWindow)
	}

	const closeWindow = () => {
		setWindow(false)
	}

	return (
		<>
			<div className={style.body}>
				<div
					className={isChecked ? style.checkMark : style.checked}
					onClick={handleClickOnCheckMark}
				></div>
				<div
					className={`${style.text} ${isChecked ? style.crossedOutText : ''}`}
				>
					<div className={style.header}>
						<p>{data.header}</p>
					</div>
					<div className={style.description}>
						<p>{data.description}</p>
					</div>
				</div>
				<div
					className={`${style.leftPanel} ${isChecked ? style.crossedOut : ''}`}
				>
					<div className={style.change} onClick={handleClickUpdateTodo}></div>
					<div className={style.delete} onClick={handleClickDeleteTodo}></div>
				</div>
			</div>
			{isShowWindow && <UpdateTodo id={data.id} closeWindow={closeWindow} />}
		</>
	)
}

export default TodoCard
