import React, { useEffect, useState } from 'react';
import { IWrapperProps } from '../../../interfaces';
import styles from './BgWrapper.module.scss';
import cx from 'classnames';

const BgWrapper: React.FC<IWrapperProps> = ({
  children,
  screenWidth,
  city,
}) => {
  const [background, setBackground] = useState('');
  //define breakpoint for changing background image size
  const breakpoint = 450;
  const setBackgroundHandler = () => {
    const dateNow = new Date();
    const timeNow = dateNow.getHours();

    let background = '';
    //if we have city value use globe background
    if (city) {
      breakpoint >= screenWidth
        ? (background = 'url(backgrounds/bg-mobile-globe@2x.jpg)')
        : (background = 'url(backgrounds/bg-globe@2x.jpg)');
    } else {
      //change background based on day time(if we have local weather coordinates by latitude and longitude)
      if (timeNow >= 6 && timeNow <= 12) {
        breakpoint >= screenWidth
          ? (background = 'url(backgrounds/bg-mobile-clear-dawn@2x.jpg)')
          : (background = 'url(backgrounds/bg-dawn-clear@2x.jpg)');
      }
      if (timeNow >= 12 && timeNow <= 17) {
        breakpoint >= screenWidth
          ? (background = 'url(backgrounds/bg-mobile-clear-noon@2x.jpg)')
          : (background = 'url(backgrounds/bg-noon-clear@2x.jpg)');
      }
      if (timeNow >= 17 && timeNow <= 20) {
        breakpoint >= screenWidth
          ? (background = 'url(backgrounds/bg-mobile-clear-dusk@2x.jpg)')
          : (background = 'url(backgrounds/bg-dusk-clear@2x.jpg)');
      }
      if (timeNow >= 20 || timeNow <= 6) {
        breakpoint >= screenWidth
          ? (background = 'url(backgrounds/bg-mobile-clear-night@2x.jpg)')
          : (background = 'url(backgrounds/bg-night-clear@2x.jpg)');
      }
    }

    return background;
  };
  useEffect(() => {
    const backgroundSet = () => {
      setBackground(setBackgroundHandler());
    };
    backgroundSet();
  });

  return (
    <div
      className={city ? cx(styles.center, styles.bgWrapper) : styles.bgWrapper}
      style={
        background ? { backgroundImage: background } : { background: 'black' }
      }>
      {children}
    </div>
  );
};

export default BgWrapper;
