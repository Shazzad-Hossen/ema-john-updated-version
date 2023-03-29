import React, { useEffect, useState } from 'react';
import Cartitem from '../../components/Cartitem/Cartitem';
import { getProducts } from '../../utilities/localStorage/manageLocalStorage';

const Cart = () => {
    const cart= getProducts();
    const [cartItem,setCartItem]=useState([])
    useEffect(()=>{
        setCartItem([...cart])
        
    },[cart])

    if(cartItem.length<1) return (
    <div>
        <main className='min-h-[60vh] flex justify-center items-center'>  

            <div className=" font-bold text-5xl text-[red] ">Opps Your Cart is Empty</div>
  

        </main>
    </div>
    );

  
else

    return (
        <main>
           {cartItem.map((item,i)=> <Cartitem key={i} data={item} setCartItem={setCartItem}/>)}
        </main>
    );
};

export default Cart;