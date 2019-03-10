import {
    POPULATE_PAGE_INDEX,
    POPULATE_PAGE_HELLO
} from 'store/constants/pages';

export function populatePageIndex(content) {
    return { type: POPULATE_PAGE_INDEX, content };
}

export function populatePageHello() {
    return { type: POPULATE_PAGE_HELLO };
}
