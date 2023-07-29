import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { TodoService } from '../services/todo.service'
import { ITodo } from '../types/todo.interface'

export const useUpdateTodo = (reset: UseFormReset<ITodo>) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['update todo'],
		(data: ITodo) =>
			TodoService.updateById(data.id, {
				header: 'работает ли?',
				description: 'ааа?',
				isCompleted: false,
				id: data.id,
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['todos'])
				reset()
			},
		}
	)

	const updateTodo: SubmitHandler<ITodo> = data => {
		mutate(data)
	}

	return { updateTodo }
}
