import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../utilities/localStorage/manageLocalStorage';
import './Product.css'


const Product = () => {
    const {data}= useSelector((state)=> state.products)
    const params = useParams();
    const [imIndex, setimIndex]= useState(0)

    const item= data.find((p)=>{
        return p.id===Number(params.productId)

    })
    const {title,price, description, images,rating, stock}=item;
    
    const setImg=(id)=>{
        setimIndex(id);  

    }
    
    return (
        <main> <br /> <br /> <br />

            <div className="px-10">
            <div className=" flex gap-5">
                <img className='pImg' src={images[imIndex]} alt="" />
                <div className=""> <br /> <br />
                <h1 className='text-3xl font-bold'>{title.toUpperCase()}</h1> <br />
                <h1 className='text-xl text-[green] font-semibold'>Price : ${price}</h1>
                <br />
                <p className='text-[#b40a0a] font-semibold'>Ratings: {rating}</p>
                <p className='font-semibold'>In Stock: {stock} pcs</p>
                <br /> <br />
                <button onClick={()=>addToCart(item)} className='bg-[#eb9c09] py-2 px-4 text-[#054105] rounded-lg font-bold'>Add to cart</button>


                </div>
                

            </div>
            <br /> <br />
            <div className=" flex gap-4">
            {
                images.map((imgUrl,i)=> <img key={i} onClick={()=>setImg(i)} className='h-[70px] w-[70px] border-2 p-1' src={imgUrl} alt="" />)
            }
            </div>
            <br /> <br /> <br />
            <p>Descriptions : <br /> {description}</p>
            <br /> <br /> <br />
            </div>


        </main>
    );
};

export default Product;