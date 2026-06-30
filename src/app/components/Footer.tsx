import React from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  Globe
} from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    { label: 'Software Primavera', href: '#servicos' },
    { label: 'Desenvolvimento Web', href: '#servicos' },
    { label: 'Serviços de Informática', href: '#servicos' },
    { label: 'Processamento de Salários', href: '#servicos' }
  ];

  const legalLinks = [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'LGPD', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">CLACS</h3>
              <p className="text-primary text-sm">Tecnologia</p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em ERP Primavera desde 2018. Oferecemos soluções
              completas em tecnologia empresarial, desenvolvimento web e serviços de informática.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">+244925 505 439</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">geral@clacstecnologia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">Rua Cerveira Pereira, Bairro Coqueiros, Prédio 5 - 1º Andar, Luanda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(service.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Fique Conectado</h4>

            <p className="text-gray-300 text-sm mb-4">
              Receba novidades sobre ERP Primavera e soluções tecnológicas.
            </p>

            <div className="flex space-x-2 mb-6">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="gradient-clacs px-4">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-medium mb-3 text-gray-300">Redes Sociais</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm text-gray-400">
              © 2018-2026 CLACS Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <Globe className="h-3 w-3" />
              <span>Parceiro Oficial Primavera</span>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-primary p-2"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}