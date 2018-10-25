import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger';

const log = createLogger({diff:true, collapsed:true});

//a function which can create our store and it can also auto-persist the data
export default (initialState = {}) => {
    //middleware configuration
    const middleware = [thunk, log];

    //store enhancers
    const enhancers = [];

    //store instantiation

    const store = createStore(
        rootReducer(),
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    return store;
}