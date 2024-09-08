import './Stack.css';
import { StackIconsArray } from './StackIcons';

export const Stack = () => {
	return (
		<div className='stack'>
			<p className='stack__title'>My Tech Stack</p>
			<p className='stack__text'>
				Technologies I’ve been working with recently
			</p>
			<div className='stack__icons'>
				{StackIconsArray.map(stackIcon => (
					<div className='stack__icons-svg' key={stackIcon.id}>
						<img
							className='stack__icons-svg-img'
							src={stackIcon.link}
							alt={stackIcon.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
