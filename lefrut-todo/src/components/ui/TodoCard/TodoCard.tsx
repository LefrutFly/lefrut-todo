import { FC } from 'react'
import { useCheckMark } from '../../../hooks/useCheckMark'
import { useSetWindow } from '../../../hooks/useSetWindow'
import { ITodo } from '../../../types/todo.interface'
import UpdateTodo from '../ChangeWindow/UpdateTodo'
import style from './TodoCard.module.scss'
import TodoCardChangeBlock from './TodoCardChangeBlock'
import TodoCardCheckMark from './TodoCardCheckMark'
import TodoCardTextBlock from './TodoCardTextBlock'

interface TodoCardProps {
	data: ITodo
	onDeleteTodo: () => void
}

const TodoCard: FC<TodoCardProps> = ({ data, onDeleteTodo }) => {
	const { isChecked, handleClickOnCheckMark } = useCheckMark(data)

	const { handleClickUpdateTodo, closeWindow, isShowWindow } = useSetWindow()

	return (
		<>
			<div className={style.body}>
				<TodoCardCheckMark
					isChecked={isChecked}
					handleClickOnCheckMark={handleClickOnCheckMark}
				/>
				<TodoCardTextBlock data={data} isChecked={isChecked} />
				<TodoCardChangeBlock
					isChecked={isChecked}
					handleClickUpdateTodo={handleClickUpdateTodo}
					data={data}
					onDeleteTodo={onDeleteTodo}
				/>
			</div>
			{isShowWindow && <UpdateTodo id={data.id} closeWindow={closeWindow} />}
		</>
	)
}

export default TodoCard
