import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Person from '../components/Person';




test( 'renders the person component', () => {
    render( <App /> );
    const person = screen.getByTestId( 'person' );
    expect( person ).toBeInTheDocument();
} );
test('Load and displays starter data', async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId('name'));
  expect(name).toHaveTextContent(`My name is zaid`);
  const age = await waitFor(() => screen.findByTestId('age'));
  expect(age).toHaveTextContent(`My age is 24`)
  const gender = await waitFor(() => screen.findByTestId('gender'));
  expect(gender).toHaveTextContent(`My gender is male`)
});


test('Can change the name,age and gender', async () => {
  const {rerender} = render(<Person />);

  // define the Form input
  const nameInput = screen.getByTestId('name-input');
  const ageInput = screen.getByTestId('age-input');
  const genderInput = screen.getByTestId('gender-input');
  const submit = screen.getByTestId('submit');
  
  // fire the change event
  fireEvent.change(nameInput, {target: {value: 'Waleed'}});
  fireEvent.change(ageInput, {target: {value: 25}});
  fireEvent.select(genderInput, {target: {value: 'female'}});
  fireEvent.click(submit)

  // get the paragraphs from the screen
  const name = await waitFor(() => screen.findByTestId('name'));
  // console.log('name:',name.textContent)
  const age = await waitFor(() => screen.findByTestId('age'));
  // console.log('age:',age.textContent)
  const gender = await waitFor(() => screen.findByTestId('gender'));
  // console.log('gender:',gender.textContent)
  const newAge = await waitFor(() => screen.findByTestId('newAge'));
  // console.log('newAge:',newAge.textContent)
  

  // assert the values
  expect(nameInput.value).toBe('Waleed');
  expect(ageInput.value).toBe("25");
  expect(genderInput.value).toBe('female');
  rerender(<Person />)


  // assert the paragraphs
  expect(name.textContent).toBe('My name is Waleed');
  expect(age.textContent).toBe('My age is 25');
  expect(gender.textContent).toBe('My gender is female');
  expect(newAge.textContent).toBe('My new age is 30');
})