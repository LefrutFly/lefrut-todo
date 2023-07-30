import React from 'react'
import style from './CreateTodo.module.scss'

interface ICreateTodoButtonProps {
	onClick: () => void
	isShowChangeTodoWindow: boolean
}

const CreateTodoButton: React.FC<ICreateTodoButtonProps> = ({
	onClick,
	isShowChangeTodoWindow,
}) => {
	return (
		<div className={style.body} onClick={onClick}>
			<div className={style.plus}></div>
			{isShowChangeTodoWindow ? (
				<p>Click here to cancel the creation of a new TODO.</p>
			) : (
				<p>Click here to create a new TODO.</p>
			)}
		</div>
	)
}

export default CreateTodoButton
