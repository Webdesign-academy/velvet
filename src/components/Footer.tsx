import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">
                Velvet & Vine
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curating timeless elegance and modern sophistication for the contemporary woman.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-pink-300">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#new" className="hover:text-pink-300 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#clothing" className="hover:text-pink-300 transition-colors">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-pink-300 transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#sale" className="hover:text-pink-300 transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-pink-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#contact" className="hover:text-pink-300 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-pink-300 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-pink-300 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-pink-300">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#instagram"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#email"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Subscribe to our newsletter for exclusive offers and style tips.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Velvet & Vine Boutique. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-pink-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-pink-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
