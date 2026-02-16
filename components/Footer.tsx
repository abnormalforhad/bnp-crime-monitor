import React from 'react';
import { Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Desc */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                alt="BNP Crime Monitor Logo" 
                className="h-10 w-auto" 
                src="https://public.readdy.ai/ai/img_res/6a1af06b-a416-4098-8da9-9550173604cb.png" 
              />
              <span className="text-xl font-bold">BNP Crime Monitor</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Documenting and tracking incidents involving BNP across Bangladesh. Providing transparent access to news reports from Daily Amardesh with geographic visualization and comprehensive timeline tracking.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              <li>
                <a href="https://www.dailyamardesh.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1">
                  Daily Amardesh <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Disclaimer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 BNP Crime Monitor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;