import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose

const store = createStore(
    combineReducers({
        // ...reducers
    }),
    composeEnhancers(applyMiddleware(...middlewares))
);
// sagaMiddleware.run(rootSaga);
export { store};