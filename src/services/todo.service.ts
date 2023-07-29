import axios from 'axios'
import { ITodo, ITodoData } from '../types/todo.interface'

export const TodoService = {
	async getAll() {
		const data = await axios.get<ITodo[]>('http://localhost:3000/todos')

		return data
	},
	async getById(id: number) {
		const data = await this.getAll()

		return data.data[id - 1]
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
		try {
			const exists = await this.checkExistsComponentByID(id)

			if (exists) {
				await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo)
			}
		} catch (error) {
			console.error('Ошибка при обновлении задачи:', error)
		}
	},
	async createNew(data: ITodoData) {
		const newData = { ...data, isCompleted: false }
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
