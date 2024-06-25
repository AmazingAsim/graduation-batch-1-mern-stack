import { render,screen,fireEvent } from "@testing-library/react";
import Fruit from "./Fruit";

const addFruits = (fl)=>{
    let buttonElement = screen.getByTestId('btn');
    let inputElement = screen.getByPlaceholderText(/fruit name/i);
    fl.forEach(fruit => {
        fireEvent.change(inputElement,{target:{value:fruit}});
        fireEvent.click(buttonElement);
    });
}

test('button event will should add a new fruit to the fruit list',()=>{
    render(<Fruit/>)
    addFruits(['apple'])
    let listElement = screen.getByText(/apple/i)
    expect(listElement).toBeInTheDocument();
})

test('button event will should add a new fruit to the fruit list',()=>{
    render(<Fruit/>)
    addFruits(['apple','banana'])
    let listElement = screen.getAllByRole('listitem');
    expect(listElement.length).toBe(2);
})


