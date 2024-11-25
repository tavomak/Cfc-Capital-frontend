import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '@/components/Atoms/Spinner';

const Button = ({
  children,
  loading,
  loadingType,
  text,
  className,
  submit,
  onClick,
  disabled,
}) => (
  <button
    className={`${className} flex align-center gap-2 disabled:opacity-70`}
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    disabled={loading || disabled}
  >
    {loading && <Spinner type={loadingType} />}
    {children || text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
