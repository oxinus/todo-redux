import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from './actionTypes';
import { completed__task, delete__task, edit__task } from './reducerFunctions';

const initialState = []


const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return ([...state, {todo : action.payload.data, id:uuidv4(), completed : false}]);

        case COMPLETE_TASK:
            completed__task(state, action.payload.id);
            break;

        case DELETE_TASK:
            delete__task(state, action.payload.id);
            break;

        case EDIT_TASK:
            edit__task(action.payload.data, action.payload.id);
    }

}

export default todoReducer;
