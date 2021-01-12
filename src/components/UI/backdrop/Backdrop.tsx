import React from 'react';
import styles from './Backdrop.module.scss';
import { IBackdropWrapperProps } from '../../../interfaces';

const Backdrop: React.FC<IBackdropWrapperProps> = ({ children }) => {
  return <div className={styles.backdrop}>{children}</div>;
};

export default Backdrop;
