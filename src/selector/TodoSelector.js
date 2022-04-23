import React from 'react';
import { useSelector } from 'react-redux';
import ShowTodo from '../components/ShowTodo';

const TodoSelector = () => {

    const todos = useSelector(state => state)

    return (
        <>
            {todos?.map(todo => (<ShowTodo todo={todo} key={todo.id} />))}
        </>
    )
}

export default TodoSelector;
