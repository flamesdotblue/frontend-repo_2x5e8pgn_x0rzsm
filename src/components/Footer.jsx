import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-rose-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-lg font-semibold">✿</span>
              <span className="font-semibold text-lg tracking-tight text-rose-800">Blossom & Bloom</span>
            </div>
            <p className="mt-3 text-sm text-rose-800/80 max-w-sm">
              Minimalist floristry with a serene touch. Handcrafted arrangements delivered with care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-rose-900">Shop</h4>
              <ul className="mt-3 space-y-2 text-sm text-rose-800/80">
                <li><a href="#collections" className="hover:text-rose-900">Collections</a></li>
                <li><a href="#" className="hover:text-rose-900">Gift cards</a></li>
                <li><a href="#" className="hover:text-rose-900">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-rose-900">About</h4>
              <ul className="mt-3 space-y-2 text-sm text-rose-800/80">
                <li><a href="#about" className="hover:text-rose-900">Our story</a></li>
                <li><a href="#" className="hover:text-rose-900">Sustainability</a></li>
                <li><a href="#" className="hover:text-rose-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-900">Newsletter</h4>
            <p className="mt-3 text-sm text-rose-800/80">Sign up for floral drops and seasonal offers.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" required placeholder="you@example.com" className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300" />
              <button type="submit" className="shrink-0 rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-rose-200 pt-6">
          <p className="text-xs text-rose-800/70">© {new Date().getFullYear()} Blossom & Bloom. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-rose-800/70">
            <a href="#" className="hover:text-rose-900">Privacy</a>
            <a href="#" className="hover:text-rose-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
