import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';

test('Load and displays starter data', async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId('name'));
  expect(name).toHaveTextContent(`My name is zaid`);
  const age = await waitFor(() => screen.findByTestId('age'));
  expect(age).toHaveTextContent(`My age is 24`)
  const gender = await waitFor(() => screen.findByTestId('gender'));
  expect(gender).toHaveTextContent(`My gender is male`)
});

// test('Can change the name', async () => {
//   render(<App />);
//   const input = screen.getByTestId('name-input');
//   const name = screen.getByTestId('name');
//   fireEvent.change(input, {target: {value: 'Hassan'}});
//   expect(name).toHaveTextContent(`Hassan`)
// })