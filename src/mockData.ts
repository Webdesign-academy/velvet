import { Product, GalleryImage } from './types';

export const newArrivals: Product[] = [
  {
    id: '1',
    name: 'Silk Blush Midi Dress',
    description: 'Elegant silk dress perfect for any occasion',
    price: 128.00,
    image_url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'dresses',
    is_new_arrival: true
  },
  {
    id: '2',
    name: 'Pearl Button Cardigan',
    description: 'Soft cashmere cardigan with pearl details',
    price: 95.00,
    image_url: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tops',
    is_new_arrival: true
  },
  {
    id: '3',
    name: 'Rose Gold Chain Necklace',
    description: 'Delicate layered necklace in rose gold',
    price: 68.00,
    image_url: 'https://images.pexels.com/photos/1927574/pexels-photo-1927574.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jewelry',
    is_new_arrival: true
  },
  {
    id: '4',
    name: 'Velvet Evening Clutch',
    description: 'Luxurious velvet clutch with gold clasp',
    price: 78.00,
    image_url: 'https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    is_new_arrival: true
  },
  {
    id: '5',
    name: 'Champagne Satin Blouse',
    description: 'Flowing satin blouse with bow detail',
    price: 89.00,
    image_url: 'https://images.pexels.com/photos/7679482/pexels-photo-7679482.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tops',
    is_new_arrival: true
  },
  {
    id: '6',
    name: 'Nude Strappy Heels',
    description: 'Classic strappy heels in nude leather',
    price: 115.00,
    image_url: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'shoes',
    is_new_arrival: true
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    image_url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Sunday brunch vibes ✨',
    instagram_handle: '@styledbysarah'
  },
  {
    id: '2',
    image_url: 'https://images.pexels.com/photos/1472024/pexels-photo-1472024.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Date night perfection',
    instagram_handle: '@emilystyle'
  },
  {
    id: '3',
    image_url: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Loving my new VV pieces',
    instagram_handle: '@fashionista_maya'
  },
  {
    id: '4',
    image_url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Office chic',
    instagram_handle: '@workwearqueen'
  },
  {
    id: '5',
    image_url: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Summer elegance',
    instagram_handle: '@olivia_ootd'
  },
  {
    id: '6',
    image_url: 'https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Velvet & Vine forever',
    instagram_handle: '@chicandtrendy'
  }
];
