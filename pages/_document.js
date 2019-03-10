import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import classname from 'helpers/classname';

const b = classname('page');

export default class NextDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <html className={b()}>
                <Head />
                <body className={b('body')}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
