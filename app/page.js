import RenderProduct from "./components/RenderProduct";
import { axiosInstance } from "./services/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default async function Home() {

  const resp = await axiosInstance.get('/api/v1/products');
  const products = resp.data.data
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ToastContainer />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="bg-blue-500 text-white py-20 w-full">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">Discover Our Exclusive Products</h2>
            <p className="mt-4 text-lg">High-quality and modern designs just for you.</p>
            <a href="#products" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">Shop Now</a>
          </div>
        </section>

        <section id="products">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-gray-700 mb-8 text-center">Our Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map(item => {
                return (
                  <RenderProduct item={item} key={item.id} toast={toast} />
                )
              })}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
