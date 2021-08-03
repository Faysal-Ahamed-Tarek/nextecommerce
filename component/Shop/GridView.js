import React from 'react';
import Image from 'next/image';
import  Link  from 'next/link';

const GridView = (props) => {
    const {title,price,image,id} = props.Item;
    return (
        <>
        <div className="bg-gray-100 p-2 rounded">
            <Link href={`/shop/${id}`} passHref>
                <h1 className="text-lg text-center py-3">{title}</h1>
            </Link>
                <Image src={image} layout="responsive" width="100" height="100" alt={title}/>
                <h1 className="text-lg text-center py-2">{price}</h1>
            <button className="w-full py-3 text-lg bg_color rounded text-white">Add To Cart</button>
        </div> 
        </>
    );
};

export default GridView;