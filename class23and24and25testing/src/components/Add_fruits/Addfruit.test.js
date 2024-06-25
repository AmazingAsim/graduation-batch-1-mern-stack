import { screen,fireEvent,render } from "@testing-library/react";
import Addfruit from "./Addfruit";

const mockAddFruit = jest.fn()

test('input element exist',()=>{
    render(<Addfruit fruits={['apple']} addFruits={mockAddFruit} />);
    let inputElement = screen.getByPlaceholderText(/fruit name/i);
    expect(inputElement).toBeInTheDocument();
})


test('input element  is getting filled',()=>{
    render(<Addfruit fruits={['apple']} addFruits={mockAddFruit} />);
    let inputElement = screen.getByPlaceholderText(/fruit name/i);
    fireEvent.change(inputElement,{target:{value:'guava'}});
    expect(inputElement.value).toBe('guava')
})

test('button element is calling addFruits',()=>{
    render(<Addfruit fruits={['apple']} addFruits={mockAddFruit} />);
    let buttonElement = screen.getByTestId('btn');
    fireEvent.click(buttonElement);
    expect(mockAddFruit).toHaveBeenCalled();
})

