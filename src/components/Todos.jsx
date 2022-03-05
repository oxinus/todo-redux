import React from 'react';
import { useSelector } from 'react-redux';
import ShowTodo from './ShowTodo';

const Todos = () => {

    const todos = useSelector(state => state)
    console.log(todos)

    return (
        <div>
            {todos?.map(todo => (<ShowTodo  key={todo.id}/>))}
        </div>
    )
}

export default Todos;
