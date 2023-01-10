import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { genericRequestThunk } from './app.slice';


export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (_, { payload }) => payload,
        addTodo: (state, { payload }) => {state.push(payload)},
        updateTodo: (state, { payload: toDo }) => {
            const index = state.findIndex(t => t.id === toDo.id);
            state[index] = toDo;
        }
    }
})

export const getTodosThunk = () => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().get('/todos');
        dispatch(setTodos(res.data));
    }))
}

export const addToDoThunk = task => (dispatch, getState) => {
    const userId = getState().user.id;
    dispatch(genericRequestThunk(async () => {
        const res = await axios().post('/todos', { task, userId });
        dispatch(addTodo(res.data));
    }))
}

export const checkToDoThunk = toDo => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().put(`/todos/${toDo.id}`, { isCompleted: !toDo.isCompleted });
        dispatch(updateTodo(res.data));
    }))
}

export const updateTaskThunk = (task, id) => dispatch => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().put(`/todos/${id}`, { task })
        dispatch(updateTodo(res.data));
    }, "To Do updated succesfully"));
}

export const { setTodos, addTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
