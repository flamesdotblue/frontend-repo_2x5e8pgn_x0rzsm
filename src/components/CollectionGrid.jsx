import React from 'react';

const collections = [
  {
    title: 'Signature Bouquets',
    description: 'Everyday arrangements in seasonal palettes.',
    color: 'from-rose-200 via-rose-100 to-rose-50',
    badge: 'Bestseller',
    emoji: '🌸',
  },
  {
    title: 'Wedding & Events',
    description: 'Elegant florals tailored for your moments.',
    color: 'from-pink-200 via-rose-100 to-rose-50',
    badge: 'Curated',
    emoji: '💍',
  },
  {
    title: 'Dried Stems',
    description: 'Long-lasting textures with gentle hues.',
    color: 'from-amber-200 via-rose-100 to-rose-50',
    badge: 'New',
    emoji: '🌾',
  },
  {
    title: 'Gifts & Add-ons',
    description: 'Cards, candles and artisanal chocolates.',
    color: 'from-rose-300 via-rose-100 to-rose-50',
    badge: 'Popular',
    emoji: '🎁',
  },
];

export default function CollectionGrid() {
  return (
    <section id="collections" className="relative py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">Explore our collections</h2>
            <p className="mt-2 text-rose-800/80">Thoughtfully designed pieces for every occasion.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-rose-700 hover:text-rose-900">View all →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((item) => (
            <article key={item.title} className={`group relative overflow-hidden rounded-2xl border border-rose-200 bg-gradient-to-br ${item.color} p-5 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/70 backdrop-blur text-[11px] font-medium text-rose-800 border border-rose-200">{item.badge}</span>
                <span className="text-2xl" aria-hidden>{item.emoji}</span>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-rose-950">{item.title}</h3>
              <p className="mt-1 text-sm text-rose-800/80">{item.description}</p>
              <button className="mt-6 inline-flex items-center text-sm font-semibold text-rose-700 group-hover:text-rose-900">Shop now →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
