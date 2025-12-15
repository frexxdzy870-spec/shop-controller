import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-gaming-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        
        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gaming-accent text-white text-xs font-bold rounded-full shadow-lg">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gaming-accent bg-gaming-accent/10 px-2 py-0.5 rounded">
                {product.category}
            </span>
            <div className="flex items-center text-yellow-400 text-xs gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{product.rating}</span>
                <span className="text-slate-500">({product.reviews})</span>
            </div>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-gaming-accent transition-colors">
          {product.title}
        </h3>
        
        <p className="text-sm text-slate-400 mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <a 
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 active:scale-95"
        >
          <span>Beli di Tokopedia</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};