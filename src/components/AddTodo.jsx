import React, { useRef } from 'react';
import { addTask } from '../redux/bindActions';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const ref = useRef();
    const dispatch = useDispatch();

    const addTodoHandler = e => {
        e.preventDefault()
        if (ref.current.value.trim()){
            dispatch(addTask(ref.current.value))
            ref.current.value = ''
        }
    }

    return (
        <>
            <h6 className="mb-3">Awesome Todo List</h6>

            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={addTodoHandler}>
                <div className="form-outline flex-fill">
                    <input type="text" id="form3" className="form-control form-control-lg" ref={ref} />
                    <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg ms-2 " style={{marginBottom : '32px'}}>Add</button>
            </form>

        </>
    )
}

export default AddTodo
