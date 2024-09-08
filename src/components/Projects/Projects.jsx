import './Projects.css';
import { ProjectsItemsArray } from './projectsItems';

export const Projects = () => {
	return (
		<div className='projects'>
			<p className='projects__title'>Projects</p>
			<p className='projects__text'>Things I’ve built so far</p>
			<div className='projects__cards'>
				{ProjectsItemsArray.map(project => (
					<div key={project.id} className='projects__card'>
						<img
							className='projects__card-img'
							src={project.img}
							alt={project.title}
						/>
						<div className='projects__card-info'>
							<p className='projects__card-title'>{project.title}</p>
							<p className='projects__card-text'>{project.text}</p>
							<p className='projects__card-techStack'>
								Tech stack : <span>{project.techStack}</span>
							</p>
							<div className='projects__card-block'>
								<div className='projects__card-linkBlock'>
									<img src='../public/projects/linkChain.svg' alt='linkChain' />
									<a className='projects__card-link' href=''>
										Live Preview
									</a>
								</div>
								<div className='projects__card-linkBlock'>
									<img
										src='../public/projects/linkGithub.svg'
										alt='linkGithub'
									/>
									<a className='projects__card-link' href=''>
										View Code
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
