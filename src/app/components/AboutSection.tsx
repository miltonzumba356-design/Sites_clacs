import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Mail,
  BookOpen,
  Briefcase,
  Trophy,
  Settings
} from 'lucide-react';

export function AboutSection() {
  const [showFounder, setShowFounder] = useState(false);

  const education = [
    "Licenciado em Engenharia Informática pela Universidade Católica de Angola",
    "Certificação em Score ERP Primavera pela Primavera Academy",
    "Formação em MIP (Metodologia de Implementação ERP Primavera) pela Primavera Academy",
    "Capacitação em Gestão de Bases de Dados pela Primavera Academy",
    "Especialização em Crystal Reports pela Primavera Academy"
  ];

  const experience = [
    {
      period: "Atual",
      role: "Diretor Geral e Fundador da CLACS TECNOLOGIA, LDA",
      description: "Lidera as operações da empresa, gerenciando projetos, auxiliando as áreas técnica e comercial. Atua na implementação de soluções tecnológicas e na gestão de equipes."
    },
    {
      period: "2019 – 2022",
      role: "Consultor Sênior de ERP Primavera na F3M Angola Information Systems, Lda",
      description: "Serviços de implementação, formação, suporte e melhorias do ERP Primavera. Atendeu mais de 5.000 clientes em diversas áreas."
    },
    {
      period: "2016 – 2019",
      role: "Consultor Júnior de ERP Primavera na DATAMEX (Hoje DIGITEX)",
      description: "Liderança de projetos de implantação e suporte ao sistema Primavera, evoluindo para Consultor Sênior em 2019."
    }
  ];

  const projectsByEntity = [
    {
      entity: "Pela DATAMEX / DIGITEX",
      list: [
        "GHION ALIMENTOS, LDA (Sumos, Batatas Lulu)",
        "AFRICA FUTURE COMERCIO E INDUSTRIA, LDA (Guardanapos, Detergentes)",
        "ANSEBA GROUP (Todas as empresas do grupo)",
        "ORION - MARKETING, PUBLICIDADE E PRODUÇÃO, S.A",
        "INACOM - INSTITUTO ANGOLANO DAS COMUNICAÇÕES"
      ]
    },
    {
      entity: "Pela F3M ANGOLA",
      list: [
        "APROT ENGENHARIA S.A",
        "IMPRENSA NACIONAL ANGOLA",
        "It's US MULTINACIONAL",
        "ECONÓMICO FUNDO DE INVESTIMENTOS",
        "TECNIGOL - CONSTRUÇÃO CIVIL E OBRAS PÚBLICAS",
        "RÁDIO NACIONAL DE ANGOLA (RNA)",
        "OCPCA - ORDEM DOS CONTABILISTAS DE ANGOLA"
      ]
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Sobre a CLACS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Especialistas em
            <span className="block text-primary">ERP Primavera desde 2018</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A CLACS Tecnologia é uma empresa angolana que se dedica ao desenvolvimento
            de soluções tecnológicas inovadoras, especializada em ERP Primavera,
            desenvolvimento web e serviços de informática.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/timem.png"
              alt="Equipe CLACS Tecnologia"
              className="relative w-full h-auto rounded-2xl shadow-lg hover:shadow-clacs transition-clacs"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Nossa História
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fundada por profissionais com vasta experiência em tecnologia, a CLACS nasceu da visão de democratizar o acesso a soluções tecnológicas de alta qualidade para empresas de todos os portes no mercado angolano.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com foco especial no ecossistema Primavera, transformamos a gestão empresarial através de implementações precisas e suporte especializado.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 pt-4">
              Diferenciais CLACS
            </h4>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white border-gray-300 rounded-full">
                Expertise Primavera
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white border-gray-300 rounded-full">
                Suporte Local 24/7
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white border-gray-300 rounded-full">
                Formação Especializada
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white border-gray-300 rounded-full">
                Desenvolvimento Customizado
              </Badge>
            </div>

            <Button
              onClick={() => setShowFounder(!showFounder)}
              className="gradient-clacs hover:shadow-clacs transition-clacs group mt-4"
            >
              {showFounder ? 'Ocultar Detalhes' : 'Conheça o Fundador'}
              {showFounder ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Founder Section - Estilo Apresentação Executiva */}
        <div
          className={`transition-all duration-1000 ease-in-out overflow-hidden ${showFounder ? 'max-h-[5000px] opacity-100 mt-20' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Elemento Decorativo: Círculo de Gradiente (Azul do Site) */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              {/* Foto do Fundador com Círculo de Gradiente Azul */}
              <div className="lg:w-1/2 relative flex justify-center">
                {/* O Círculo atrás da pessoa - agora em AZUL */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-400 to-primary rounded-full opacity-20"></div>

                <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/faunder.jpeg"
                    alt="Dinis Jombe - CEO"
                    className="w-full h-full object-contain bg-white/20 backdrop-blur-sm"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x1000/007bff/white?text=Dinis+Jombe';
                    }}
                  />
                </div>
              </div>

              {/* Conteúdo - Estilo Clean Slide com cores do site */}
              <div className="lg:w-1/2 space-y-10">
                <div>
                  <h4 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                    Dinis Jombe
                  </h4>
                  <div className="flex items-center space-x-3 mt-4">
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium">CEO & Fundador</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                    Especialista em Engenharia Informática e apaixonado por transformar a gestão empresarial através do ecossistema Primavera.
                  </p>

                  <div className="grid gap-6">
                    {/* Educação Highlight */}
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-gray-900">Formação de Elite</h5>
                        <p className="text-gray-500">Engenheiro Informático e Especialista Primavera Academy</p>
                      </div>
                    </div>

                    {/* Projetos Highlight */}
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-gray-900">Histórico de Impacto</h5>
                        <p className="text-gray-500">Liderança em projetos na RNA, INACOM e Imprensa Nacional</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="https://www.linkedin.com/in/dinis-jombe-45947412b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-blue-200"
                  >
                    Ver LinkedIn
                  </a>
                  <a
                    href="mailto:dinis.jombe@clacstecnologia.com"
                    className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold hover:border-primary transition-all"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>

            {/* Sub-detalhes em AZUL */}
            <div className="grid md:grid-cols-3 gap-12 mt-24 pt-16 border-t border-gray-50">
              <div className="space-y-4">
                <h5 className="text-sm font-black text-primary uppercase tracking-widest">Experiência</h5>
                <div className="space-y-3">
                  {experience.map((exp, i) => (
                    <div key={i} className="group cursor-default">
                      <p className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors">{exp.period}</p>
                      <p className="text-gray-800 font-bold leading-tight">{exp.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-sm font-black text-primary uppercase tracking-widest">Especializações</h5>
                <ul className="space-y-2">
                  {[
                    "Implementação ERP Primavera",
                    "BI & Crystal Reports",
                    "Gestão de Projetos TI",
                    "Customização de Software"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-sm font-black text-primary uppercase tracking-widest">Principais Projetos</h5>
                <div className="flex flex-wrap gap-2">
                  {["RNA", "INACOM", "APROT", "OCPCA", "F3M", "Datamex"].map((p, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-50 text-primary rounded-lg text-xs font-bold border border-blue-100">
                      {p}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 italic mt-4">+200 empresas atendidas em Angola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}