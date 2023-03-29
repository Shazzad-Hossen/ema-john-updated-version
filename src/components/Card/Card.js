import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({data}) => {
    const {id,title,price, thumbnail,description}= data;
    

    
    
    return (
        <Link to={`product/${id}`}>
        <div className='bg-white rounded-lg border-2  w-[300px] shadow-lg h-[450px]'>
        <img className='cimg' src={thumbnail} alt="" />
        <div className="p-4">
        <h1 className='font-bold text-[#333333] text-xl'>{title}</h1>
        <p className='font-semibold text-green-800 '>${price}</p>
        <br />
        <p className='description'>{description}</p>
        </div>
        
    </div>
    </Link>
   
    );
};

export default Card;