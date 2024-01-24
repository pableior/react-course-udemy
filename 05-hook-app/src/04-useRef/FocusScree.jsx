import {useRef} from 'react';
export const FocusScree = () => {

    const inputRef = useRef();
    
    function handleClick() {
        inputRef.current.focus();
      }
    return (
    <>
        <h1>Focus Screen</h1>
        <hr/>

        <input
            ref={inputRef}
            type="text"
            placeholder="Input your name"
            className="form-control"
            />

        <input
            ref={inputRef}
            type="text"
            placeholder="Input your last name"
            className="form-control mt-2"
        />


        <button 
            className="btn btn-primary mt-2"
            onClick={handleClick}>
            Set Focus
        </button>

    </>

    )
}
