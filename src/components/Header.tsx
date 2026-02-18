import { ShoppingBag, Heart, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#new"
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#clothing"
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              >
                Clothing
              </a>
              <a
                href="#accessories"
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              >
                Accessories
              </a>
            </nav>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl md:text-3xl font-light tracking-wide">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">
                Velvet & Vine
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <User size={20} />
            </button>
            <button className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
