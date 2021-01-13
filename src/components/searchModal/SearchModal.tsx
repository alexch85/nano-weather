import React, { useState } from 'react';
import styles from './SearchModal.module.scss';
import { ISearchModalProps } from '../../interfaces';

const SearchBox: React.FC<ISearchModalProps> = ({ setCityHandler }) => {
  const [cityValue, setCityValue] = useState('');

  //set city value
  const setCityValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCityValue(event.target.value);
  };

  // set city handler and reset the city value to ''
  const searchByCity = () => {
    setCityHandler(cityValue);
    setCityValue('');
  };

  //on key press enter handler
  const searchByCityEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setCityHandler(cityValue);
      setCityValue('');
    }
  };

  return (
    <div className={styles.searchBoxContainer}>
      <img alt='globe' src={'/globe.png'} height='30px' />
      <input
        type='text'
        placeholder='Enter City Name...'
        value={cityValue}
        onChange={(e) => setCityValueHandler(e)}
        onKeyPress={searchByCityEnter}
      />
      <button
        className={styles.selectBtn}
        onClick={searchByCity}
        disabled={cityValue === ''}>
        Select
      </button>
    </div>
  );
};

export default SearchBox;
