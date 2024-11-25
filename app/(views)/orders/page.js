"use client";
import { useState, useEffect } from "react";
import formatDate from "@/app/services/formatDate";
import CustomModal from "@/app/components/CustomModal";
import formatCurrency from "@/app/services/formatPrice";
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập gọi API để lấy danh sách đơn hàng
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);

        setOrders(data.message);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <p className="text-center text-lg text-gray-500">
        You have no orders. Start shopping now!
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Your Orders
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">Order ID</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Total</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="bg-white">
              <td className="border border-gray-200 px-4 py-2">{order.id}</td>
              <td className="border border-gray-200 px-4 py-2">{formatDate(order.created_at)}</td>
              <td className="border border-gray-200 px-4 py-2">{formatCurrency(order.total)}</td>
              <td className="border border-gray-200 px-4 py-2">
                <span
                  className={`px-2 py-1 text-sm rounded ${order.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                    }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <CustomModal order={order} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}