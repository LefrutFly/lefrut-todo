export interface ITodo {
	id: number
	header: string
	description: string
	isCompleted: boolean
}

export interface ITodoList {
	data: ITodo[]
}

export interface ITodoObject {
	data: ITodo
}
