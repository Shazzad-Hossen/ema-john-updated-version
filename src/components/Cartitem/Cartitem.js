import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeProduct } from '../../utilities/localStorage/manageLocalStorage';

const Cartitem = ({data,setCartItem}) => {

    const {id,thumbnail,title,qt,price}=data
    return (
        <div className=' border-b-2 py-4 px-10 flex justify-between items-center'>
            
            <div className="flex gap-4 items-center">
            <img className='h-[80px] w-[80px] p-1 border-2 ' src={thumbnail} alt="" />
            <h1 className='font-bold text-lg'>{title}</h1>
            </div>
            <div className=" flex gap-1">
            <p className='w-[100px] font-bold'>{qt}</p>
            <p className='w-[100px] font bold'>${price}</p>
            <FontAwesomeIcon onClick={()=>removeProduct(id,setCartItem)} className='text-[red] h-[20px] w-[20px]' icon={faTrash} />
            
            </div>
        </div>
    );
};

export default Cartitem;