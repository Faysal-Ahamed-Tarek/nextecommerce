import React from 'react';
import Image from 'next/image';

const FlexView = (props) => {
    const {title,price,image,category,description} = props.Item;
    return (
        <>
        <div className="bg-gray-100 p-2 rounded grid grid-cols-1 md:grid-cols-3 justify-self-center place-content-center mt-5 ">
            <div>
                <Image src={image} layout="responsive" width="100" height="100"/>
            </div>
            <div className="md:col-span-2 md:pl-10">
                <h1 className="text-lg text-start py-3">{title}</h1>
                <h1 className="text-lg text-start">category : {category}</h1>
                <h1 className="text-lg text-start">{description}</h1>
                <h1 className="text-lg text-start py-2">{price}</h1>
                <button className="px-6 py-3 text-lg bg_color rounded text-white">Add To Cart</button>
            </div>
            
        </div> 
        </>
    );
};

export default FlexView;