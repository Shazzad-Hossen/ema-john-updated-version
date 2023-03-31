import {  toast } from 'react-toastify';
export const addToCart=(data)=> {
    const product={
        qt:1,
        ...data
    }
    let cart= localStorage.getItem("cart");
    if(cart) {
        const tempCart=JSON.parse(cart);
        const iIndex= tempCart.findIndex(item=>item.id===data.id)
        console.log(iIndex)
        if(iIndex=== Number(-1)){
            localStorage.setItem("cart",JSON.stringify([...tempCart,product]))
        }
        else {   
            tempCart[iIndex].qt+=1;
            localStorage.setItem("cart",JSON.stringify([...tempCart]))

        }
    }
    else {   
        localStorage.setItem("cart",JSON.stringify([product]))
    }
    toast.success("Item is added to cart");



}



export const getProducts=()=>{
    const cart=JSON.parse(localStorage.getItem('cart'));
    return cart;
}

export const removeProduct=(id,setCartItem)=>{
    const cart=getProducts();
    const iIndex= cart.findIndex(item=>item.id===id)
    cart.splice(iIndex,1)
    localStorage.setItem("cart",JSON.stringify([...cart]))
    setCartItem([...cart])



}