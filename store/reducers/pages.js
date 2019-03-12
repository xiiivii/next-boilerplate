import { handleActions } from 'redux-actions';

import {
    POPULATE_PAGE_INDEX,
    POPULATE_PAGE_HELLO_SUCCESS,
    POPULATE_PAGE_HELLO_ERROR
} from 'store/constants/pages';

export default handleActions(
    {
        [POPULATE_PAGE_INDEX]: populatePageIndex,
        [POPULATE_PAGE_HELLO_SUCCESS]: populatePageHelloSuccess,
        [POPULATE_PAGE_HELLO_ERROR]: populatePageHelloError
    },
    {
        index: {},
        hello: {}
    }
);

function populatePageIndex(state, { content }) {
    return {
        ...state,
        index: { status: 'ok', content }
    };
}

function populatePageHelloSuccess(state, { content }) {
    return {
        ...state,
        hello: { status: 'ok', content }
    };
}

function populatePageHelloError(state, { error }) {
    return {
        ...state,
        hello: { status: 'error', content: error.toString() }
    };
}
