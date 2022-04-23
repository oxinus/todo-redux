import React from 'react';
import { useDispatch } from 'react-redux'; 
import { completeTask, deleteTask } from '../redux/bindActions';

const ShowTodo = ({todo}) => {

    const dispatch = useDispatch();

    return (
        <ul className="list-group mb-0" >
              <li className="list-group-item d-flex justify-content-between align-items-center
                border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">

                <div className={`d-flex align-items-center ${todo.toggled && 'text-decoration-line-through'}`}>
                  <input className="form-check-input me-2" type="checkbox" value={todo.toggled} onClick={() => dispatch(completeTask(todo.id))}/>
                    {todo.todo}
                </div>

                <button className='btn' onClick={() => dispatch(deleteTask(todo.id))}>
                  <i className="fas fa-times text-primary"></i>
                </button>

              </li>
            </ul>
    )
}

export default ShowTodo;
