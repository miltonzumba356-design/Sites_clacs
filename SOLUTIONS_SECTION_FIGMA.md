# 🎨 Seção "Nossos Clientes" - Implementação Figma

## 📋 Visão Geral

A seção "Nossos Clientes" foi reimplementada **exatamente conforme o design do Figma**, seguindo todas as especificações de layout, tipografia e espaçamento.

## ✨ O Que Mudou

### ❌ Removido:
- Carrossel automático horizontal (Embla Carousel)
- Background com imagem de escritório e overlay
- Cards dos serviços (ERP Primavera, Transformação Digital, etc.)

### ✅ Implementado:
- Layout fixo conforme Figma
- Grid horizontal com scroll (overflow hidden)
- 22 cards de clientes com dimensões exatas
- Imagem de fundo do Figma
- Tipografia Segoe UI conforme design
- Espaçamentos e cores exatas

## 🎨 Design Especificações

### Tipografia:
- **Título:** Segoe UI Bold, 26.25px, #101828
- **Parágrafo:** Segoe UI Regular, 12.25px, #6a7282

### Cards de Clientes:
- **Tamanho:** 168px × 112px
- **Background:** #f9fafb
- **Border Radius:** 12.75px
- **Gap entre cards:** 28px

### Dimensões das Imagens:
- **Clientes 1-9:** 70px × 21px
- **Clientes 10-22:** 78px × 21px

### Layout:
- **Container principal:** 1008px largura
- **Padding lateral:** 42px
- **Altura total:** 308px

## 📁 Estrutura de Arquivos

```
/public/
  ├── solutions-bg.png      # Background do Figma (já copiado)
  ├── cliente1.png          # Logo cliente 1 (70×21px)
  ├── cliente2.png          # Logo cliente 2 (70×21px)
  ├── ...
  ├── cliente9.png          # Logo cliente 9 (70×21px)
  ├── cliente10.png         # Logo cliente 10 (78×21px)
  ├── ...
  └── cliente22.png         # Logo cliente 22 (78×21px)
```

## 🖼️ Preparando as Imagens dos Clientes

### Requisitos:

1. **Clientes 1-9:**
   - Largura: 70px
   - Altura: 21px
   - Formato: PNG com fundo transparente

2. **Clientes 10-22:**
   - Largura: 78px
   - Altura: 21px
   - Formato: PNG com fundo transparente

### Dicas:
- Use logos horizontais
- Mantenha boa qualidade mesmo em tamanho pequeno
- Fundo transparente é essencial
- Peso máximo: 50KB por imagem

## 📊 Estrutura Visual

```
┌─────────────────────────────────────────────────────┐
│              Nossos Clientes                        │
│                                                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ →      │
│  │ C1 │ │ C2 │ │ C3 │ │ C4 │ │ C5 │ │ C6 │ ...    │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘        │
│                                                     │
│  Mais de 200 empresas confiam nas nossas soluções  │
└─────────────────────────────────────────────────────┘
```

## 🔧 Código Base

O componente foi reescrito usando a estrutura exata do Figma:

```tsx
// Componente principal
export function SolutionsSection() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[70px] px-[129.333px] relative size-full">
      <img src="/solutions-bg.png" className="absolute inset-0..." />
      <Container />
    </div>
  );
}

// Card de cliente reutilizável
function ClientCard({ clientNumber, width }: { clientNumber: number; width?: number }) {
  return (
    <div className="bg-[#f9fafb] h-[112px] rounded-[12.75px] w-[168px]">
      <img src={`/cliente${clientNumber}.png`} style={{ height: '21px', width: `${width}px` }} />
    </div>
  );
}
```

## 🎯 Comportamento

- **Scroll:** Horizontal com overflow hidden
- **Posicionamento:** Absoluto com left negativo para criar efeito de scroll
- **Responsividade:** Mantém proporções do Figma

## ⚠️ Importante

- **NÃO modifique** as classes CSS - estão exatamente como no Figma
- **NÃO altere** os valores numéricos de padding, margin, etc.
- **NÃO troque** as fontes - deve ser Segoe UI
- **Mantenha** os nomes dos arquivos exatamente como especificado

## 📝 Notas Técnicas

### Classes Tailwind Importantes:
- `content-stretch` - Mantém o conteúdo esticado
- `flex-[1_0_0]` - Flex grow/shrink específico
- Valores exatos em px (não usar rem/em)
- Cores hexadecimais exatas do Figma

### Performance:
- 22 imagens pequenas (~50KB cada = ~1.1MB total)
- Background image (~200KB)
- Carregamento otimizado

## ❓ Troubleshooting

### Imagens não aparecem:
1. Verifique se estão em `/public/`
2. Nomes: `cliente1.png`, não `Cliente1.PNG`
3. Dimensões corretas (70px ou 78px de largura)

### Layout quebrado:
1. Não modifique as classes CSS
2. Mantenha a estrutura de divs aninhadas
3. Verifique se o background está presente

### Fontes diferentes:
- Segoe UI é nativa do Windows
- Em Mac/Linux pode usar fallback: sans-serif

---

**Design:** Figma (100% fidelidade)  
**Última atualização:** Abril 2026
