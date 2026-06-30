import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones,
  AlertCircle
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Configuração do EmailJS - IMPORTANTE: Substitua com suas credenciais
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // Obtenha em emailjs.com
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Obtenha em emailjs.com
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // Obtenha em emailjs.com

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Preparar os parâmetros do template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Não informado',
        company: formData.company || 'Não informado',
        message: formData.message,
        to_email: 'geral@clacstecnologia.com'
      };

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });

        // Resetar mensagem de sucesso após 5 segundos
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Erro ao enviar email:', err);
      setIsSubmitting(false);
      setError('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo telefone +244925 505 439.');

      // Limpar erro após 7 segundos
      setTimeout(() => setError(null), 7000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '+244925 505 439',
      link: 'tel:+244925505439'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'geral@clacstecnologia.com',
      link: 'mailto:geral@clacstecnologia.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua Cerveira Pereira, Bairro Coqueiros, Prédio 5 - 1º Andar, Luanda',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg - Sex: 8h às 18h',
      link: '#'
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Chat Online',
      description: 'Fale conosco agora mesmo através do nosso chat',
      action: 'Iniciar Chat',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Consultoria Gratuita',
      description: 'Agende uma reunião para discutir seu projeto',
      action: 'Agendar Reunião',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Headphones,
      title: 'Suporte Técnico',
      description: 'Precisa de ajuda com algum sistema existente?',
      action: 'Solicitar Suporte',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mensagem Enviada com Sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Recebemos sua mensagem e entraremos em contato em breve. 
              Tempo médio de resposta: 2 horas úteis.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="gradient-clacs"
            >
              Enviar Nova Mensagem
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vamos Conversar Sobre
            <span className="block text-primary">Seu Próximo Projeto?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe está pronta para entender suas necessidades e desenvolver 
            a solução ideal para o seu negócio. Entre em contato agora mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Mensagem de Erro */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+244925 505 439"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Conte-nos sobre seu projeto, necessidades ou dúvidas..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full gradient-clacs hover:shadow-clacs transition-clacs group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{info.title}</h4>
                      <p className="text-sm text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-4">
              {supportOptions.map((option, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-clacs transition-clacs group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <option.icon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {option.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}