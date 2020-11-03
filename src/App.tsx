import React from 'react';
import styles from './App.module.scss';
import MainDisplay from './components/mainDisplay/MainDisplay';

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<MainDisplay />
		</div>
	);
};

export default App;
