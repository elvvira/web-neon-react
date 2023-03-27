import style from './header.module.scss';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style['header-top']}>
				<img className={style.logo} src='public/images/logo.svg' alt='' />
				<p className={style.sign}>Sign in</p>
				<button className={style['button-started']}>Get Started</button>
			</div>
			<button className={style['button-large']}>
				Launching Infinite Workspaces. <span> Learn More</span>
			</button>
			<h1 className={style.h1}>Where the world builds software</h1>
			<p className={style.description}>
				Our landing page template works on all devices, so you only have to set
				it up once, and get beautiful results forever.
			</p>
			<div className={style['button-container']}>
				<button className={style['button-started']}>
					Get Started For Free
				</button>
				<button className={style['button-explore']}>Explore Docs</button>
			</div>
		</header>
	);
};
export default Header;
