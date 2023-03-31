import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../services/AllProducts/productsSlice";
import Card from "../../components/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  
    return (
      <main className=" py-10">
        <div className=" flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            data.map((product)=> <Card key={product.id} data={product}></Card>)
          }
          <a href="#top"><div className=" fixed bottom-10 right-8 bg-[#333333] py-4 px-5 rounded-full"> <FontAwesomeIcon className="text-2xl text-white" icon={faArrowUp} /></div></a>
  
        </div>
        </div>
      </main>
    );
};

export default Products;
