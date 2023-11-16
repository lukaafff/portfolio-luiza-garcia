import React from 'react';
import './Links.css';

const Links = () => {
  return (
    <div>
      <nav className='links'>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/luiza-nascimento-garcia-27358b261/" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
          </li>
          <li>
            <a href="https://github.com/lukaafff" target='_blank'><i class='bx bxl-github'></i></a>
          </li>
          <li>
            <i class='bx bxs-envelope'></i>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Links