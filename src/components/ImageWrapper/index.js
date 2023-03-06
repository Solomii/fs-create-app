import React, { Component } from 'react'
import PropTypes from 'prop-types'


import styles from './ImageWrapper.module.scss'

 

const ImageWrapper = (props) => {
  const { children } = props;
  return <div className={styles.box__img}>{children}</div>;
};



ImageWrapper.propTypes = {
  src: PropTypes.string.isRequired
}

export default ImageWrapper;