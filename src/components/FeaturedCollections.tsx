import { ArrowRight } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image_url: string;
  item_count: number;
}

const collections: Collection[] = [
  {
    id: '1',
    title: 'Spring Essentials',
    description: 'Fresh pieces for the new season',
    image_url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    item_count: 24
  },
  {
    id: '2',
    title: 'Evening Glamour',
    description: 'Sophisticated looks for special occasions',
    image_url: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
    item_count: 18
  },
  {
    id: '3',
    title: 'Everyday Chic',
    description: 'Effortless style for daily wear',
    image_url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    item_count: 32
  },
  {
    id: '4',
    title: 'Statement Accessories',
    description: 'Bold pieces to elevate any outfit',
    image_url: 'https://images.pexels.com/photos/1927574/pexels-photo-1927574.jpeg?auto=compress&cs=tinysrgb&w=800',
    item_count: 16
  }
];

export default function FeaturedCollections() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-3">
            Featured Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Curated selections for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image_url}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    {collection.item_count} Items
                  </span>
                </div>
                <h3 className="text-3xl font-light mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {collection.title}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  {collection.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-300">
                  Explore Collection
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight size={20} className="text-pink-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
