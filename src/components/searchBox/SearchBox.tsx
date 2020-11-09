import React from 'react';
import styles from './SearchBox.module.scss';

const searchBox: React.FC = () => {
	return (
		<div className={styles.searchBoxContainer}>
			<img alt='globe' src='/globe.png' height='30px' />
			<h3>Select Location</h3>
			<input type='text' placeholder='Enter City Name...' />
			<button className={styles.selectBtn}>Select</button>
		</div>
	);
};

export default searchBox;
