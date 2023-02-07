import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputText from './InputText';

describe('InputText component', () => {
  it('renders label and input correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <InputText
        label="Username"
        name="username"
        placeholder="Enter username"
        type="text"
      />
    );

    expect(getByText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('updates value on change', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <InputText
        name="username"
        placeholder="Enter username"
        type="text"
        onChange={onChange}
      />
    );

    const input = getByPlaceholderText('Enter username');
    fireEvent.change(input, { target: { value: 'john' } });
    expect(onChange).toHaveBeenCalledWith('john');
  });
});
