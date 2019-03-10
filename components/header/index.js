import React from 'react';

import classname from 'helpers/classname';

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
