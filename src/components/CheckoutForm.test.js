import React from "react";
import MutationObserver from 'mutationobserver-shim';
import {render, screen, waitFor} from '@testing-library/react';
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    
    render(<CheckoutForm/>)

});
    
test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    userEvent.type(firstName, 'nathan')
    userEvent.type(lastName, 'cheney')
    userEvent.type(address, '1234 joe schmoe road')
    userEvent.type(city, 'columbia')
    userEvent.type(state, 'missouri')
    userEvent.type(zip, '65201')
    
    
    
    
    const button = screen.getByRole('button');
    userEvent.click(button);

    

    await waitFor(()=>{
        const message = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
        expect(message).toBeInTheDocument();

        expect(screen.getByTestId('successMessage')).toHaveTextContent('nathan');
        expect(screen.getByTestId('successMessage')).toHaveTextContent('cheney');
        expect(screen.getByTestId('successMessage')).toHaveTextContent('1234 joe schmoe road');
        expect(screen.getByTestId('successMessage')).toHaveTextContent('columbia');
        expect(screen.getByTestId('successMessage')).toHaveTextContent('missouri');
        expect(screen.getByTestId('successMessage')).toHaveTextContent('65201');
        
    })
        
    
    
  
    

});
