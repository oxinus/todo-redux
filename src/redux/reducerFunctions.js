export const completed__task =(state ,taskID) => {
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

