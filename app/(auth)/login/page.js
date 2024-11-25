'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitForm = async (e) => {
        e.preventDefault();
        const resp = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        const responseData = await resp.json();
        console.log('Signup response:', responseData);
        if (responseData.message) {
            localStorage.setItem('user', JSON.stringify({ name: responseData.message.user.name, email: responseData.message.user.email }))
            window.location.reload();
        } else {
            toast('Đăng nhập không thành công !!');
        }
    }

    return (
        <div className="w-full mx-auto mt-8 max-w-sm p-6 bg-white rounded-lg shadow-md">
            <ToastContainer />
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Login</h2>
            <form onSubmit={submitForm} method="POST">

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
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Login
                </button>
            </form>

            <div className="my-6 text-center text-gray-500">or</div>

            <button
                type="button"
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
            >
                Sign in with Google
            </button>
        </div>
    )
}