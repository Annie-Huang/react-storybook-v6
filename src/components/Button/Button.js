import React from 'react';

const ButtonStories = (props) => {
  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default ButtonStories;
