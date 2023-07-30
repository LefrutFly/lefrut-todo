import { ChangeEvent, FC, useState } from 'react'
import {
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { ITodo } from '../../../types/todo.interface'
import style from './ChangeTodoWindow.module.scss'

interface IChangeTodoWindow {
	register: UseFormRegister<ITodo>
	handleSubmit: UseFormHandleSubmit<ITodo, undefined>
	changeTodo: SubmitHandler<ITodo>
	requiredHeader: boolean
	requiredDescription: boolean
}

const ChangeTodoWindow: FC<IChangeTodoWindow> = ({
	register,
	handleSubmit,
	changeTodo,
	requiredHeader,
	requiredDescription,
}) => {
	const [headerInput, setHeaderInput] = useState<string>('')

	const handleInputHeaderChange = (event: ChangeEvent<HTMLInputElement>) => {
		setHeaderInput(event.target.value)
	}

	const [descriptionInput, setDescriptionInput] = useState<string>('')

	const handleInputDescriptionChange = (
		event: ChangeEvent<HTMLTextAreaElement>
	) => {
		setDescriptionInput(event.target.value)
	}

	return (
		<div className={style.body}>
			<form className={style.form} onSubmit={handleSubmit(changeTodo)}>
				<div className={style.inputContainer}>
					<input
						id='header'
						className={style.inputHeader}
						{...register('header', { required: requiredHeader })}
						placeholder='Enter a title for your task here'
						onChange={handleInputHeaderChange}
					/>
					<label
						htmlFor='header'
						className={`${style.label} ${headerInput && style.visible}`}
					>
						Title
					</label>
				</div>

				<div className={style.inputContainer}>
					<textarea
						id='description'
						className={style.inputDescription}
						{...register('description', { required: requiredDescription })}
						placeholder='Enter a description for your task here'
						onChange={handleInputDescriptionChange}
						rows={6}
					/>
					<label
						htmlFor='description'
						className={`${style.label} ${descriptionInput && style.visible}`}
					>
						Description
					</label>
				</div>

				<button className={style.button}>Apply</button>
			</form>
		</div>
	)
}

export default ChangeTodoWindow
