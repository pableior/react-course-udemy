import { useState } from "react"
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onTodoAdd}) => {


    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    })   
    

    const onFormSubmit = (event) => {

        event.preventDefault();

        if (description.length <= 1) return;

        onTodoAdd({
            id: new Date().getTime(),
            description: description,
            done:false,
        })
       onResetForm();

    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                onChange={onInputChange}
                type="text"
                name="description"
                value = {description}
                placeholder="Que hay que hacer?"
                className="form-control"
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>

        </form>
    )
}
