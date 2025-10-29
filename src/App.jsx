import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-950">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">Rooted in minimalism, crafted with care</h2>
            <p className="mt-4 text-rose-800/80">
              We celebrate the quiet poetry of flowers. Our studio curates seasonal stems and arranges them with
              intention—balancing color, texture, and negative space for a serene, modern aesthetic.
            </p>
          </div>
        </section>
        <CollectionGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
