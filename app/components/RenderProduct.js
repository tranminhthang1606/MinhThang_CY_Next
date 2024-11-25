"use client";
import { useCartStore } from "../store/store";
import formatCurrency from "../services/formatPrice";
export default function RenderProduct({ item,toast }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden product-card transition-transform transform hover:shadow-lg">
            <img src="https://via.placeholder.com/300x200" alt="Product 1" className="w-full h-40 object-cover" />
            <div className="p-4">
                <h4 className="font-bold text-lg text-gray-800 line-clamp-2">{item.name}</h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-blue-500 font-bold">{formatCurrency(item.price)}</span>
                    <button onClick={() => {addToCart(item); toast('Thêm giỏ hàng thành công')}} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Buy Now</button>
                </div>
            </div>
        </div>
    );
}