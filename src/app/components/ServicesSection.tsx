import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Database,
  Globe,
  Server,
  ArrowRight,
  Check,
  Award,
  Users,
  ShieldCheck,
  Monitor
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: 'Software Primavera',
      description: 'Soluções completas em ERP Primavera para otimizar a gestão empresarial com consultoria especializada.',
      features: [
        'Consultoria no ERP Primavera',
        'Instalação e Parametrização do ERP Primavera',
        'Formação Módulos ERP Primavera',
        'Consultoria, suporte ou assistência técnica do ERP Primavera'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Desenvolvimento de Websites e Software',
      description: 'Criação de presenças digitais profissionais e soluções de software personalizadas para seu negócio.',
      features: [
        'Criação de emails corporativos',
        'Criação de Websites Informativos',
        'Desenvolvimento de E-commerce',
        'Lojas Online completas',
        'Software personalizado'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Server,
      title: 'Serviços de Informática',
      description: 'Gestão completa da infraestrutura tecnológica com suporte especializado e soluções de segurança.',
      features: [
        'Gestão e implementação de servidores',
        'Manutenção da estrutura informática e computadores',
        'Backups, Segurança GPO e Helpdesk',
        'Rede Estruturada',
        'Suporte técnico especializado'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: 'ERP Primavera',
      description: 'Implementação e suporte do ERP Primavera.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados com ampla experiência em soluções empresariais'
    },
    {
      icon: ShieldCheck,
      title: 'Suporte Garantido',
      description: 'Assistência técnica contínua e manutenção preventiva dos sistemas'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções Completas em
            <span className="block text-primary">Tecnologia Empresarial</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Especializados em Soluções Empresariais Tecnológicas,
            oferecemos o suporte completo que sua empresa precisa para crescer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-clacs transition-clacs duration-300 border-0 shadow-lg overflow-hidden">
              <CardHeader className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary transition-colors p-0 h-auto font-medium"
                  onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Por que Escolher a CLACS?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pronto para Modernizar sua Empresa?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades específicas 
            e implementar as melhores soluções em ERP Primavera e tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-clacs hover:shadow-clacs transition-clacs"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Consultoria Gratuita
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('tel:+244925505439', '_self')}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-clacs"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}