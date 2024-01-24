import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList.";
import {useTodo} from '../hooks';

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleAddTodo, handledDeleteTodo, handleToggleTodo} = useTodo();

  return (

    <>
        <h1>Todo App ({todosCount}), <small>pendientes: {pendingTodosCount}</small></h1> 
        <hr/>

        <div className="row">
          <div className="col-7">
            <TodoList todos={todos} 
              onDeleteTodo={handledDeleteTodo}
              onToggleTodo={handleToggleTodo}
              />
          </div>

          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />

            {/* Todo Add onnewwTodo*/}
            <TodoAdd onTodoAdd={handleAddTodo}/>
            {/*fin del todoadd */}
          </div>

        </div>
        
    </>
  )
}
