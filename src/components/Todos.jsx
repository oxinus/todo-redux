import React from 'react';
import { useSelector } from 'react-redux';
import ShowTodo from './ShowTodo';

const Todos = () => {

    const todos = useSelector()

    return (
        <div>
            {todos.map(todo => {
                
            })}
        </div>
    )
}

export default Todos;
