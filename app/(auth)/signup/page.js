'use client'
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const submitForm = async (e) => {
        e.preventDefault();
        let data = {
            email,
            name,
            password
        }
        console.log(data);

        const resp = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await resp.json();
        console.log('Signup response:', responseData);
        if (responseData.message) {
            toast('Đăng ký thành công !!');
        } else {
            toast('Đăng ký không thành công !!');
        }
    }

    return (
        <div className="w-full mx-auto mt-8 max-w-md p-6 bg-white rounded-lg shadow-md">
            <ToastContainer/>
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Sign Up</h2>
            <form onSubmit={e => submitForm(e)} action="#" method="POST">

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-400"
                        placeholder="Enter your full name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-400"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-400"
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Sign Up
                </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
                Already have an account?
                <a href="#" className="text-blue-500 hover:underline">Log in</a>.
            </p>
        </div>
    )
}