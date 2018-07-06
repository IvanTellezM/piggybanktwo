import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import expenseReducers from '../reducers/expenses';
import filterReducers from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Declaring reducers to be used. I.T. 
export default () =>{
    const store = createStore(combineReducers({
        expenses: expenseReducers,
        filters: filterReducers,
        auth: authReducer
    }),
    // middleware is to support asynchronous actions without much boilerplate code or a dependency on a library I.T. 
    // visit https://redux.js.org/api-reference/applymiddleware#returns for more info I. T. 
    composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}


