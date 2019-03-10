import pagesSaga from 'store/saga/pages';

import { all } from 'redux-saga/effects';

export default function *rootSaga() {
    yield all([
        pagesSaga()
    ]);
}
