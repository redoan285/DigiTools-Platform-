import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-3">DigiTools</h3>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2026 DigiTools. All rights reserved.</p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 cursor-pointer text-xl">𝕏</div>
            <div className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 cursor-pointer text-xl">📘</div>
            <div className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 cursor-pointer text-xl">📷</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;