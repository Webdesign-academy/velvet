import { Instagram, Heart } from 'lucide-react';
import { GalleryImage } from '../types';

interface StyleGalleryProps {
  images: GalleryImage[];
}

export default function StyleGallery({ images }: StyleGalleryProps) {
  return (
    <div className="py-16 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={32} className="text-pink-400" />
            <h2 className="text-4xl font-light text-gray-800">
              Customer Style Gallery
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Join our community and share your style with{' '}
            <span className="font-medium text-pink-500">#VelvetAndVine</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.image_url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart size={18} className="text-pink-400" />
                    <span className="text-sm font-medium">
                      {image.instagram_handle}
                    </span>
                  </div>
                  <p className="text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto">
            <Instagram size={20} />
            Follow Us on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
