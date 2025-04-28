"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type BrandFilterProps = {
    brands: string[];
};

export default function BrandFilter({ brands }: BrandFilterProps) {
    const [selectedBrand, setSelectedBrand] = useState<any[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleSelect = (brand: string) => {
        console.log(brand);

        selectedBrand.includes(brand)
            ? setSelectedBrand((p) =>
                  p.filter((i) => {
                      return i != brand;
                  })
              )
            : setSelectedBrand((p) => [...p, brand]);
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (selectedBrand.length > 0) {
            params.delete("brand");
            selectedBrand.forEach((brand) => {
                params.append("brand", brand);
            });
        } else {
            params.delete("brand");
        }
        router.replace(`/products?${params.toString()}`, { scroll: false });
    }, [selectedBrand]);

    return (
        <div className="flex flex-wrap flex-col gap-2 justify-start h-full sticky top-32 py-24">
            {[...brands].map((brand) => (
                <button
                    key={brand}
                    className={`px-4 py-2 rounded-full border ${
                        selectedBrand.includes(brand)
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-800"
                    } hover:bg-blue-500 hover:text-white transition`}
                    onClick={() => {
                        handleSelect(brand);
                    }}
                >
                    {brand}
                </button>
            ))}
        </div>
    );
}
