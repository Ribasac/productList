import React from "react";
import ProductCard from "../components/ProductCard";
import BrandFilter from "../components/BrandFilter";
import Sorting from "../components/Sorting";

interface ProductsPageProps {
    searchParams: { sort?: string; brand?: string[] };
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    image: string;
}

async function fetchProducts(
    sort: string | undefined,
    brands: string[]
): Promise<Product[]> {
    const params = new URLSearchParams();

    if (sort) {
        params.append("sort", sort);
    }

    if (brands && brands.length > 0) {
        brands.forEach((brand) => params.append("brand", brand));
    }

    const res = await fetch(
        `http://localhost:3000/api/products?${params.toString()}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}

const productsPage = async ({ searchParams }: ProductsPageProps) => {
    const sort = (await searchParams).sort || "";
    const brand = (await searchParams).brand || [];
    const brands = brand ? (Array.isArray(brand) ? brand : [brand]) : [];
    const productList = await fetchProducts(sort, brands);

    return (
        <div className="h-full w-full flex flex-col gap-8">
            <Sorting></Sorting>
            <div className="flex flex-row justify-start items-start w-auto  gap-16 px-8">
                <BrandFilter
                    brands={["Apple", "Samsung", "Google"]}
                ></BrandFilter>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-16 py-24 justify-items-center w-full">
                    {productList.map((i: any) => (
                        <ProductCard key={i.id} {...i}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default productsPage;
