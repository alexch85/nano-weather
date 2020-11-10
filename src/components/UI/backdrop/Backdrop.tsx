import React from 'react';
import styles from './Backdrop.module.scss';
import { backdropWrapperPropsI } from '../../../interfaces';

const Backdrop: React.FC<backdropWrapperPropsI> = ({ children }) => {
	return <div className={styles.backdrop}>{children}</div>;
};

export default Backdrop;
