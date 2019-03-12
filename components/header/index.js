import React from 'react';

import classname from 'helpers/classname';

import './index.scss';

const b = classname('header');

class Header extends React.Component {
    render() {
        return (
            <header className={b()}>
                Header
            </header>
        );
    }
}

export default Header;
