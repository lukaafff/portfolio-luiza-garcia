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

                <a href="#inicio"><img src={LogoIMG} alt="Logo Luiza Garcia" className='logo'/></a>

                    <ul className={menuOpen ? "menu-open" : ""}>
                    <li className='linkLI'><a href="#inicio" onClick={handleMenuItemClick}>Inicio</a></li>
                    <li className='linkLI'><a href="#sobreMim" onClick={handleMenuItemClick}>Sobre Mim</a></li>
                    <li className='linkLI'><a href="#conhecimentos" onClick={handleMenuItemClick}>Conhecimentos</a></li>
                    <li className='linkLI'><a href="#projetos" onClick={handleMenuItemClick}>Projetos</a></li>
                </ul>
                
                <label className='config'>
                    <i className='bx bxs-cog'></i>
                    <i className='bx bx-chevron-down'></i>
                </label>
                
            </nav>
        </div>
    )
}

export default Navbar;
