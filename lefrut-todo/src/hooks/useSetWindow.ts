import { useState } from 'react'

export const useSetWindow = () => {
	const [isShowWindow, setWindow] = useState(false)

	const handleClickUpdateTodo = () => {
		setWindow(!isShowWindow)
	}

	const closeWindow = () => {
		setWindow(false)
	}

	return { handleClickUpdateTodo, closeWindow, isShowWindow }
}
