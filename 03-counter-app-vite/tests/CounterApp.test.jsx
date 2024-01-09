import { fireEvent,  render, screen } from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";

describe('test on component counter app', () => { 
    const value = 100;

    test('must match to snapshot', () => {
        const {container} = render(<CounterApp value={value}/>);
        expect(screen).toMatchSnapshot();
        expect(container).toMatchSnapshot();
    });

    test('must contain initial value text', () => {
        render(<CounterApp value={value}/>);
        expect(screen.getAllByText(`${value}`).length).toBe(1);
        expect(screen.getByText(value)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    });

    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value ={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(value + 1)).toBeTruthy();

    });

    test('debe decrementar con el boton -1', () => {
        render(<CounterApp value ={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(value - 1)).toBeTruthy();
    });

    test('debe volver al valour inical luego de hacer reset', () => {
        render(<CounterApp value ={value} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText(value)).toBeTruthy();
    });

    test('debe volver al valour inical luego de hacer reset otra forma', () => {
        render(<CounterApp value ={value} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(value)).toBeTruthy();
    });


});