import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category_Action } from "../../../redux/action";

export default function CategorySearch() {
  const Dispatch = useDispatch();

  const CategoryValue = (e) => {
    Dispatch(Category_Action(e.target.value));
  };
  return (
    <>
        <div>
          <h1 className="text-xl pt-2 pb-2 text-purple-700">Product Categories</h1>
          <div>
            <label className="text-lg capitalize cursor-pointer">
              <input
                type="checkbox"
                value="men's clothing"
                onChange={CategoryValue}
              />
              &nbsp; men clothing
            </label>
          </div>

          <div>
            <label className="text-lg capitalize cursor-pointer">
              <input
                type="checkbox"
                value="jewelery"
                onChange={CategoryValue}
              />
              &nbsp; jewelery
            </label>
          </div>

          <div>
            <label className="text-lg capitalize cursor-pointer">
              <input
                type="checkbox"
                value="electronics"
                onChange={CategoryValue}
              />
              &nbsp; electronics
            </label>
          </div>

          <div>
            <label className="text-lg capitalize cursor-pointer">
              <input
                type="checkbox"
                value="women's clothing"
                onChange={CategoryValue}
              />
              &nbsp; womens clothing
            </label>
          </div>
        </div>
    </>
  );
}
