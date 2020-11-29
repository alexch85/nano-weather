import React, { useState } from 'react';
import styles from './SearchModal.module.scss';
import { ISearchModalProps } from '../../interfaces';

const SearchBox: React.FC<ISearchModalProps> = ({ setCityHandler, darkMode }) => {
	const [cityValue, setCityValue] = useState('');

	const setCityValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setCityValue(event.target.value);
	};

	const searchByCity = () => {
		setCityHandler(cityValue);
		setCityValue('');
	};

	const searchByCityEnter = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			setCityHandler(cityValue);
			setCityValue('');
		}
	};

	return (
		<div className={darkMode ? styles.searchBoxContainerdark : styles.searchBoxContainer}>
			<img alt='globe' src='/globe.png' height='30px' />
			{/* <h3>Enter location</h3> */}
			<input
				type='text'
				placeholder='Enter City Name...'
				value={cityValue}
				onChange={(e) => setCityValueHandler(e)}
				onKeyPress={searchByCityEnter}
			/>
			<button className={styles.selectBtn} onClick={searchByCity} disabled={cityValue === ''}>
				Select
			</button>
		</div>
	);
};

export default SearchBox;
