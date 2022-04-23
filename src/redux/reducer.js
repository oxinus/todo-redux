import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from './actionTypes';

const initialState = []


const todoReducer = (state = initialState, action) => {
    switch (action.type){

        case ADD_TASK:
            return ([...state, {todo : action.payload.data, id:uuidv4(), toggled : false}])


        case COMPLETE_TASK:
            const toggledList = state.map(row => {
                if (row.id === action.payload.id){
                    return{
                        todo : row.todo,
                        id : row.id,
                        toggled : !row.toggled
                    }
                } else{
                    return row
                }
            })
            return toggledList;


        case DELETE_TASK:
            const newList = state.filter(row => row.id !== action.payload.id)
            return newList;

        
        default:
            return state
    }

}

export default todoReducer;
