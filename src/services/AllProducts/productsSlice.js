import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    data:[],
    isLoading:false,
};

export const fetchData= createAsyncThunk('products/fetchData',
async ()=>{
    const res= await fetch('https://dummyjson.com/products');
    const data= await res.json();
    return data.products;
})



export const productSlice=createSlice({
    name: 'products',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{

            state.isLoading=true

        }).addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;

        }).addCase(fetchData.rejected,(state)=>{
            state.isLoading=false;
            

        })

    }
})

export default productSlice.reducer