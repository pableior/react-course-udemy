import { render, screen } from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";

describe('test on component counter app', () => { 
    
    test('must match to snapshot', () => {
        const value = 100;
        const {container} = render(<CounterApp value={value}/>);
        expect(screen).toMatchSnapshot();
        expect(container).toMatchSnapshot();
    });

    test('must contain initial value text', () => {
        const value = 100;
        const {container} = render(<CounterApp value={value}/>);
        expect(screen.getAllByText(`${value}`).length).toBe(1);
        expect(screen.getByText(value)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');


    });
});