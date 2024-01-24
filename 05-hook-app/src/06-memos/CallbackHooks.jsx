import {useState, useCallback, useEffect} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( () => { 
        setCounter((value) => value + 1);
    }, []);

    useEffect(() => {
//        increment();
    }, [increment])

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1> useCallback Hook: {counter} </h1>
            <hr/>
            <ShowIncrement increment={increment} />
        </>
    )
}
