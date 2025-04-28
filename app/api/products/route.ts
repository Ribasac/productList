import { log } from "console";
import { NextResponse } from "next/server";

const productList = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        description: "The latest smartphone from Apple with stunning features.",
        price: 999,
        brand: "Apple",
        image: "https://picsum.photos/seed/iphone-14-pro/400/300",
    },
    {
        id: 2,
        title: "Galaxy S22 Ultra",
        description: "Samsung's flagship phone with amazing camera quality.",
        price: 899,
        brand: "Samsung",
        image: "https://picsum.photos/seed/galaxy-s22-ultra/400/300",
    },
    {
        id: 3,
        title: "Pixel 7",
        description: "Google's smartest phone with pure Android experience.",
        price: 799,
        brand: "Google",
        image: "https://picsum.photos/seed/pixel-7/400/300",
    },
    {
        id: 4,
        title: "MacBook Air M2",
        description: "Lightweight and powerful laptop for all your tasks.",
        price: 1299,
        brand: "Apple",
        image: "https://picsum.photos/seed/macbook-air-m2/400/300",
    },
    {
        id: 5,
        title: "Galaxy Tab S8",
        description: "A premium Android tablet for work and entertainment.",
        price: 699,
        brand: "Samsung",
        image: "https://picsum.photos/seed/galaxy-tab-s8/400/300",
    },
    {
        id: 6,
        title: "Pixel Buds Pro",
        description: "Noise-cancelling earbuds by Google.",
        price: 199,
        brand: "Google",
        image: "https://picsum.photos/seed/pixel-buds-pro/400/300",
    },
    {
        id: 7,
        title: "Apple Watch Series 8",
        description: "Smartwatch with health tracking and notifications.",
        price: 399,
        brand: "Apple",
        image: "https://picsum.photos/seed/apple-watch-series-8/400/300",
    },
    {
        id: 8,
        title: "Galaxy Watch 5",
        description: "Samsung's versatile smartwatch with fitness features.",
        price: 349,
        brand: "Samsung",
        image: "https://picsum.photos/seed/galaxy-watch-5/400/300",
    },
    {
        id: 9,
        title: "Nest Hub Max",
        description: "Google's smart display for your home.",
        price: 229,
        brand: "Google",
        image: "https://picsum.photos/seed/nest-hub-max/400/300",
    },
    {
        id: 10,
        title: "AirPods Pro 2",
        description: "High-quality wireless earbuds from Apple.",
        price: 249,
        brand: "Apple",
        image: "https://picsum.photos/seed/airpods-pro-2/400/300",
    },
    {
        id: 11,
        title: "Samsung Smart Monitor M8",
        description: "A monitor and smart TV hybrid for work and play.",
        price: 699,
        brand: "Samsung",
        image: "https://picsum.photos/seed/samsung-smart-monitor-m8/400/300",
    },
    {
        id: 12,
        title: "Google Chromecast 4K",
        description: "Stream everything you love to your TV easily.",
        price: 49,
        brand: "Google",
        image: "https://picsum.photos/seed/google-chromecast-4k/400/300",
    },
    {
        id: 13,
        title: 'iPad Pro 12.9"',
        description: "Powerful iPad with M2 chip for creators.",
        price: 1099,
        brand: "Apple",
        image: "https://picsum.photos/seed/ipad-pro-12-9/400/300",
    },
    {
        id: 14,
        title: "Galaxy Z Fold 4",
        description: "Samsung's revolutionary folding phone.",
        price: 1799,
        brand: "Samsung",
        image: "https://picsum.photos/seed/galaxy-z-fold-4/400/300",
    },
    {
        id: 15,
        title: "Pixel Tablet",
        description: "Upcoming tablet device powered by Google.",
        price: 499,
        brand: "Google",
        image: "https://picsum.photos/seed/pixel-tablet/400/300",
    },
    {
        id: 16,
        title: "Apple TV 4K",
        description: "Premium streaming box with Dolby Vision.",
        price: 129,
        brand: "Apple",
        image: "https://picsum.photos/seed/apple-tv-4k/400/300",
    },
    {
        id: 17,
        title: "Samsung Galaxy Buds2 Pro",
        description: "Premium audio experience with noise cancellation.",
        price: 229,
        brand: "Samsung",
        image: "https://picsum.photos/seed/galaxy-buds2-pro/400/300",
    },
    {
        id: 18,
        title: "Nest WiFi Pro",
        description: "Fast and reliable mesh Wi-Fi system by Google.",
        price: 199,
        brand: "Google",
        image: "https://picsum.photos/seed/nest-wifi-pro/400/300",
    },
    {
        id: 19,
        title: "Magic Keyboard for iPad",
        description: "Add a keyboard and trackpad to your iPad Pro.",
        price: 349,
        brand: "Apple",
        image: "https://picsum.photos/seed/magic-keyboard-for-ipad/400/300",
    },
    {
        id: 20,
        title: "Samsung Frame TV",
        description: "A beautiful TV that looks like artwork on your wall.",
        price: 1499,
        brand: "Samsung",
        image: "https://picsum.photos/seed/samsung-frame-tv/400/300",
    },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get("sort");
    const brands = searchParams.getAll("brand");

    let sortedProducts = [...productList];

    if (sort === "price_asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (!(brands.includes("all") || brands.length == 0)) {
        sortedProducts = sortedProducts.filter((product) => {
            return brands.includes(product.brand);
        });
    }

    return NextResponse.json(sortedProducts);
}
