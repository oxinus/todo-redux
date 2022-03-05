import { v4 as uuidv4 } from 'uuid';
import {ADD_TASK} from './actionTypes';

const initialState = []

const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return ([...state, {todo : action.paylod.data, id:uuidv4(), completed : false}])

    }

}

export default todoReducer;
