import pagesSaga from 'store/sagas/pages';

import { all } from 'redux-saga/effects';

export default function *rootSaga() {
    yield all([
        pagesSaga()
    ]);
}
