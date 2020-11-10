import React from 'react';
import styles from './SearchBox.module.scss';
import { MdClose } from 'react-icons/md';
import { ISearchBoxProps } from '../../interfaces';

const SearchBox: React.FC<ISearchBoxProps> = ({ searchModeToggle }) => {
	return (
		<div className={styles.searchBoxContainer}>
			<div className={styles.closeIcon}>
				<MdClose onClick={searchModeToggle} />
			</div>
			<img alt='globe' src='/globe.png' height='30px' />
			<h3>Select Location</h3>
			<input type='text' placeholder='Enter City Name...' />
			<button className={styles.selectBtn}>Select</button>
		</div>
	);
};

export default SearchBox;
