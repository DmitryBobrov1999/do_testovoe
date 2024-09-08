import './Header.css';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src='./header/headerLogo.svg' alt='headerLogo' />
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
					src='./header/github.svg'
					alt='github'
				/>
				<img
					className='header__nav-icons-svg'
					src='./header/twitter.svg'
					alt='twitter'
				/>
				<img
					className='header__nav-icons-svg'
					src='./header/linkedin.svg'
					alt='linkedin'
				/>
			</nav>
		</header>
	);
};
