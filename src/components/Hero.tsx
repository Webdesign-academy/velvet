import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={24} className="text-pink-400" />
            <span className="text-sm font-medium text-pink-500 uppercase tracking-wider">
              Spring Collection 2024
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 leading-tight">
            Timeless
            <br />
            <span className="font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Elegance
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover curated pieces that blend modern sophistication with classic charm. Every item tells a story of refined taste and effortless style.
          </p>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl">
              Shop New Arrivals
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-pink-50 transition-all duration-300 shadow-md hover:shadow-lg border border-pink-200">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion model"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-600">Free Shipping</p>
              <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                On Orders $100+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
