import React, { useRef } from 'react';
import { addTask } from '../redux/bindActions';
import { useDispatch } from 'react-redux';
import './AddTodo.css';

const AddTodo = () => {

    const ref = useRef();
    const dispatch = useDispatch();

    const addTodoHandler = e => {
        e.preventDefault()
        dispatch(addTask(ref.current.value))
    }

    return (
        <div className='addtodo__container'>
            <form onSubmit={addTodoHandler}>
                <input ref={ref}/>
                <button type='submit'><i className='fas fa-plus'></i></button>
            </form>
        </div>
    )
}

export default AddTodo
