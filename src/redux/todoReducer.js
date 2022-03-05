import { v4 as uuidv4 } from 'uuid';
import {ADD_TASK, COMPLETE_TASK} from './actionTypes';

const initialState = []

const completedTask =(state ,taskID) => {
    const completedList = state.map(row => {
        if (row.id === taskID){
            return{
                todo : row.todo,
                id : row.id,
                completed : true
            }
        } else{
            return row
        }
    })
    return completedList
}

const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return ([...state, {todo : action.paylod.data, id:uuidv4(), completed : false}])

        case COMPLETE_TASK:
            completedTask(state, action.paylod.id)
    }

}

export default todoReducer;
