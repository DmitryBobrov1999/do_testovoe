import './Footer.css';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__info'>
				<img src='../public/footer/footerLogo.svg' alt='footerLogo' />
				<p className='footer__phone'>+91 12345 09876</p>
				<p className='footer__email'>info@example.com</p>
				<nav className='footer__nav-icons'>
					<img
						className='footer__nav-icons-svg'
						src='../public/footer/githubFilled.svg'
						alt='githubFilled'
					/>
					<img
						className='footer__nav-icons-svg'
						src='../public/footer/twitterFilled.svg'
						alt='twitterFilled'
					/>
					<img
						className='footer__nav-icons-svg'
						src='../public/footer/linkedinFilled.svg'
						alt='linkedinFilled'
					/>
				</nav>
			</div>
			<hr className='footer__hr' />
			<div className='footer__navCopy'>
				<nav className='footer__nav'>
					<a className='footer__nav-a' href=''>
						Home
					</a>
					<a className='footer__nav-a' href=''>
						About
					</a>
					<a className='footer__nav-a' href=''>
						Tech Stack
					</a>
					<a className='footer__nav-a' href=''>
						Projects
					</a>
					<a className='footer__nav-a' href=''>
						Contact
					</a>
				</nav>
				<span className='footer__copyright'>
					<span>Designed and built by</span> Pavan MG <span>with</span> Love{' '}
					<span>&</span> Coffee
				</span>
			</div>
		</footer>
	);
};
