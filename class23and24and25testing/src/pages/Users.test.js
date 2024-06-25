import { screen,fireEvent,render } from "@testing-library/react";
import Users from "./Users";
import { BrowserRouter } from "react-router-dom";

let MockElement = ()=>{
    return(
        <BrowserRouter>
           <Users/>
        </BrowserRouter>
    )
}

test('Link with text go to header is present',()=>{
    render(<MockElement/>);
    let LinkElement = screen.getByText(/go to header/i);
    expect(LinkElement).toBeInTheDocument();
});

test('async call to api',async ()=>{
    render(<MockElement/>);
    let divElement =await screen.findByTestId('user_1')
    expect(divElement).toBeInTheDocument();
});



