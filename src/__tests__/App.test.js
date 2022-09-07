import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


test( 'renders the person component', () => {
    render( <App /> );
    const person = screen.getByTestId( 'person' );
    expect( person ).toBeInTheDocument();
} );