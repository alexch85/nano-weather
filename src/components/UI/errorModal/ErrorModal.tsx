import React from 'react';
import { IErrorModalProps } from '../../../interfaces';
import styles from './ErrorModal.module.scss';
import cx from 'classnames';

const ErrorModal: React.FC<IErrorModalProps> = ({ closeErrorHandler, darkMode }) => {
	return (
		<div className={darkMode ? cx(styles.dark, styles.errorModal) : styles.errorModal}>
			<p>Please Enter a valid city name</p>
			<button className={styles.closeBtn} onClick={closeErrorHandler}>
				close
			</button>
		</div>
	);
};

export default ErrorModal;
