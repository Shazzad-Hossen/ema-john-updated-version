import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/austin-wade-AoYT0ArTTmg-unsplash 1.png'

const Cover = () => {
    return (
        <div className='flex justify-evenly items-center  ] flex-col-reverse lg:flex-row'>
            

            <div className="">
                <p className='text-[#FF9900]'>Sale up to 70% off</p>
                <h1 className='text-[60px] font-bold'>New Collection For Fall</h1>
                <h3 className='text-xl'>Discover all the new arrivals of ready-to-wear collection.</h3>
                <br />

                <Link to='/products'><button className='bg-[#FF9900] px-8 py-4 text-xl font-semibold'>Shop Now</button></Link>

            </div>

            <div className="shadow-2xl bg-[#FFE0B3] w-full max-w-[351px] max-h-[633px] rounded-lg">
                <img className='shadow-2xl rounded-lg relative top-[-20px] right-[-20px]' src={banner} alt="" />

            </div>
           
        </div>
    );
};

export default Cover;