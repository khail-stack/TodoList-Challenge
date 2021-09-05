
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

        case 'updateTodo':
            return state.map((todo: any) => todo.id === action.payload.id ? action.payload : todo)
    
        default:
            return state;
    }
}

