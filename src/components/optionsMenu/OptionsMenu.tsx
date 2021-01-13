import React from 'react';
import styles from './OptionsMenu.module.scss';
import cx from 'classnames';
import { IOptionsMenu } from '../../interfaces';
import { AiOutlineClose } from 'react-icons/ai';

const OptionsMenu: React.FC<IOptionsMenu> = ({
  optionsMenuHandler,
  setFahrenheitHandler,
  fahrenheit,
}) => {
  return (
    <div className={styles.optionsMenu}>
      <AiOutlineClose
        className={styles.closeOptionsBtn}
        onClick={optionsMenuHandler}
      />
      <img alt='logo' src='/logo.svg' height='80px' />
      <div className={styles.optionContainer}>
        <p>Fahrenheit</p>
        <div className={styles.toggleContainer} onClick={setFahrenheitHandler}>
          <div
            className={cx(styles.toggleBtn, fahrenheit ? '' : styles.disabled)}
          />
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
