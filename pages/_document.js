import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { classname } from 'helpers/classnames';

const b = classname('page');

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head />
                <body className={b()}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
