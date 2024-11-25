"use client";
import { useCartStore } from '@/app/store/store';
import { useUtils } from '@/app/utils/useUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Checkout() {
    const cartStore = useCartStore();
    const cart = cartStore.cart;
    let cartItem = cart.map((item) => {
        return {
            'product_id': item.id,
            'quantity': item.quantity,
            'name': item.name,
            'price': item.price,
        }
    })
    const handleCheckout = async (e) => {
        e.preventDefault();
        let item = {
            'address': "hehe",
            "phone": "09998374442",
            "cart_item": cartItem

        }
        let token = await useUtils().getCookie('token');
        console.log(token);


        let res = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify(item),
        })
        const responseData = await res.json();
        console.log('Signup response:', responseData);
        cartStore.clearCart();
        localStorage.removeItem('cart')
        toast.success('Bạn đã đặt hàng thành công !!')

    }
    return (
        <div className="container mx-auto p-6 max-w-xl">
            <ToastContainer />
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Checkout</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">Your cart is empty. Start shopping now!</p>
            ) : (
                <div>
                    {/* Hiển thị bảng sản phẩm */}
                    <table className="table-auto w-full border-collapse border border-gray-200 mb-6">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-200 px-4 py-2 text-left">Product</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="bg-white">
                                    <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-200 px-4 py-2">${item.price}</td>
                                    <td className="border border-gray-200 px-4 py-2">{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-semibold text-gray-800">Total:</span>
                        <span className="text-xl font-semibold text-gray-800">
                            ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </span>
                    </div>
                    {/* Form nhập thông tin thanh toán */}
                    <form onSubmit={(e) => handleCheckout(e)} className="space-y-4">
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                required
                                placeholder="Enter your address"
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                        >
                            Complete Checkout
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}