import { takeLatest, put, all, delay } from 'redux-saga/effects';
import { SUBMIT_GROUP_TASK_REQUEST, SUBMIT_GROUP_TASK_SUCCESS, SUBMIT_GROUP_TASK_FAILURE } from '../types/types';

function* submitGroupTask(action) {
    try {
        yield delay(1000);
        yield put({ type: SUBMIT_GROUP_TASK_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: SUBMIT_GROUP_TASK_FAILURE, payload: error.message });
    }
}

function* watchSubmitGroupTask() {
    yield takeLatest(SUBMIT_GROUP_TASK_REQUEST, submitGroupTask);
}

export default function* rootSaga() {
    yield all([
        watchSubmitGroupTask(),
    ]);
}
