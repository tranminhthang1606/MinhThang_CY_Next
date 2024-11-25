import React from 'react';
import { useState } from 'react';
import formatCurrency from '../services/formatPrice';
import formatDate from '../services/formatDate';
export default function CustomModal({ order }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <button onClick={handleOpenModal}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
                Xem chi tiết
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-96">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">Order Details</h2>
                        </div>
                        <div className="p-4">
                            <p>
                                <span className="font-bold">Order ID:</span> #{order.id}
                            </p>
                            <p>
                                <span className="font-bold">Customer:</span> John Doe
                            </p>
                            <p>
                                <span className="font-bold">Subtotal:</span> {formatCurrency(order.sub_total)}
                            </p>
                            <p>
                                <span className="font-bold">Tax:</span> {formatCurrency(order.tax)}
                            </p>
                            <p>
                                <span className="font-bold">Total:</span> {formatCurrency(order.total)}
                            </p>
                            <p>
                                <span className="font-bold">Status:</span> {order.status}
                            </p>
                            <p>
                                <span className="font-bold">Address:</span> {order.address}
                            </p>
                            <p>
                                <span className="font-bold">Phone:</span> {order.phone}
                            </p>
                            <div className="mt-4">
                                <h3 className="font-bold mb-2">Products:</h3>
                                <ul className="space-y-2">
                                    {order.order_items.map((product) => (
                                        <li
                                            key={product.id}
                                            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
                                        >
                                            <span>{product.name} (x{product.quantity})</span>
                                            <span className="text-gray-600">{formatCurrency(product.price)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Modal Footer */}
                        <div className="border-t p-4 flex justify-end space-x-2">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}