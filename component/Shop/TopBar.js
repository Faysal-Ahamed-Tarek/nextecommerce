import React from "react";
import { useDispatch } from "react-redux";
import { ProductView_Action } from "../../redux/action";
import { SortingPrice_Action } from './../../redux/action';

export default function TopBar(props) {
    const Dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 rounded p-2 flex content-center items-center justify-between flex-col md:flex-row">
        <div>
          <h4 className="text-lg mb-3 sm:mb-0">
            Title Title Title Title Title{" "}
          </h4>
        </div>
        <div className="flex gap-1 content-center items-center">
          <div>
            <select className="px-1 md:px-4 py-2 outline-none rounded" onChange={(e) => Dispatch(SortingPrice_Action(e.target.value))}>
              <option value="Default">Default</option>
              <option value="LowToHigh">Price: low to high</option>
              <option value="HighToLow">Price: high to Low</option>
            </select>
          </div>
          <div className="flex content-center items-center">
            <span
              className="px-1 py-1 md:py-2 md:px-3 cursor-pointer"
              onClick={() => {
                Dispatch(ProductView_Action())
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </span>
            <span
              className="px-1 py-1 md:py-2 md:px-3 cursor-pointer"
              onClick={() => {
                Dispatch(ProductView_Action())
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
