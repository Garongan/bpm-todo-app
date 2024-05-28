import rootReducer from '@/reducers';
import rootSaga from '@/sagas/sagas';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
