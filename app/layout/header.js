import { useUtils } from "../utils/useUtils";
import LogoutButton from "../components/LogoutButton";
import Link from "next/link";
export default async function Header() {
    const token = await useUtils().getCookie("token");
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex items-center justify-between p-4 text-white">
                <div className="text-xl font-bold"><Link href='/'>My Website</Link></div>
                <div className="hidden md:block">
                    {(token && token.value) ? <nav className="space-x-4">
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link className="hover:text-gray-300" href="/orders">Đơn hàng</Link>
                        <Link className="hover:text-gray-300" href="/cart">Giỏ hàng</Link>
                        <Link className="hover:text-gray-300" href="/profile">Profile</Link>
                        <LogoutButton />
                    </nav> :
                        <nav className="space-x-4">
                            <Link href="/login">Đăng Nhập</Link>
                            <Link href="/signup">Đăng Ký</Link>
                        </nav>
                    }
                </div>
                <button id="menu-toggle" className="block md:hidden focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header >
    )
}