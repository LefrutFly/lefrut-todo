import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { TodoService } from '../services/todo.service'
import { ITodo } from '../types/todo.interface'

export const useUpdateTodo = (
	reset: UseFormReset<ITodo>,
	id: number,
	close: () => void
) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['update todo'],
		(data: ITodo) => TodoService.updateById(id, data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['todos'])
				reset()
			},
		}
	)

	const updateTodo: SubmitHandler<ITodo> = data => {
		mutate(data)
		close()
	}

	return { updateTodo }
}
