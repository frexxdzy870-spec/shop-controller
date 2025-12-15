import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';

interface HeroProps {
  onShopNow: () => void;
}

// Memilih 4 produk spesifik untuk dijadikan highlight iklan
const FEATURED_IDS = ['p8', 'p6', 'p2', 'p4'];
const FEATURED_SLIDES = FEATURED_IDS.map(id => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return undefined;
  
  // Menggunakan Pollinations AI untuk membuat background wallpaper yang sesuai dengan produk
  // Prompt disesuaikan untuk menghasilkan gambar landscape cinematic
  const encodedTitle = encodeURIComponent(product.title.split('+')[0].trim());
  const bgImage = `https://image.pollinations.ai/prompt/Cinematic%20Product%20Photography%20of%20${encodedTitle}%20in%20a%20dark%20futuristic%20gaming%20room%20with%20neon%20lights%20highly%20detailed%208k%20wallpaper?width=1920&height=1080&nologo=true&seed=${id}`;
  
  return { ...product, bgImage };
}).filter(item => item !== undefined);

export const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_SLIDES.length);
    }, 5000); // Ganti setiap 5 detik

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-gaming-900 group">
      
      {/* Slides Container */}
      {FEATURED_SLIDES.map((slide, index) => (
        <div 
          key={slide!.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Scale Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={slide!.bgImage} 
              alt={slide!.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-900 via-gaming-900/80 to-transparent md:bg-gradient-to-r md:from-gaming-900 md:via-gaming-900/60 md:to-transparent opacity-90" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 opacity-100">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gaming-accent/20 border border-gaming-accent/30 text-gaming-accent text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-gaming-accent animate-pulse"></span>
                  Produk Unggulan
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-lg">
                  {slide!.title}
                </h2>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 line-clamp-2 drop-shadow-md border-l-4 border-gaming-accent pl-4">
                  {slide!.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onShopNow}
                    className="px-8 py-4 bg-gaming-accent hover:bg-gaming-accentHover text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span>Beli Sekarang</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {FEATURED_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-gaming-accent shadow-[0_0_10px_rgba(239,68,68,0.8)]' 
                : 'w-2 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Background decoration elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gaming-900 to-transparent z-10" />
    </div>
  );
};