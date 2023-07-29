import style from './NoDodos.module.scss'

const NoTodos = () => {
	return (
		<div className={style.body}>
			<p>
				You don't have any TODOs yet. You need to add them in order for your
				task list to be displayed here.
			</p>
		</div>
	)
}

export default NoTodos
