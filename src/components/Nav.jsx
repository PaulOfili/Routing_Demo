import React from 'react';
import '../App.css';
import  {Link} from "react-router-dom";

function Nav() {
    return (
       <nav className='nav'>
           <Link to='/'>
               <h3>Logo</h3>
           </Link>
           <ul className='nav-links'>
               <Link to='/about'>
                   <li>About</li>
               </Link>
               <Link to='/shop'>
                   <li>Shop</li>
               </Link>
           </ul>
       </nav>
    );
}

export default Nav;
