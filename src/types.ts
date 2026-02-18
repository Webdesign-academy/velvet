export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_new_arrival: boolean;
}

export interface GalleryImage {
  id: string;
  image_url: string;
  caption: string;
  instagram_handle: string;
}
