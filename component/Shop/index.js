import { React , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import ShopProduct from "./ShopProducts";
import SearchBar from './SearchBar/index';
import { ShopProduct_action } from './../../redux/action';

const ShopContainer = () => {
  const Dispatch = useDispatch();

  //Store All Products After Refresh
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((Data) => Dispatch(ShopProduct_action(Data)));
  }, []);

  return (
    <>
      <section className="mx-4 md:mx-8 lg:mx-14 bg-white mt-10 rounded p-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-row-1 gap-x-8 gap-y-5">
          <SearchBar />
          <div className="Shop_Area md:col-span-3 ">
            <TopBar />
            <ShopProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopContainer;
