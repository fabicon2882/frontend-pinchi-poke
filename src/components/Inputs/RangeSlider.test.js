import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RangeSlider from './RangeSlider';

jest.mock('./RangeSlider.module.css', () => '');

describe('RangeSlider component', () => {
  it('renders without crashing', () => {
    render(
      <RangeSlider
        labeltext="Test label"
        name="test"
        min={0}
        max={100}
        value={0}
      />
    );
  });

  it('displays the correct label text', () => {
    const { getByText } = render(
      <RangeSlider
        labeltext="Test label"
        name="test"
        min={0}
        max={100}
        value={0}
      />
    );

    expect(getByText('Test label')).toBeInTheDocument();
  });

  it('displays the correct minimum and maximum values', () => {
    const { getByText } = render(
      <RangeSlider
        labeltext="Test label"
        name="test"
        min={0}
        max={100}
        value={50}
      />
    );

    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
  });
});
