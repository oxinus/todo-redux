import {ADD_TASK, COMPLETE_TASK} from './actionTypes';

export const addTask = (data) => {
    return {
        type : ADD_TASK,
        payload : {
            data
        }
    }
}

export const completeTask =(id) => {
    return{
        type : COMPLETE_TASK,
        payload : {
            id
        }
    }
}