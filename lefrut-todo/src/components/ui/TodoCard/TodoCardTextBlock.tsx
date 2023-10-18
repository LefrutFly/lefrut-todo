import { FC } from 'react'
import { ITodo } from '../../../types/todo.interface'
import style from './TodoCard.module.scss'

interface ITodoCardTextBlockProps {
	data: ITodo
	isChecked: boolean
}

const TodoCardTextBlock: FC<ITodoCardTextBlockProps> = ({
	data,
	isChecked,
}) => {
	return (
		<div className={`${style.text} ${isChecked ? style.crossedOutText : ''}`}>
			<div className={style.header}>
				<p>{data.header}</p>
			</div>
			<div className={style.description}>
				<p>{data.description}</p>
			</div>
		</div>
	)
}

export default TodoCardTextBlock
