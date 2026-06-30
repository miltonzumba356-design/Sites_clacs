# CLACS Tecnologia - Website Oficial

Website oficial da CLACS Tecnologia, empresa especializada em soluções de tecnologia, desenvolvimento de software, ERP Primavera e serviços de informática em Angola.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS v4** - Framework CSS utilitário moderno
- **Vite** - Build tool rápido e moderno
- **Lucide React** - Biblioteca de ícones
- **Radix UI** - Componentes primitivos acessíveis

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview

# Executar linting
npm run lint
```

## 🌐 Deploy

Este projeto está configurado para deploy em diversas plataformas:

### Netlify
1. Conecte seu repositório ao Netlify
2. O arquivo `netlify.toml` já está configurado
3. Build automático será executado

### Vercel
1. Conecte seu repositório ao Vercel
2. O arquivo `vercel.json` já está configurado
3. Deploy automático será executado

### Hospedagem Tradicional
1. Execute `npm run build`
2. Faça upload da pasta `dist` para seu servidor
3. Configure o servidor para servir `index.html` para todas as rotas

## 📁 Estrutura do Projeto

```
├── public/                 # Arquivos estáticos
│   ├── robots.txt         # Configuração para crawlers
│   ├── sitemap.xml        # Mapa do site
│   └── site.webmanifest   # Manifest da PWA
├── src/                   # Código fonte principal
│   └── main.tsx          # Ponto de entrada da aplicação
├── components/            # Componentes React
│   ├── ui/               # Componentes da UI (shadcn/ui)
│   └── figma/            # Componentes específicos
├── styles/               # Estilos globais
│   └── globals.css       # CSS global com Tailwind
├── App.tsx               # Componente principal
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
└── vite.config.ts        # Configuração do Vite
```

## 🎨 Paleta de Cores da Marca

- **Azul Primário**: #007BFF
- **Azul Escuro**: #0056B3  
- **Preto Suave**: #1A1A1A
- **Cinza Escuro**: #333333
- **Branco**: #FFFFFF
- **Fundo Suave**: #F5F5F5

## 📱 Seções do Site

- **Hero Section**: Apresentação principal com call-to-action
- **Sobre Nós**: Informações sobre a empresa
- **Serviços**: Software Primavera, Desenvolvimento Web, Informática
- **Soluções**: Projetos de engenharia especializada
- **Contato**: Formulário e informações de contato

## 📞 Informações de Contato

- **Telefone**: +244925 505 439
- **Email**: geral@clacstecnologia.com
- **Endereço**: Cassenda, Rua 6, Casa S/N, Maianga, Luanda, Angola

## 🔧 Customização

### Cores da Marca
Edite as variáveis CSS em `styles/globals.css`:
```css
:root {
  --clacs-blue: #007BFF;
  --clacs-blue-dark: #0056B3;
  /* ... outras variáveis */
}
```

### Conteúdo
- Edite os textos nos componentes em `/components/`
- Adicione novos serviços em `ServicesSection.tsx`
- Modifique as soluções em `SolutionsSection.tsx`

## 📈 SEO e Performance

- Meta tags otimizadas para SEO
- Sitemap.xml configurado
- Robots.txt configurado
- Compressão de assets habilitada
- Cache headers configurados
- Lazy loading de imagens
- Performance otimizada com Vite

## 🔒 Segurança

- Headers de segurança configurados
- Proteção XSS habilitada
- Content Security Policy configurada
- HTTPS obrigatório em produção

## 📄 Licença

Este projeto é propriedade da CLACS Tecnologia.

---

**CLACS Tecnologia** - Transformando ideias em soluções tecnológicas inovadoras.