import React from 'react';
import { string } from 'prop-types';
import "./Button.scss";

const Button = ({ variant, children }) => {
  const classes = `button button--${variant}`;

  return (
    <button className={classes}>{children}</button>
  );
}

Button.Success = ({ children }) => <Button variant="success">{children}</Button>

Button.Danger = ({ children }) => <Button variant="danger">{children}</Button>

Button.Info = ({ children }) => <Button variant="info">{children}</Button>

Button.propTypes = {
  variant: string
}

Button.defaultProps = {
  variant: ""
}

export default Button;
