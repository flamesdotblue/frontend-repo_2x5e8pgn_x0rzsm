import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-white/70 backdrop-blur border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-lg font-semibold">✿</span>
          <span className="font-semibold text-lg tracking-tight text-rose-800">Blossom & Bloom</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-rose-700">
          <a href="#collections" className="hover:text-rose-900 transition-colors">Collections</a>
          <a href="#about" className="hover:text-rose-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-rose-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-md text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 transition-colors">Shop now</button>
        </div>
      </div>
    </header>
  );
}
