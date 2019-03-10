import fetch from 'isomorphic-unfetch';
import {
    POPULATE_PAGE_HELLO,
    POPULATE_PAGE_HELLO_SUCCESS,
    POPULATE_PAGE_HELLO_ERROR
} from 'store/constants/pages';

import { put, takeEvery, all } from 'redux-saga/effects';

function *populatePageHello() {
    try {
        const response = yield fetch('http://localhost:3000/api/hello');
        const data = yield response.json();

        yield put({ type: POPULATE_PAGE_HELLO_SUCCESS, content: data });
    } catch (error) {
        yield put({ type: POPULATE_PAGE_HELLO_ERROR, error });
    }
}

export default function *pagesSaga() {
    yield all([
        takeEvery(POPULATE_PAGE_HELLO, populatePageHello)
    ]);
}
