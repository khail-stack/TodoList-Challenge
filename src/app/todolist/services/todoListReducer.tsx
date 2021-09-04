
interface IAction {
    type: String,
    payload: any
}


export const todoListReducer = (state = [], action : IAction) : any => {
    switch (action.type) {
        case 'addTodo':
            return [action.payload, ...state];

        case 'deleteTodo':
            return state.filter( (todo: any) => todo.id !== action.payload);

        // case 'updateTodo':
            
        //     break;
    
        default:
            return state;
    }
}

