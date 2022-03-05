import React, { useRef } from 'react';
import { addTask } from '../redux/bindActions';
import { useDispatch } from 'react-redux';
import './AddTodo.css';

const AddTodo = () => {

    const ref = useRef();
    const dispatch = useDispatch();

    const addTodoHandler =() => {
        dispatch(addTask(ref.current.value))
    }

    return (
        <div className='addtodo__container'>
            <input ref={ref}/>
            <button onClick={addTodoHandler}><i className='fas fa-plus'></i></button>
        </div>
    )
}

export default AddTodo
