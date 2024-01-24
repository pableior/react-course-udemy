import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { MainApp } from './09-useContext/MainApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScree } from './04-useRef/FocusScree'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHooks } from './06-memos/CallbackHooks'
// import { Padre } from './07-tarea/Padre'

//import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/*<React.StrictMode>*/}
    <MainApp />
  {/*</React.StrictMode>,*/}
  </BrowserRouter>
)
