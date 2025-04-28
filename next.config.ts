import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "store.storeimages.cdn-apple.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.samsung.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "store.google.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
