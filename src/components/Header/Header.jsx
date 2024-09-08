import './Header.css';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src='../public/header/headerLogo.svg' alt='headerLogo' />
			</div>
			<nav className='header__nav'>
				<a className='header__nav-a' href=''>
					Home
				</a>
				<a className='header__nav-a' href=''>
					About
				</a>
				<a className='header__nav-a' href=''>
					Tech Stack
				</a>
				<a className='header__nav-a' href=''>
					Projects
				</a>
				<a className='header__nav-a' href=''>
					Contact
				</a>
			</nav>
			<nav className='header__nav-icons'>
				<img
					className='header__nav-icons-svg'
					src='../public/header/github.svg'
					alt='github'
				/>
				<img
					className='header__nav-icons-svg'
					src='../public/header/twitter.svg'
					alt='twitter'
				/>
				<img
					className='header__nav-icons-svg'
					src='../public/header/linkedin.svg'
					alt='linkedin'
				/>
			</nav>
		</header>
	);
};
