import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Info } from './components/info/Info';
import { Projects } from './components/projects/Projects';
import { Stack } from './components/stack/Stack';

const Main = () => {
	return (
		<main className='main'>
			<Info />
			<Stack />
			<Projects />
		</main>
	);
};

export const App = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};
