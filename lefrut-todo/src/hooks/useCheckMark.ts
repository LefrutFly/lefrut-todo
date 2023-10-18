import { useState } from 'react'
import { TodoService } from '../services/todo.service'
import { ITodo } from '../types/todo.interface'

export const useCheckMark = (data: ITodo) => {
	const [isChecked, setIsChecked] = useState<boolean>(data.isCompleted)

	const handleClickOnCheckMark = async () => {
		const newIsChecked = !isChecked
		setIsChecked(newIsChecked)

		await TodoService.updateById(data.id, {
			...data,
			isCompleted: newIsChecked,
		})
	}

	return { isChecked, handleClickOnCheckMark }
}
