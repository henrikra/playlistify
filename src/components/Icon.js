import React from 'react';
import classNames from 'classnames';

const Icon = ({ icon, className }) => {
  const classes = classNames('fa', {
    [`fa-${icon}`]: icon,
    [`${className}`]: className
  });
  
  return <i className={classes} aria-hidden="true" />
};

export default Icon;
