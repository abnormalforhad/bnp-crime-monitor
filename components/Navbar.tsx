import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 cursor-pointer">
            <img 
              alt="BNP Crime Monitor Logo" 
              className="h-12 w-auto" 
              src="https://public.readdy.ai/ai/img_res/6a1af06b-a416-4098-8da9-9550173604cb.png" 
            />
            <span className="text-xl font-bold transition-colors text-gray-900">
              BNP Crime Monitor
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')} 
              className="font-medium transition-colors cursor-pointer whitespace-nowrap text-red-600"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')} 
              className="font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-900 hover:text-red-600"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-900 hover:text-red-600"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')} 
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600 bg-gray-50"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;