import React, { useState, useEffect } from 'react';
import { APP_NAME } from '../constants';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gaming-900/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-gaming-accent to-red-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">{APP_NAME}</h1>
          </button>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => onNavigate('home')} className="hover:text-gaming-accent transition-colors">Beranda</button>
            <button onClick={() => onNavigate('catalog')} className="hover:text-gaming-accent transition-colors">Semua Produk</button>
            <button onClick={() => {}} className="hover:text-gaming-accent transition-colors">Tentang</button>
          </nav>

          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-300 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>
             <button className="hidden sm:block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
                Masuk
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};