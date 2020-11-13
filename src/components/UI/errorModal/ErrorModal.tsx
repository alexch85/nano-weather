import React from 'react';
import { IErrorModalProps } from '../../../interfaces';
import styles from './ErrorModal.module.scss';

const ErrorModal: React.FC<IErrorModalProps> = ({ closeErrorHandler }) => {
	return (
		<div className={styles.errorModal}>
			<p>Please Enter a valid city name</p>
			<button className={styles.selectBtn} onClick={closeErrorHandler}>
				close
			</button>
		</div>
	);
};

export default ErrorModal;
