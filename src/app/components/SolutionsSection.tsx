import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

function Heading() {
  return (
    <div className="flex justify-center w-full mb-8">
      <h2 className="font-['Segoe_UI:Bold',sans-serif] text-[#007bff] text-[26.25px] text-center font-bold">
        Nossos Clientes
      </h2>
    </div>
  );
}

function ClientCard({ clientNumber }: { clientNumber: number }) {
  return (
    <div className="px-4 py-6 h-full">
      <div className="h-[200px] flex items-center justify-center w-full px-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
      <img
        src={`/cliente${clientNumber}.png`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://placehold.co/300x120/transparent/6a7282?text=Logo`;
        }}
        alt={`Cliente ${clientNumber}`}
        className="max-h-[140px] max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex justify-center w-full mt-12">
      <p className="font-['Segoe_UI:Regular',sans-serif] text-[#6a7282] text-[16px] text-center max-w-2xl">
        Mais de 200 empresas confiam nas nossas soluções. Oferecemos suporte especializado e implementações de alta performance.
      </p>
    </div>
  );
}

export function SolutionsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  const clients = Array.from({ length: 29 }, (_, i) => i + 1);

  return (
    <section className="relative w-full py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Heading />
        
        <div className="w-full">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {clients.map((id) => (
                <CarouselItem key={id} className="pl-4 basis-full md:basis-1/3 lg:basis-1/3">
                  <ClientCard clientNumber={id} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <Paragraph />
      </div>
    </section>
  );
}
