
import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            username: 'strider',
            email: 'example@google.com',
        }
    )

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        // en los parametros va la desestructuracion del evento que se recibbe com parametro
        const {name, value} = target;
        setFormState ({
            ...formState,
            [ name ]: value,
        })
    }

    // para que se carge solamente la primera vez
    useEffect( 
        () => {
          //  console.log('UseEffect called!');
        }, 
        
        []
    )

    //j para que el componente se cambbie solamente si cambia formstate
    useEffect( 
        () => {
            //console.log('UseEffect formstate changed!');
        }, 
        
        [formState]
    )

    // solamente para el caso que cambie el email
    useEffect( 
        () => {
           // console.log('UseEffect email changed!');
        }, 
        
        [email]
    )


    return (
        <>
            <h1>SimpleForm</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Username" 
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="text"
                className="form-control mt-2" 
                placeholder="example@gmail.com" 
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === 'strider2') && <Message />
            }
        </>
    )



}
