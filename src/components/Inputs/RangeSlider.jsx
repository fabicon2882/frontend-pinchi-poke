import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import rangeSliderStyle from './RangeSlider.module.css';

const RangeSlider = forwardRef((props, ref) => {
  const { labeltext, name, min, max, onChange, value } = props;

  return (
    <div className={classNames([rangeSliderStyle.range])}>
      <span className={rangeSliderStyle['range-text']}>{labeltext}</span>
      <span className={rangeSliderStyle['range-min']}>0</span>
      <span className={rangeSliderStyle['range-max']}>{value}</span>
      <span
        className={rangeSliderStyle['range-value']}
        style={{ width: `${value}%` }}
      />
      <span
        className={rangeSliderStyle.circle}
        style={{ left: `calc(${value}% - 15px)` }}
      />
      <input
        className={rangeSliderStyle['range-slide']}
        ref={ref}
        name={name}
        type="range"
        min={min}
        max={max}
        value={value}
        step="1"
        onChange={onChange}
      />
    </div>
  );
});

export default RangeSlider;

RangeSlider.propTypes = {
  labeltext: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
