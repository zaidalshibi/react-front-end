import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
// import Person from '../components/Person';

test('Load and displays starter data', async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId('name'));
  expect(name).toHaveTextContent(`My name is zaid`);
  const age = await waitFor(() => screen.findByTestId('age'));
  expect(age).toHaveTextContent(`My age is 24`)
  const gender = await waitFor(() => screen.findByTestId('gender'));
  expect(gender).toHaveTextContent(`My gender is male`)
});

// test('Can change the name,age and gender', async () => {
//   render(<Person />);
//   const nameInput = screen.getByTestId('name-input');
//   const name = await waitFor(() => screen.findByTestId('name'));
//   const ageInput = screen.getByTestId('age-input');
//   const age = await waitFor(() => screen.findByTestId('age'));
//   const genderInput = screen.getByTestId('gender-input');
//   const gender = await waitFor(() => screen.findByTestId('gender'));
//   const submit = screen.getByTestId('submit');

//   fireEvent.change(nameInput, {target: {value: 'Waleed'}});
//   fireEvent.change(ageInput, {target: {value: 25}});
//   fireEvent.select(genderInput, {target: {value: 'male'}});
//   fireEvent.click(submit)

//   expect(name).toHaveTextContent(`My name is zaid`);
//   expect(age).toHaveTextContent(`My age is 24`)
//   expect(gender).toHaveTextContent(`My gender is male`)
// })