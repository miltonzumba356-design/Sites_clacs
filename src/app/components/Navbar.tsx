import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#inicio')}
            className="flex-shrink-0 transition-opacity hover:opacity-80"
          >
            <div className="h-12 md:h-14 w-auto flex items-center">
              <img
                src="/image copy.png"
                alt="CLACS Tecnologia Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 mr-4">
              <div className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>

                <span className="text-sm"> </span>
              </div>
              <div className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>

                <span className="text-sm"> </span>
              </div>
            </div>

            <Button
              onClick={() => handleNavClick('#contato')}
              className="gradient-clacs hover:shadow-clacs transition-clacs"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
              }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-y-4">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-2 font-medium text-gray-900 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+244925 505 439</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">geral@clacstecnologia.com</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => handleNavClick('#contato')}
                className="w-full mt-4 gradient-clacs hover:shadow-clacs transition-clacs"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}