import { useState } from 'react';
import style  from './Header.module.scss';
import Menu from './Menu';

function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function toggleHamburger() {
        setHamburgerOpen(!hamburgerOpen);
    }

    return ( 
        <header className={style.header}>
            <Menu onClick={toggleHamburger} isOpen={hamburgerOpen} />
            <h1 className={style.header__title}>Alheimur</h1>
        </header>
     );
}

export default Header;