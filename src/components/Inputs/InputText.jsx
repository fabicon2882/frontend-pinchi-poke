import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import inputStyle from './InputText.module.css';
import classNames from 'classnames';

const InputText = forwardRef(
  (
    {
      name,
      label,
      id,
      placeholder,
      type,
      className,
      classNameLabel,
      classNameInput,
      value,
      onChange,
      img,
    },
    ref
  ) => {
    return (
      <div
        className={classNames([
          'd-flex flex-row justify-content-start items-center gap-x',
          className,
        ])}
      >
        <label htmlFor={id} className={classNames([classNameLabel])}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          name={name}
          value={value}
          className={classNames([inputStyle['form-control'], classNameInput])}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {img ? (
          <img
            className="absolute mt-1 ml-1"
            src={img}
            width={24}
            height={24}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
);

export default InputText;

InputText.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  img: PropTypes.string,
};
