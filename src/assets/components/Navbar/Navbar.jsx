import React, { useState } from 'react';
import "./Navbar.css";

import LogoIMG from '../../imgs/Logo github v2.png';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    const handleMenuItemClick = () => {
      setMenuOpen(false);
    };

    return (
        <div>
           <nav className='navbar'>
                <input type="checkbox" id="check" checked={menuOpen} onChange={handleMenuToggle} />
                <label htmlFor="check" className="checkbtn">
                    <i className="bx bx-menu"></i>
                </label>

                <img src={LogoIMG} alt="Logo Luiza Garcia" className='logo'/>

                    <ul className={menuOpen ? "menu-open" : ""}>
                    <li><a href="#" onClick={handleMenuItemClick}>Inicio</a></li>
                    <li><a href="#" onClick={handleMenuItemClick}>Sobre Mim</a></li>
                    <li><a href="#" onClick={handleMenuItemClick}>Conhecimentos</a></li>
                    <li><a href="#" onClick={handleMenuItemClick}>Projetos</a></li>
                </ul>
                
                <label className='config'>
                    <i class='bx bxs-cog'></i>
                    <i class='bx bx-chevron-down'></i>
                </label>
                
            </nav>
        </div>
    )
}

export default Navbar;
