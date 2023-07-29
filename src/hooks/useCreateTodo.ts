import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { TodoService } from '../services/todo.service'
import { ITodo } from '../types/todo.interface'

export const useCreateTodo = (reset: UseFormReset<ITodo>) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['create todo'],
		(data: ITodo) => TodoService.createNew(data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['todos'])
				reset()
			},
		}
	)

	const createTodo: SubmitHandler<ITodo> = data => {
		mutate(data)
	}

	return { createTodo }
}
