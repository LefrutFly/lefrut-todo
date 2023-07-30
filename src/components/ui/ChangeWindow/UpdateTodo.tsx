import { FC } from 'react'
import ChangeTodoWindow from './ChangeTodoWindow'
import { useUpdateWindow } from './hooks/useUpdateWindow.ts'

interface IUpdateTodoProps {
	id: number
	closeWindow: () => void
}

const UpdateTodo: FC<IUpdateTodoProps> = ({ id, closeWindow }) => {
	const { register, handleSubmit, updateTodo } = useUpdateWindow(
		id,
		closeWindow
	)

	return (
		<ChangeTodoWindow
			register={register}
			handleSubmit={handleSubmit}
			changeTodo={updateTodo}
			requiredHeader={false}
			requiredDescription={false}
		/>
	)
}

export default UpdateTodo
