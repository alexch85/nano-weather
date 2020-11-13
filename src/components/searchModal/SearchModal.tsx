import React from 'react';
import styles from './SearchModal.module.scss';
import { MdClose } from 'react-icons/md';
import { ISearchBoxProps } from '../../interfaces';

const SearchBox: React.FC<ISearchBoxProps> = ({ searchModeToggle, setCityHandler, cityValue, searchByCity }) => {
	return (
		<div className={styles.searchBoxContainer}>
			<div className={styles.closeIcon}>
				<MdClose onClick={searchModeToggle} />
			</div>
			<img alt='globe' src='/globe.png' height='30px' />
			<h3>Select Location</h3>
			<input type='text' placeholder='Enter City Name...' value={cityValue} onChange={(e) => setCityHandler(e)} />
			<button className={styles.selectBtn} onClick={searchByCity}>
				Select
			</button>
		</div>
	);
};

export default SearchBox;
