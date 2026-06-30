# 🚀 Instruções de Deploy - CLACS Tecnologia

## Opções de Hospedagem Recomendadas

### 1. Netlify (Gratuito/Pago) ⭐ RECOMENDADO
**Vantagens**: Deploy automático, HTTPS gratuito, CDN global, fácil configuração

**Passos:**
1. Acesse [netlify.com](https://netlify.com)
2. Faça login/cadastro
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub/GitLab
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy automático!

**URL final**: `https://nome-do-site.netlify.app` (pode configurar domínio customizado)

### 2. Vercel (Gratuito/Pago) ⭐ RECOMENDADO  
**Vantagens**: Otimizado para React, deploy instantâneo, analytics

**Passos:**
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório
5. Vercel detecta automaticamente as configurações
6. Clique em "Deploy"

**URL final**: `https://nome-do-projeto.vercel.app`

### 3. GitHub Pages (Gratuito)
**Limitação**: Apenas repositórios públicos na versão gratuita

**Passos:**
1. No seu repositório GitHub, vá em Settings > Pages
2. Configure source como "GitHub Actions"
3. Crie arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Hospedagem Tradicional (cPanel/FTP)

**Passos:**
1. Execute localmente:
```bash
npm install
npm run build
```

2. Faça upload da pasta `dist` completa para o diretório público do seu servidor (geralmente `public_html/`)

3. Configure redirecionamentos no `.htaccess`:
```apache
RewriteEngine On
RewriteBase /

# Handle Angular and Vue apps
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /index.html [L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
```

## Configuração de Domínio Personalizado

### Para Netlify:
1. No painel Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure DNS do seu domínio:
   - Tipo: CNAME
   - Nome: www (ou @)
   - Valor: nome-do-site.netlify.app

### Para Vercel:
1. No projeto Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio
3. Configure DNS:
   - Tipo: CNAME  
   - Nome: www
   - Valor: cname.vercel-dns.com

## Variáveis de Ambiente (se necessário)

Crie arquivo `.env.local`:
```env
VITE_CONTACT_EMAIL=geral@clacstecnologia.com
VITE_PHONE_NUMBER=+244925505439
VITE_SITE_URL=https://clacstecnologia.com
```

## Checklist Pré-Deploy ✅

- [ ] Testado localmente com `npm run build` e `npm run preview`
- [ ] Todas as imagens otimizadas
- [ ] Meta tags configuradas corretamente
- [ ] Sitemap.xml atualizado com URLs corretas
- [ ] Robots.txt configurado
- [ ] Formulário de contato testado
- [ ] Responsividade verificada em diferentes dispositivos
- [ ] Performance testada (Lighthouse)

## Monitoramento Pós-Deploy

### Ferramentas Recomendadas:
- **Google Analytics** - Para tracking de visitantes
- **Google Search Console** - Para SEO e indexação
- **Lighthouse** - Para performance (built-in no Chrome)
- **Pingdom/UptimeRobot** - Para monitoramento de uptime

### Performance:
- Target Lighthouse Score: 90+
- First Content Paint: < 2s
- Largest Content Paint: < 3s

## Suporte e Manutenção

### Atualizações Regulares:
```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

### Backup:
- Sempre mantenha backup do código no Git
- Exporte configurações do provedor de hospedagem
- Documente mudanças de DNS

## Problemas Comuns e Soluções

### Erro 404 em rotas:
- Verifique configuração de redirecionamento
- Netlify: arquivo `_redirects` ou `netlify.toml`
- Vercel: arquivo `vercel.json`

### Build falha:
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Performance lenta:
- Otimize imagens (usar WebP quando possível)
- Verifique se CDN está ativo
- Analise bundle size

---

**Contato para Suporte Técnico:**
- Email: geral@clacstecnologia.com
- Telefone: +244925 505 439

**Tempo estimado de deploy:** 5-15 minutos (dependendo da plataforma escolhida)