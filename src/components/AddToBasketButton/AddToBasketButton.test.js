import {render, screen} from '@testing-library/react'
import AddToBasketButton from './AddToBasketButton'

//testing button gets the product names and add it to the text content.
test('Button text should show the product name', () => {
    const mockProduct = {
        id: 14, 
        name: 'Pineapple', 
        description: 'juicy pineapple, perfect on a pizza.', 
        price: 0.99
    }

    render(<AddToBasketButton product={mockProduct} />);
    const buttonText = screen.getByTestId('buttonText').textContent;
    expect(buttonText).toBe('Add Pineapple to cart');
})