import React, { useState } from 'react';
import styles from './SearchModal.module.scss';
import { MdClose } from 'react-icons/md';
import { ISearchModalProps } from '../../interfaces';

const SearchBox: React.FC<ISearchModalProps> = ({ searchModeToggle, setCityHandler }) => {
	const [cityValue, setCityValue] = useState('');

	const setCityValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setCityValue(event.target.value);
	};

	const searchByCity = () => {
		// setCity(cityValue);
		setCityHandler(cityValue);
		setCityValue('');
		searchModeToggle();
		if (cityValue === '' || undefined) {
			alert('Enter valid city name');
		}
	};

	return (
		<div className={styles.searchBoxContainer}>
			<div className={styles.closeIcon}>
				<MdClose onClick={searchModeToggle} />
			</div>
			<img alt='globe' src='/globe.png' height='30px' />
			<h3>Select Location</h3>
			<input
				type='text'
				placeholder='Enter City Name...'
				value={cityValue}
				onChange={(e) => setCityValueHandler(e)}
			/>
			<button className={styles.selectBtn} onClick={searchByCity}>
				Select
			</button>
		</div>
	);
};

export default SearchBox;
