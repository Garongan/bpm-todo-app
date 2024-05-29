import {all, delay, put, takeLatest} from "redux-saga/effects";
import {
    SUBMIT_GROUP_TASK_FAILURE,
    SUBMIT_GROUP_TASK_REQUEST,
    SUBMIT_GROUP_TASK_SUCCESS,
    UPDATE_GROUP_TASK_FAILURE,
    UPDATE_GROUP_TASK_REQUEST,
    UPDATE_GROUP_TASK_SUCCESS
} from "../types/types";

function* submitGroupTask(action) {
    try {
        yield delay(1000);
        yield put({ type: SUBMIT_GROUP_TASK_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: SUBMIT_GROUP_TASK_FAILURE, payload: error.message });
    }
}

function* updateGroupTask(action) {
    try {
        yield delay(1000);
        yield put({ type: UPDATE_GROUP_TASK_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: UPDATE_GROUP_TASK_FAILURE, payload: error.message });
    }
}

function* watchSubmitGroupTask() {
    yield takeLatest(SUBMIT_GROUP_TASK_REQUEST, submitGroupTask);
}

function* watchUpdateGroupTask() {
    yield takeLatest(UPDATE_GROUP_TASK_REQUEST, updateGroupTask);
}

export default function* rootSaga() {
    yield all([
        watchSubmitGroupTask(),
        watchUpdateGroupTask()
    ]);
}
