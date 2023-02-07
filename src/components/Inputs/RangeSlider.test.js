import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RangeSlider from './RangeSlider';

describe('RangeSlider component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <RangeSlider labeltext="Volume" name="volume" min={0} max={100} />
    );
    const input = getByTestId('range-slider-input');
    expect(input).toBeInTheDocument();
  });

  it('calls the onChange callback', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <RangeSlider
        labeltext="Volume"
        name="volume"
        min={0}
        max={100}
        onChange={onChange}
      />
    );
    const input = getByTestId('range-slider-input');
    fireEvent.change(input, { target: { value: 75 } });
    expect(onChange).toHaveBeenCalledWith(75);
  });
});
