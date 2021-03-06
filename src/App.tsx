import React, { useState } from 'react';
import InputField from './components/InputField';

import { Todo } from './model';

import './App.css';

const App: React.FC = () =>  {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
    };
  
    return (
        <div className='App'>
            <span className='heading'>Tasktify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        </div>
    );
}

export default App;
