import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletterPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterPopupSeen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 text-center">
          <div className="mb-4">
            <span className="text-4xl">✨</span>
          </div>
          <h2 className="text-3xl font-light text-gray-800 mb-2">
            Welcome to
          </h2>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
            Velvet & Vine
          </h3>
          <p className="text-gray-600 mb-6">
            Join our exclusive community and receive <span className="font-semibold text-pink-600">15% off</span> your first purchase
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-lg font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get My Discount
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-5xl mb-3">🎉</div>
              <p className="text-lg font-medium text-pink-600">
                Thank you for subscribing!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Check your inbox for your discount code
              </p>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4">
            No spam, just style. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
