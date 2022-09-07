import Person from "../components/Person";
import React from 'react';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";


const newTimeout = 10000;
jest.setTimeout(newTimeout)

test( 'Load and displays starter data', async () => {
    render( <Person /> );
    const name = await waitFor( () => screen.findByTestId( 'name' ) );
    expect( name ).toHaveTextContent( `My name is zaid` );
    const age = await waitFor( () => screen.findByTestId( 'age' ) );
    expect( age ).toHaveTextContent( `My age is 24` );
    const gender = await waitFor( () => screen.findByTestId( 'gender' ) );
    expect( gender ).toHaveTextContent( `My gender is male` );
} );


test( 'Can change the name,age and gender', async () => {
    const { rerender } = render( <Person /> );

    // define the Form input
    const nameInput = screen.getByTestId( 'name-input' );
    const ageInput = screen.getByTestId( 'age-input' );
    const genderInput = screen.getByTestId( 'gender-input' );
    const submit = screen.getByTestId( 'submit' );

    // fire the change event
    fireEvent.change( nameInput, { target: { value: 'Waleed' } } );
    fireEvent.change( ageInput, { target: { value: 25 } } );
    fireEvent.select( genderInput, { target: { value: 'female' } } );
    fireEvent.click( submit );

    // get the paragraphs from the screen
    const name = await waitFor( () => screen.findByTestId( 'name' ) );
    const age = await waitFor( () => screen.findByTestId( 'age' ) );
    const gender = await waitFor( () => screen.findByTestId( 'gender' ) );


    // assert the values
    expect( nameInput.value ).toBe( 'Waleed' );
    expect( ageInput.value ).toBe( "25" );
    expect( genderInput.value ).toBe( 'female' );
    rerender( <Person /> );


    // assert the paragraphs
    expect( name.textContent ).toBe( 'My name is Waleed' );
    expect( age.textContent ).toBe( 'My age is 25' );
    expect( gender.textContent ).toBe( 'My gender is female' );

    // test the axios request for the backend server
    act(async () => {
    await axios.post(`${process.env.REACT_APP_SERVER}/person?name=${nameInput.value}&age=${ageInput.value}&gender=${genderInput.value}`)
    }) .then( response => {
    expect( response.data ).toBe( 30 );
    } )
} );