export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};
