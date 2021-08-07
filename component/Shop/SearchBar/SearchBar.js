import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category_Action } from "../../../redux/action";

export default function SearchBar() {
  const Dispatch = useDispatch();
  
  const AllProducts = useSelector((state) => state.Shop_Product);
  const { Products } = AllProducts;

  const [Category, setCategory] = useState([]);

  const CategoryValue = (e) => {
    Dispatch(Category_Action(e.target.value));
    if (!Category.includes(e.target.value)) {
      setCategory([...Category, e.target.value]);
    } else {
      const DltCategory = Category.filter((item) => item !== e.target.value);
      setCategory(DltCategory);
    }
  };
  return (
    <>
      <div className="Shop_sidebar bg-gray-100 rounded p-3 ">
        <div>
          <h1 className="text-lg pt-2 pb-2">Search Product By Category</h1>
          <div>
            <label className="text-lg capitalize">
              <input
                type="checkbox"
                value="men's clothing"
                onChange={CategoryValue}
              />
              &nbsp; men clothing
            </label>
          </div>

          <div>
            <label className="text-lg capitalize">
              <input
                type="checkbox"
                value="jewelery"
                onChange={CategoryValue}
              />
              &nbsp; jewelery
            </label>
          </div>

          <div>
            <label className="text-lg capitalize">
              <input
                type="checkbox"
                value="electronics"
                onChange={CategoryValue}
              />
              &nbsp; electronics
            </label>
          </div>

          <div>
            <label className="text-lg capitalize">
              <input
                type="checkbox"
                value="women's clothing"
                onChange={CategoryValue}
              />
              &nbsp; womens clothing
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
