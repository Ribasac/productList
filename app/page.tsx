import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-svw h-svh">
            <Link href="/products">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-full cursor-pointer">
                    Products
                </button>
            </Link>
        </main>
    );
}
