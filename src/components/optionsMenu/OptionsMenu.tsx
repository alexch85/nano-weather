import React from 'react';
import styles from './OptionsMenu.module.scss';
import cx from 'classnames';
import { IOptionsMenu } from '../../interfaces';

const OptionsMenu: React.FC<IOptionsMenu> = ({
	optionsMenuHandler,
	setDarkModeHandler,
	darkMode,
	setFahrenheitHandler,
	fahrenheit,
}) => {
	return (
		<div className={darkMode ? cx(styles.optionsMenu, styles.dark) : styles.optionsMenu}>
			<img alt='logo' src='/logo.svg' height='80px' />
			<div className={styles.optionContainer}>
				<p>DarkMode</p>
				<div className={styles.toggleContainer} onClick={setDarkModeHandler}>
					<div className={cx(styles.toggleBtn, darkMode ? '' : styles.disabled)} />
				</div>
			</div>
			<div className={styles.optionContainer}>
				<p>Fahrenheit</p>
				<div className={styles.toggleContainer} onClick={setFahrenheitHandler}>
					<div className={cx(styles.toggleBtn, fahrenheit ? '' : styles.disabled)} />
				</div>
			</div>
			<button className={styles.saveBtn} onClick={optionsMenuHandler}>
				{' '}
				Save Changes
			</button>
		</div>
	);
};

export default OptionsMenu;
