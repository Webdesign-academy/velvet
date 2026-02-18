import Header from './components/Header';
import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import FeaturedCollections from './components/FeaturedCollections';
import StyleGallery from './components/StyleGallery';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import { newArrivals, galleryImages } from './mockData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductSlider products={newArrivals} />
      <FeaturedCollections />
      <StyleGallery images={galleryImages} />
      <Footer />
      <NewsletterPopup />
    </div>
  );
}

export default App;
