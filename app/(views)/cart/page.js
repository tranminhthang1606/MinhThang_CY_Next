"use client";
import React from 'react';
import { useCartStore } from '@/app/store/store';
import Link from 'next/link';
export default function Cart() {
    const cart = useCartStore().cart;
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">Your cart is empty. Start shopping now!</p>
            ) : (
                <div>
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-200 px-4 py-2 text-left">Product</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Quantity</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="bg-white">
                                    <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-200 px-4 py-2">${item.price}</td>
                                    <td className="border border-gray-200 px-4 py-2">{item.quantity}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-xl font-semibold text-gray-800">Total:</span>
                        <span className="text-xl font-semibold text-gray-800">
                            ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-end items-center mt-6">
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all" href="/checkout">Go Checkout</Link>
                    </div>
                </div>
            )}
        </div>
    );
};
