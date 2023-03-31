import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const[menu,setMenu]=useState(false);

    const menuHandler=()=>{
        if(menu) setMenu(false);
        else setMenu(true)
    }


    
    return (
        <div className="">

<div className='nv bg-[#1C2B35] p-5 text-white flex justify-between items-center px-18'>
           <Link to='/' ><img src={logo} alt="" /></Link>
            <div className="hidden sm:block">
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
            <FontAwesomeIcon onClick={menuHandler} className='block sm:hidden' icon={faBars} />
            
            
        </div>
        {menu && <ul  className=' bg-[#1C2B35] flex-col gap-5 items-center text-white text-lg  pl-4 pb-3'>
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
                
            </ul>}
        </div>
    );
};

export default Header;