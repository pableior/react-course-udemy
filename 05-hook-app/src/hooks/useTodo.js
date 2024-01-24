import { useEffect, useReducer } from "react";

import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    
    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
    

    const handleAddTodo = (todo) => {
        const action = {
          type: 'Add Todo',
          payload: todo
        };
        dispatch(action);
      }
    
      const handledDeleteTodo = (id) => {
        const action = {
          type: 'Remove Todo',
          payload: id,
        };
        dispatch(action);
      };
    
      const handleToggleTodo = (id) => {
        const action = {
          type: 'Toggle Todo',
          payload: id,
        };
        dispatch(action);
      };
    

  
    return {
        todos, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => todo.done === false).length,
        handleAddTodo,
        handledDeleteTodo,
        handleToggleTodo
    }

}
