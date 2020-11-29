import React, { useState } from 'react';
import styles from './OptionsMenu.module.scss';
import cx from 'classnames';
import { RiCloseFill } from 'react-icons/ri';
import { IOptionsMenu } from '../../interfaces';

const OptionsMenu: React.FC<IOptionsMenu> = ({ optionsMenuHandler }) => {
	const [selected, setSelected] = useState(false);

	function toggleSelected() {
		setSelected((prevSelected) => !prevSelected);
	}

	return (
		<div className={styles.optionsMenu}>
			<RiCloseFill className={styles.closeOptionsBtn} onClick={optionsMenuHandler} />
			<img alt='logo' src='/logo.svg' height='80px' />
			<div className={styles.optionContainer}>
				<p>DarkMode</p>
				<div className={styles.toggleContainer} onClick={toggleSelected}>
					<div className={cx(styles.toggleBtn, selected ? '' : styles.disabled)} />
				</div>
			</div>
			<div className={styles.optionContainer}>
				<p>Celius</p>
				<div className={styles.toggleContainer} onClick={toggleSelected}>
					<div className={cx(styles.toggleBtn, selected ? '' : styles.disabled)} />
				</div>
			</div>
		</div>
	);
};

export default OptionsMenu;
