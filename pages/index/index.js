import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populatePageIndex } from 'store/actions/pages';

import Header from 'components/header';
import Link from 'next/link';

import classname from 'helpers/classname';

const b = classname('page-index');

class PageIndex extends Component {
    static getInitialProps = ctx => {
        ctx.store.dispatch(populatePageIndex('Index Page Content'));
    }

    render() {
        const { content } = this.props;

        return (
            <React.Fragment>
                <Header />

                <Link href="/hello">
                    <a>To Hello Page</a>
                </Link>

                <div className={b('content')}>
                    { content }
                </div>
            </React.Fragment>
        );
    }

    static propTypes = {
        content: PropTypes.string
    }
}

function mapStateToProps(state) {
    return {
        content: state.pages.index.content
    };
}

export default connect(mapStateToProps)(PageIndex);
