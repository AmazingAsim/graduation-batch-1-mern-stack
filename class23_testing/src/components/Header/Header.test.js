import { render, screen } from "@testing-library/react";
import Header from "./Header";


describe('get methods',()=>{

    
test('Asim text is present',()=>{
    render(<Header/>);
    const h1Element = screen.getByText(/Asim/i);
    expect(h1Element).toBeInTheDocument();
})

test('get by the type of tag',()=>{
    render(<Header/>);
    const h1Element = screen.getByRole('heading')
    expect(h1Element).toBeInTheDocument();
})

test('get by the type of tag with specfic text',()=>{
    render(<Header/>);
    const h1Element = screen.getByRole('heading',{name:/Asim/i})
    expect(h1Element).toBeInTheDocument();
})

test('get by the title attribute',()=>{
    render(<Header/>);
    const button = screen.getByTitle('btn');
    expect(button).toBeInTheDocument();
})

test('get by the data-testid  attribute',()=>{
    render(<Header/>);
    const ulElement = screen.getByTestId('fruit-list')
    expect(ulElement).toBeInTheDocument();
})

test('get by all by the role of li',()=>{
    render(<Header/>);
    const liElement =  screen.getAllByRole('listitem')
    expect(liElement.length).toBe(3);
})
})

describe('find methods',()=>{

    test('find by text',async ()=>{
        render(<Header/>);
        const h1Element =await  screen.findByText('Asim')
        expect(h1Element).toBeInTheDocument()
    })

})


describe('query methods', () => {
    
test('query  by text with not operator',async ()=>{
    render(<Header/>)
    const h1Element =  screen.queryByText('Kasim')
    expect(h1Element).not.toBeInTheDocument()
})

})


