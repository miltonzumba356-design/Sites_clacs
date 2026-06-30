import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Play, CheckCircle, Award, Users, Target } from 'lucide-react';

export function HeroSection() {
  const stats = [
    { icon: Users, value: "200+", label: "Clientes Satisfeitos" },
    { icon: Target, value: "500+", label: "Projetos Concluídos" },
    { icon: Award, value: "7+", label: "Anos de Experiência" }
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <div className="flex flex-col items-center text-center min-h-[80vh] justify-center">
          {/* Centered Content */}
          <div className="text-gray-900 space-y-8 max-w-4xl">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformando
                <span className="block bg-gradient-to-r from-primary to-blue-800 bg-clip-text text-transparent">
                  Ideias Impossíveis
                </span>
                <span className="block text-primary">
                  em Soluções
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mx-auto">
                Há mais de 7 anos oferecemos soluções completas em <strong>ERP Primavera</strong>,
                desenvolvimento web e serviços de informática para empresas que buscam crescimento.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 hover:shadow-2xl transition-clacs group"
                onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Conhecer a CLACS
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-primary/20">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-primary/30 transition-clacs border border-primary/30">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}