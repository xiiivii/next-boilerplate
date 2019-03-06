import React from 'react';

import { classname } from 'helpers/classnames';

const b = classname('header');

class Header extends React.Component {
    render() {
        return (
            <header className={b()}>
                Hello World
            </header>
        );
    }
}

export default Header;
