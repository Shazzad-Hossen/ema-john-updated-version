import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'

const Header = () => {


    
    return (
        <div className='nv bg-[#1C2B35] p-5 text-white flex justify-between items-center px-28'>
           <Link to='/' ><img src={logo} alt="" /></Link>
            <ul  className='flex gap-5 items-center'>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/about' >About</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                    
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                
            </ul>
            
            
        </div>
    );
};

export default Header;