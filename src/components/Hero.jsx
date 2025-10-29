import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 overflow-hidden" aria-label="Flower store hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient to enhance text legibility without blocking Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-50/80 via-rose-50/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] flex flex-col items-start justify-center">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-rose-700 border border-rose-200">
            New season blooms
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-rose-900">
            Fresh florals, artfully arranged
          </h1>
          <p className="mt-4 max-w-2xl text-rose-800/80 text-base md:text-lg">
            Discover handcrafted bouquets and timeless stems inspired by minimalist Japanese floral design.
            Same-day delivery available in select cities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 transition-colors">
              Shop collections
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold text-rose-900 border border-rose-200 hover:bg-white transition-colors">
              Our philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
