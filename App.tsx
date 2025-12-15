import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { PaymentMethods } from './components/PaymentMethods';
import { Footer } from './components/Footer';
import { Product } from './types';

// Reusable Product Section Component
interface ProductSectionProps {
  products: Product[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  title: string;
  subtitle?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  products, 
  categories, 
  activeCategory, 
  setActiveCategory, 
  title,
  subtitle 
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          {subtitle && <p className="text-slate-400">{subtitle}</p>}
        </div>
        
        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-white text-gaming-900 shadow-lg shadow-white/10' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
          <p className="text-slate-400">Tidak ada produk ditemukan di kategori ini.</p>
        </div>
      )}
    </div>
  );
};

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog'>('home');
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  
  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.category));
    return ['Semua', ...Array.from(cats)];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Semua') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'catalog') {
      setCurrentView(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gaming-900 text-slate-200 font-sans selection:bg-gaming-accent selection:text-white">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onShopNow={() => handleNavigate('catalog')} />
            
            <section id="products" className="py-16 md:py-24 relative">
                {/* Decoration */}
                <div className="absolute right-0 top-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
                
                <ProductSection 
                  products={filteredProducts}
                  categories={categories}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  title="Produk Unggulan"
                  subtitle="Kontroler pilihan untuk setiap platform."
                />
            </section>

            {/* Features Section */}
            <section id="about" className="py-24 bg-slate-900 relative border-t border-slate-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">Akses Langsung</h3>
                     <p className="text-slate-400">Link langsung ke penjual terpercaya memastikan kamu mendapatkan gear dengan cepat dan aman.</p>
                   </div>
                   <div className="text-center">
                     <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">Produk Original</h3>
                     <p className="text-slate-400">Kami hanya menampilkan produk dari merchant terverifikasi dan toko resmi.</p>
                   </div>
                   <div className="text-center">
                     <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">Harga Terbaik</h3>
                     <p className="text-slate-400">Bandingkan pilihan dan temukan kontroler yang pas dengan budgetmu.</p>
                   </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="pt-32 pb-16 min-h-screen relative">
            <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-b from-slate-800/20 to-transparent pointer-events-none" />
             <ProductSection 
                products={filteredProducts}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                title="Semua Produk"
                subtitle="Jelajahi katalog lengkap kami."
              />
          </section>
        )}
      </main>

      <PaymentMethods />
      <Footer />
    </div>
  );
}

export default App;