import { v4 as uuidv4 } from 'uuid';
import {ADD_TASK, COMPLETE_TASK, DELETE_TASK} from './actionTypes';
import {completedTask} from './reducerFunctions';

const initialState = []


const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return ([...state, {todo : action.paylod.data, id:uuidv4(), completed : false}])

        case COMPLETE_TASK:
            completedTask(state, action.paylod.id)

        case DELETE_TASK:

    }

}

export default todoReducer;
