import { FC } from 'react'
import style from './TodoCard.module.scss'

interface ITodoCardCheckMarkProps {
	isChecked: boolean
	handleClickOnCheckMark: () => Promise<void>
}

const TodoCardCheckMark: FC<ITodoCardCheckMarkProps> = ({
	isChecked,
	handleClickOnCheckMark,
}) => {
	return (
		<div
			className={isChecked ? style.checkMark : style.checked}
			onClick={handleClickOnCheckMark}
		></div>
	)
}

export default TodoCardCheckMark
