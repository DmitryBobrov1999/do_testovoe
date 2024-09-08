import './Info.css';

export const Info = () => {
	return (
		<div className='info'>
			<div className='info__text'>
				<span className='info__text-span'>
					<span>
						Hi 👋, <br /> My name is <br />
					</span>{' '}
					Pavan MG
					<span>
						<br /> I build things for web
					</span>
				</span>
			</div>
			<div className='info__img'>
				<img className='info__img-photo' src='./public/info.svg' alt='info' />
			</div>
		</div>
	);
};
