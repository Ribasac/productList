import Image from "next/image";
import React from "react";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    image: string;
}

const ProductCard = (props: Product) => {
    const { id, title, description, price, brand, image } = props;
    return (
        <div key={id}>
            <div className="w-64 h-96 mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative flex flex-col justify-between">
                <div className="relative w-full h-40">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    ></Image>
                </div>
                <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">{description}</p>
                    <div className="flex items-center justify-between mt-4 ">
                        <span className="text-2xl font-bold text-gray-800">
                            ${price}
                        </span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
