"use client";
import { useUtils } from "../utils/useUtils";
export default function LogoutButton() {
    const handleLogout = async () => {

        try {
            let res = await fetch('/api/logout', {
                method: 'POST',
            });
            console.log(res);

            useUtils().deleteCookie();
            localStorage.removeItem('cart')
            window.location.reload();
        } catch (error) {
            console.log("Error during logout:", error);
        }
    };

    return (
        <button className="hover:text-gray-300" onClick={handleLogout}>
            Đăng xuất
        </button>
    );
}