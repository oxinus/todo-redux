import {ADD_TASK} from './actionTypes';

export const addTask = (data) => {
    return {
        type : ADD_TASK,
        payload : data
    }
}