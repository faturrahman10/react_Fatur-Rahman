import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CreateProduct from './index';

// eslint-disable-next-line no-undef
it('Product Name input can accept text input and display it', () => {
  render(<CreateProduct />);

  const productNameInput = screen.getByLabelText('Product Name');

  fireEvent.change(productNameInput, { target: { value: 'Test Product' } });

  // eslint-disable-next-line no-undef
  expect(productNameInput.value).toBe('Test Product');
});

// eslint-disable-next-line no-undef
it('Selected Product Category is stored and displayed correctly', () => {
  render(<CreateProduct />);

  const productCategorySelect = screen.getByLabelText('Product Category');

  fireEvent.change(productCategorySelect, { target: { value: 'Snack' } });

  const selectedCategory = screen.getByText('Snack');

  // eslint-disable-next-line no-undef
  expect(selectedCategory).toBeInTheDocument();
});

// eslint-disable-next-line no-undef
it('Selected Product Freshness is stored and displayed correctly', () => {
  render(<CreateProduct />);

  const brandNewRadio = screen.getByLabelText('Brand New');

  fireEvent.click(brandNewRadio);

  const selectedFreshness = screen.getByText('Brand New');

  // eslint-disable-next-line no-undef
  expect(selectedFreshness).toBeInTheDocument();
});

// eslint-disable-next-line no-undef
it('Product Name input can accept number input and display it', () => {
  render(<CreateProduct />);

  const productNameInput = screen.getByLabelText('Price');

  fireEvent.change(productNameInput, { target: { value: '1000000' } });

  // eslint-disable-next-line no-undef
  expect(productNameInput.value).toBe('1000000');
});
