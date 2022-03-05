import { v4 as uuidv4 } from 'uuid';

// action types 
const DELETE_TASK = 'delete-task';
const ADD_TASK = 'add-task';
const EDIT_TASK = 'edit-task';
const COMPLETE_TASK = 'complete-task';

const initialState = []

const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return ([...state, {todo : action.paylod, id:uuidv4(), completed : false}])

    }

}

export default todoReducer;
