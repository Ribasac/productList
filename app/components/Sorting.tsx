"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sorting = () => {
    const sorting = ["price_asc", "price_desc"];
    const [selectedSort, setSort] = useState<any[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleSelect = (sort: any) => {
        const params = new URLSearchParams(searchParams.toString());
        let tempSort = selectedSort;
        tempSort.includes(sort) ? (tempSort = []) : (tempSort = [sort]);

        if (tempSort.length > 0) {
            params.set("sort", tempSort[0]);
        } else {
            params.delete("sort");
        }
        setSort(tempSort);
        router.replace(`/products?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        let sort = params.get("sort");
        if (sort) {
            setSort([sort]);
        }
    }, []);

    return (
        <div className="px-8 py-8 w-full bg-white sticky top-0 z-1000 flex flex-row justify-end gap-8">
            {sorting.map((sort) => (
                <button
                    key={sort}
                    className={`px-4 py-2 rounded-full border ${
                        selectedSort.includes(sort)
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-800"
                    } hover:bg-blue-500 hover:text-white transition h-fit w-36`}
                    onClick={() => handleSelect(sort)}
                >
                    {sort}
                </button>
            ))}
        </div>
    );
};

export default Sorting;
