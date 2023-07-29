import { useState } from 'react'
import CreateNewTodo from '../../../ui/ChangeWindow/CreateNewTodo'
import style from './CreateTodo.module.scss'

const CreateTodo = () => {
	const [isShowChangeTodoWindow, setShowChangeTodoWindow] = useState(false)

	const openChangeTodoWindow = () => {
		setShowChangeTodoWindow(!isShowChangeTodoWindow)
	}

	return (
		<>
			<div className={style.body} onClick={openChangeTodoWindow}>
				<div className={style.plus}></div>
				{isShowChangeTodoWindow ? (
					<p>Click here to cancel the creation of a new TODO.</p>
				) : (
					<p>Click here to create a new TODO.</p>
				)}
			</div>
			{isShowChangeTodoWindow && <CreateNewTodo />}
		</>
	)
}

export default CreateTodo
