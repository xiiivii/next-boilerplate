import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from 'store/reducers';
import rootSaga from 'store/saga';

export default (state = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        state,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};
