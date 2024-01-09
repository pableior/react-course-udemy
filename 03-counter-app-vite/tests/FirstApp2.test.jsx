import { render, screen } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en first app ', () => { 
    

    test('debe de hacer match con el snapshot', () => {
        
        const title = 'Hola, soy goku';
        const { container } = render( <FirstApp title={title}/>)

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el msg hola soy goku', () => {
        
        const title = 'Hola, soy goku';
        render( <FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe de mostrar ekl titulo en un h1', () => {    
        const title = 'Hola, soy goku';
        render( <FirstApp title={title}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('debe de mostrar ekl subtitulo enviado por props', () => {    
        const title = 'Hola, soy goku';
        const subtitle = 'soy un subtitulo';

        render( <FirstApp title={title} subTitle={subtitle}/>);
        console.log(screen.getAllByText(subtitle));
        expect(screen.getAllByText(subtitle).length).toBe(1);
    });


    
 });