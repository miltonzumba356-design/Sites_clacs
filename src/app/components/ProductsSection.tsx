import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Archive,
  Building2,
  Radar,
  BellRing,
  ArrowRight,
  ShieldCheck,
  Search,
  Users,
  Mail,
  FileText,
} from 'lucide-react';

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 border-b border-gray-200">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 truncate ml-2 border border-gray-200">
          {url}
        </div>
      </div>
      <div className="p-4 md:p-5 bg-gray-50 min-h-[280px] flex flex-col">
        {children}
      </div>
    </div>
  );
}

function SigadMock() {
  const docs = [
    { name: 'Contrato_Fornecedor_2026.pdf', level: 'Confidencial', color: 'bg-red-100 text-red-700' },
    { name: 'Ata_Reuniao_Diretoria.docx', level: 'Restrito', color: 'bg-amber-100 text-amber-700' },
    { name: 'Relatorio_Anual.pdf', level: 'Público', color: 'bg-green-100 text-green-700' },
    { name: 'Processo_RH_0231.pdf', level: 'Confidencial', color: 'bg-red-100 text-red-700' },
  ];
  return (
    <div className="flex gap-3 flex-1">
      <div className="hidden sm:flex w-32 flex-col gap-2 bg-white rounded-lg border border-gray-200 p-3">
        {['Arquivo Geral', 'Financeiro', 'Jurídico', 'Recursos Humanos'].map((f, i) => (
          <div key={i} className={`flex items-center gap-2 text-[11px] rounded-md px-2 py-1.5 ${i === 0 ? 'bg-amber-50 text-amber-700 font-medium' : 'text-gray-500'}`}>
            <Archive className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{f}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-3 space-y-2">
        <div className="flex items-center gap-2 mb-2 bg-gray-50 rounded-md px-2 py-1.5 border border-gray-100">
          <Search className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-[11px] text-gray-400">Pesquisar documentos…</span>
        </div>
        {docs.map((d, i) => (
          <div key={i} className="flex items-center justify-between gap-2 text-[11px] px-2 py-1.5 rounded-md hover:bg-gray-50">
            <div className="flex items-center gap-2 min-w-0">
              <FileText className="h-3.5 w-3.5 text-gray-400 shrink-0" />
              <span className="truncate text-gray-700">{d.name}</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium shrink-0 ${d.color}`}>{d.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificacaoMock() {
  const items = [
    { name: 'Ana Kiala', status: 'Enviado' },
    { name: 'João Manuel', status: 'Enviado' },
    { name: 'Beatriz Neto', status: 'A processar' },
    { name: 'Carlos Sami', status: 'Enviado' },
  ];
  return (
    <div className="flex-1 space-y-3">
      <div className="bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-gray-700">Envio de recibos — Julho 2026</span>
          <span className="text-[10px] text-green-600 font-medium">86%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full" style={{ width: '86%' }} />
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-3 space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-3.5 w-3.5 text-gray-400" />
              {it.name}
            </div>
            <span className={`text-[10px] font-medium ${it.status === 'Enviado' ? 'text-green-600' : 'text-amber-600'}`}>
              {it.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    icon: Archive,
    name: 'SIGAD',
    tagline: 'Chega ao fim o arquivo em papel perdido e as pastas partilhadas sem controlo.',
    description: 'Arquivo físico e digital, OCR e níveis de confidencialidade num único sistema seguro.',
    color: 'from-amber-500 to-amber-600',
    url: 'sigad.clacstecnologia.com',
    mock: <SigadMock />,
  },
  {
    icon: Building2,
    name: 'SIPAR',
    tagline: 'Uma instituição, uma plataforma — sem papéis a perderem-se entre departamentos.',
    description: 'Actas, ofícios, contratos e frota, tudo num só fluxo digital com permissões por função.',
    color: 'from-indigo-500 to-indigo-600',
    url: 'sipar.clacstecnologia.com',
    bgImage: '/products/sipar-bg.png',
  },
  {
    icon: Radar,
    name: 'ClacsListening',
    tagline: 'Saiba o que dizem de si antes que isso se torne uma crise.',
    description: 'Monitorização de imprensa, redes sociais e avaliações com IA treinada em português angolano — em tempo real.',
    color: 'from-cyan-500 to-cyan-600',
    url: 'listening.clacstecnologia.com',
    bgImage: '/products/clacslistening-bg.png',
  },
  {
    icon: BellRing,
    name: 'PaySend',
    tagline: 'Acabe com a fila na receção só para entregar recibos de vencimento.',
    description: 'Recibos de vencimento gerados e enviados automaticamente por e-mail, Whatsapp sem trabalho manual do RH.',
    color: 'from-emerald-500 to-emerald-600',
    url: 'App de Secretária · Notificação9',
    mock: <NotificacaoMock />,
  },
];

function ProductHeroCard({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[480px] md:min-h-[520px]">
      {product.bgImage ? (
        <img
          src={product.bgImage}
          alt={`${product.name} — pré-visualização`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${product.color}`} />
          {product.mock && (
            <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] md:w-[380px] -rotate-2 hidden sm:block">
              <BrowserFrame url={product.url}>{product.mock}</BrowserFrame>
            </div>
          )}
        </>
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-tl to-transparent ${
          product.bgImage ? 'from-gray-900/95 via-gray-900/40' : 'from-black/60 via-black/20'
        }`}
      />

      {/* Icon - top right */}
      <div
        className={`absolute top-6 right-6 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl shadow-lg`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Text - bottom right */}
      <div className="absolute bottom-0 right-0 max-w-sm px-6 md:px-10 py-8 md:py-10 text-right">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {product.name}
        </h3>
        <p className="text-lg text-white font-medium mb-3 leading-snug">
          {product.tagline}
        </p>
        <p className="text-gray-200 text-sm leading-relaxed mb-5">
          {product.description}
        </p>
        <Button
          className="gradient-clacs hover:shadow-clacs transition-clacs group"
          onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Pedir Demonstração
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const plugin = React.useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nossos Produtos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Software Próprio, Desenvolvido
            <span className="block text-primary">para Resolver Problemas Reais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Além de implementar soluções para terceiros, a CLACS desenvolve os seus próprios
            sistemas — construídos em Angola, para a realidade de instituições e empresas angolanas.
          </p>
        </div>

        {/* Products Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.name}>
                <ProductHeroCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/15 border-white/30 text-white hover:bg-white/25 hover:text-white backdrop-blur" />
          <CarouselNext className="right-4 bg-white/15 border-white/30 text-white hover:bg-white/25 hover:text-white backdrop-blur" />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((product, i) => (
            <button
              key={product.name}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ver ${product.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-5">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tem uma ideia parecida para a sua empresa?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Estes produtos nasceram de necessidades reais de clientes angolanos. Se a sua
            instituição precisa de um sistema à medida, a nossa equipa pode desenhá-lo consigo,
            do zero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-clacs hover:shadow-clacs transition-clacs"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="mr-2 h-5 w-5" />
              Falar com a Nossa Equipa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
