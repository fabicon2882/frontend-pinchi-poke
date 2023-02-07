import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputText from './InputText';

describe('InputText component', () => {
  it('renders the component correctly', () => {
    const { getByLabelText } = render(
      <InputText
        label="Email"
        name="email"
        id="email"
        placeholder="Enter your email"
        type="email"
        value=""
        onChange={() => {}}
      />
    );
    const inputElement = getByLabelText('Email');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates the value of the input field on change', () => {
    const { getByLabelText } = render(
      <InputText
        label="Email"
        name="email"
        id="email"
        placeholder="Enter your email"
        type="email"
        value="test@test.com"
        onChange={() => {}}
      />
    );
    const inputElement = getByLabelText('Email');
    fireEvent.change(inputElement, { target: { value: 'test@test.com' } });
    expect(inputElement.value).toBe('test@test.com');
  });
});
