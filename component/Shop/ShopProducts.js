import React from "react";
import FlexView from "./FlexView";
import GridView from "./GridView";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function ShopProduct() {

  //grid Flex View
  const ProductView = useSelector((state) => state.ProductView);
  console.log(ProductView);

  //shop all products
  const ShopProducts = useSelector((state) => state.Shop_Product);

  console.log("Ui Page" , ShopProducts);
  //Spinner
  const CssStyle = css`
    border-color: linear-gradient(to right, #6d28d9 0%, #a65fec 100%);
    margin: 0 auto;
  `;

  return (
    <>
      {ProductView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-3">
          {ShopProducts ? (
            ShopProducts.map((Item, index) => (
              <GridView Item={Item} key={index} />
            ))
          ) : (
            <div className="flex justify-content-center col-span-3">
              <ClipLoader css={CssStyle} />
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1">
          {ShopProducts ? (
            ShopProducts.map((Item, index) => (
              <FlexView key={index} Item={Item} />
            ))
          ) : (
            <div className="flex justify-content-center col-span-3">
              <ClipLoader css={CssStyle} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
