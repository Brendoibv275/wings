import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartProject: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Navbar({ onStartProject }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-primary animate-pulse" />
            <span className="ml-2 text-xl font-bold text-black">Wing's</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-900 hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-gray-900 hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-900 hover:text-primary transition-colors">Contato</a>
            <a
              href="#"
              onClick={onStartProject}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Começar Projeto
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-primary">Serviços</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-primary">Sobre</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-primary">Contato</a>
              <a
                href="#"
                onClick={onStartProject}
                className="block px-3 py-2 text-white bg-primary rounded-lg"
              >
                Começar Projeto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}