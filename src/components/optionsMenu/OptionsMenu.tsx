import React from 'react';
import styles from './OptionsMenu.module.scss';
import cx from 'classnames';
import { IOptionsMenu } from '../../interfaces';

const OptionsMenu: React.FC<IOptionsMenu> = ({ optionsMenuHandler, setDarkModeHandler, darkMode }) => {
	return (
		<div className={styles.optionsMenu}>
			<img alt='logo' src='/logo.svg' height='80px' />
			<div className={styles.optionContainer}>
				<p>DarkMode</p>
				<div className={styles.toggleContainer} onClick={setDarkModeHandler}>
					<div className={cx(styles.toggleBtn, darkMode ? '' : styles.disabled)} />
				</div>
			</div>
			<div className={styles.optionContainer}>
				<p>Celius</p>
				{/* <div className={styles.toggleContainer} onClick={toggleSelected}>
					<div className={cx(styles.toggleBtn, selected ? '' : styles.disabled)} />
				</div> */}
			</div>
			<button className={styles.saveBtn} onClick={optionsMenuHandler}>
				{' '}
				Save Changes
			</button>
		</div>
	);
};

export default OptionsMenu;
