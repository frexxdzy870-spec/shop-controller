import React from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">{APP_NAME}</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Destinasi nomor satu untuk kontroler gaming premium.
          Kami memilihkan penawaran terbaik agar kamu bisa fokus bermain.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white transition-colors">Syarat Ketentuan</a>
          <a href="#" className="hover:text-white transition-colors">Hubungi Support</a>
        </div>
        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} {APP_NAME}. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
};