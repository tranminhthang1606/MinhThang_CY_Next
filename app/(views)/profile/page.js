'use client'
import { useCartStore } from "@/app/store/store"

export default function Profile() {
    const user = useCartStore().user;
    return (
        <div className="max-w-md mx-auto mt-8 w-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 flex items-center justify-center">
                <img className="w-24 h-24 rounded-full border-4 border-white"
                    src="https://via.placeholder.com/150"
                    alt="Profile Picture" />
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600 mt-2">{user.email}</p>
                <p className="text-gray-500 text-sm mt-4">
                    Passionate about building efficient and scalable web applications.
                    Enjoy solving problems with modern technologies.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.88 3.549l-4.9 4.899m0 0L7.05 7.05m4.828 1.415l4.9-4.9m-1.415 4.828L21 3m-4.828 4.828l4.9-4.9m-14.95 14.95l4.9-4.9m0 0l-4.9 4.9m0 0L7.05 7.05m4.828 1.415l4.9-4.9" />
                        </svg>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.88 3.549l-4.9 4.899m0 0L7.05 7.05m4.828 1.415l4.9-4.9m-1.415 4.828L21 3m-4.828 4.828l4.9-4.9m-14.95 14.95l4.9-4.9m0 0l-4.9 4.9m0 0L7.05 7.05m4.828 1.415l4.9-4.9" />
                        </svg>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.88 3.549l-4.9 4.899m0 0L7.05 7.05m4.828 1.415l4.9-4.9m-1.415 4.828L21 3m-4.828 4.828l4.9-4.9m-14.95 14.95l4.9-4.9m0 0l-4.9 4.9m0 0L7.05 7.05m4.828 1.415l4.9-4.9" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="px-6 py-4 border-t bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-800">Projects</h3>
                        <p className="text-gray-600">25</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-800">Followers</h3>
                        <p className="text-gray-600">1.2k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}