import style from './Header.module.scss'

const Header = () => {
	return (
		<div className={style.body}>
			<div className={style.logo}></div>
			<div className={style.logoText}>
				<p>Lefrut TODO List</p>
			</div>
		</div>
	)
}

export default Header
