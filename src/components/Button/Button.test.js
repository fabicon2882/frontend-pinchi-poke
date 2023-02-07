import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

jest.mock('../../assets/cross.svg', () => '');
jest.mock('../../assets/save.svg', () => '');
jest.mock('../../assets/add.svg', () => '');

describe('Button component', () => {
  it('renders label and icon correctly', () => {
    const { getByText, getByAltText } = render(
      <Button type="button" label="Save" iconName="iconSave" />
    );

    expect(getByText('Save')).toBeInTheDocument();
  });

  it('calls onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button type="button" label="Add" iconName="iconAdd" onClick={onClick} />
    );

    fireEvent.click(getByText('Add'));
    expect(onClick).toHaveBeenCalled();
  });
});
