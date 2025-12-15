import React from 'react';

const METHODS = [
  { name: 'BCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg' },
  { name: 'Mandiri', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg' },
  { name: 'BRI', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg' },
  { name: 'BNI', logo: 'https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg' },
  { name: 'GoPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg' },
  { name: 'OVO', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Ovo_logo.svg' },
  { name: 'Dana', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_DANA.png' },
  { name: 'ShopeePay', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg' },
  { name: 'LinkAja', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/LinkAja.svg' },
  { name: 'Alfamart', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg' },
  { name: 'Indomaret', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png' },
  { name: 'QRIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Qris_logo.svg' },
];

export const PaymentMethods: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gaming-900 to-slate-900 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Pembayaran & Transaksi</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Nikmati kemudahan berbelanja dengan berbagai metode pembayaran yang didukung oleh partner marketplace kami.
                Aman, cepat, dan terverifikasi.
            </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                
                {/* Info Text */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        Proses Pembayaran Aman
                    </h3>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gaming-accent mt-2.5 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                            <span className="flex-1 text-sm md:text-base">Transaksi diproses melalui sistem Escrow (Rekber) marketplace terpercaya untuk keamanan dana Anda.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gaming-accent mt-2.5 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                            <span className="flex-1 text-sm md:text-base">Mendukung pembayaran Tunai di Tempat (COD), Transfer Bank, E-Wallet, hingga Cicilan.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gaming-accent mt-2.5 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                            <span className="flex-1 text-sm md:text-base">Konfirmasi pembayaran otomatis tanpa perlu kirim bukti transfer manual.</span>
                        </li>
                    </ul>
                </div>

                {/* Methods Grid */}
                <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center md:text-left">Metode Pembayaran</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {METHODS.map((item) => (
                             <div key={item.name} className="h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-md transition-all p-2">
                                <img 
                                  src={item.logo} 
                                  alt={item.name} 
                                  className="h-8 w-auto max-w-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                />
                             </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center md:text-left">
                        <span className="inline-block text-xs text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700/30">
                            * Metode tersedia tergantung toko & produk
                        </span>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};