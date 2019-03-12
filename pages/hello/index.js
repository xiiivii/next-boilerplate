import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populatePageHello } from 'store/actions/pages';

import Link from 'next/link';

import classname from 'helpers/classname';

import './index.scss';

const b = classname('page-hello');

class PageHello extends Component {
    static getInitialProps = ctx => {
        ctx.store.dispatch(populatePageHello());
    }

    render() {
        const { content, status } = this.props;

        return (
            <main className={b()}>
                <Link href="/">
                    <a>To Index Page</a>
                </Link>

                <div className={b('content', { error: status === 'error' })}>
                    { content }
                </div>
            </main>
        );
    }

    static propTypes = {
        content: PropTypes.string,
        status: PropTypes.string
    }
}

function mapStateToProps(state) {
    return {
        status: state.pages.hello.status,
        content: state.pages.hello.content
    };
}

export default connect(mapStateToProps)(PageHello);
