import { NavLink } from 'react-router-dom';

import './style.css';

function Header() {
  return (
    <ul className='nav justify-content-center'>
      <li className='nav-item'>
        <NavLink exact to='/' className='nav-link' activeClassName='selected'>
          Products
        </NavLink>
      </li>

      <li className='nav-item'>
        <NavLink
          to='/add-product'
          className='nav-link'
          activeClassName='selected'
        >
          Add product
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
