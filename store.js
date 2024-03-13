import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {TodoReducer} from "../reducers/TodoReducers"

const reducer = combineReducers({
    // this contains all reducers
    Todo: TodoReducer   
});

const initialState={};

const middleware=[thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;