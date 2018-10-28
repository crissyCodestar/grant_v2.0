import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Button.css';

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
  PRIMARY_GRADIENT: 'primary_gradient',
  WARNING_GRADIENT: 'warning_gradient',
  PRIMARY_GRADIENT_SOCIAL: 'primary_gradient_social',

};

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const MI = {
  MATERIAL_ICON: 'material-icon'
}

export const Button = ({type, onClick, text, colorValue, size, icon, i}) => (
    <button

      type={type}
      onClick={onClick}

       className={classNames(
         styles.btn,
          MI.MATERIAL_ICON,
         styles[ colorValue || TYPES.PRIMARY ],
         styles[ size || SIZES.MEDIUM ],
       )}
    >
    {text}
    {icon}

    </button>
);
