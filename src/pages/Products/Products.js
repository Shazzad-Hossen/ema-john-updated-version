import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../services/AllProducts/productsSlice";
import Card from "../../components/Card/Card";

const Products = () => {
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  
    return (
      <main className=" py-10">
        <div className=" flex justify-center">
          <div className="grid grid-cols-3 gap-8">
          {
            data.map((product)=> <Card key={product.id} data={product}></Card>)
          }
  
        </div>
        </div>
      </main>
    );
};

export default Products;
