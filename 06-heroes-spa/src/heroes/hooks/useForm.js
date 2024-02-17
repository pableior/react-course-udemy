
import { useState } from 'react';


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        // en los parametros va la desestructuracion del evento que se recibbe com parametro
        const {name, value} = target;
        setFormState ({
            ...formState,
            [ name ]: value,
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }    
    
}