import {act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"



describe('probando test useForm', () => { 

    const initialForm = {
        name: 'name',
        email: 'email',
    }
    
    test('shoud return default values by default', () => { 
        const {result} = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })
    });

    /*    const onInputChange = ({target}) => {
        // en los parametros va la desestructuracion del evento que se recibbe com parametro
        const {name, value} = target;
        setFormState ({
            ...formState,
            [ name ]: value,
        });
    }*/

    test('should change form name', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const {onInputChange} = result.current;
        const newName = 'juan';
        act(() => onInputChange({target: {name: 'name', value: newName}}));
        expect(result.current.formState.name).toEqual(newName);
        expect(result.current.name).toEqual(newName);

    });

    
    test('should reset form name', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        const newName = 'juan';
        act(() => {
            onInputChange({target: {name: 'name', value: newName}});
            onResetForm();
        });
        expect(result.current.formState.name).toEqual(initialForm.name);
        expect(result.current.name).toEqual(initialForm.name);

    });



})