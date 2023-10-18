import axios from 'axios'
import { ITodo } from '../types/todo.interface'

export const TodoService = {
	async getAll() {
		const data = await axios.get<ITodo[]>('http://localhost:3000/todos')

		return data
	},
	async getById(id: number) {
		const response = await axios.get(`http://localhost:3000/todos?id=${id}`)

		return response.data[0]
	},
	async deleteById(id: number) {
		try {
			const exists = await this.checkExistsComponentByID(id)

			if (exists) {
				await axios.delete(`http://localhost:3000/todos/${id}`)
			}
		} catch (error) {
			console.error('Ошибка при удалении задачи:', error)
		}
	},
	async checkExistsComponentByID(id: number) {
		try {
			const response = await axios.head(`http://localhost:3000/todos/${id}`)
			return response.status === 200
		} catch (error) {
			return false
		}
	},
	async updateById(id: number, updatedTodo: ITodo) {
		return axios
			.put(`http://localhost:3000/todos/${id}`, updatedTodo)
			.catch(function (error) {
				console.log(error)
			})
	},
	async createNew(data: ITodo) {
		const newData: ITodo = {
			id: data.id,
			header: data.header,
			description: data.description,
			isCompleted: false,
		}

		try {
			const response = await axios.post<ITodo>(
				'http://localhost:3000/todos',
				newData
			)
			return response.data
		} catch (error) {
			console.error('Ошибка при создании задачи:', error)
			throw error
		}
	},
}
