# 👤 Guia da Seção do Fundador

## 📋 Visão Geral

A seção do fundador é uma área **expansível** na página "Sobre" que aparece quando o usuário clica no botão "Ver mais".

## ✨ Funcionalidades

- ✅ **Botão dinâmico** - Muda de "Ver mais" para "Ocultar"
- ✅ **Animação suave** - Expansão/retração com transição elegante
- ✅ **Design moderno** - Card com gradiente e foto destacada
- ✅ **Responsive** - Funciona em desktop, tablet e mobile
- ✅ **Links sociais** - LinkedIn e email do fundador

## 🖼️ Imagem Necessária

### founder.png
- **Localização:** `/public/founder.png`
- **Tamanho:** 512x512px (quadrada)
- **Formato:** PNG ou JPG
- **Recomendações:**
  - Foto profissional
  - Fundo neutro ou corporativo
  - Boa iluminação
  - Enquadramento do rosto/busto
  - Peso máximo: 200KB

## ✏️ Personalizar Conteúdo

Edite o arquivo: `/src/app/components/AboutSection.tsx`

### 1. Nome do Fundador (linha ~112)
```tsx
<h4 className="text-2xl font-bold text-gray-900">
  [Nome do Fundador]  // ← SUBSTITUA AQUI
</h4>
```

### 2. Biografia (linhas ~116-124)
```tsx
<p className="text-gray-600 leading-relaxed">
  Com mais de 15 anos de experiência...  // ← EDITE AQUI
</p>

<p className="text-gray-600 leading-relaxed">
  Especialista em ERP Primavera...  // ← EDITE AQUI
</p>
```

### 3. Conquistas (linhas ~128-142)
```tsx
<li className="flex items-start">
  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
  <span className="text-gray-600">200+ projetos implementados</span>  // ← EDITE
</li>
```

### 4. Links Sociais (linhas ~146-159)

**LinkedIn:**
```tsx
<a href="#">  // ← Cole o link do LinkedIn aqui
  <Linkedin className="h-5 w-5" />
  <span className="text-sm">LinkedIn</span>
</a>
```

**Email:**
```tsx
<a href="mailto:founder@clacstecnologia.com">  // ← Substitua o email
  <Mail className="h-5 w-5" />
  <span className="text-sm">Contato</span>
</a>
```

## 🎨 Estrutura Visual

```
┌─────────────────────────────────────────┐
│    Conheça o Fundador                   │
│    ─────────────────                    │
│                                         │
│  ┌─────────┐    Nome do Fundador       │
│  │         │    CEO & Fundador          │
│  │  Foto   │                            │
│  │         │    Biografia...            │
│  └─────────┘                            │
│   CEO Badge    Conquistas:              │
│                ✓ Item 1                 │
│                ✓ Item 2                 │
│                ✓ Item 3                 │
│                                         │
│                [LinkedIn] [Email]       │
└─────────────────────────────────────────┘
```

## 🎯 Exemplo de Conteúdo

```tsx
<h4 className="text-2xl font-bold text-gray-900">
  João Silva
</h4>

<p className="text-gray-600 leading-relaxed">
  Com mais de 12 anos de experiência em soluções ERP para o mercado angolano, 
  João fundou a CLACS Tecnologia em 2018 após identificar uma lacuna no 
  atendimento personalizado a empresas de médio porte.
</p>

<p className="text-gray-600 leading-relaxed">
  Formado em Engenharia de Software e certificado oficialmente pela Primavera, 
  lidera uma equipe de 15 profissionais dedicados a transformar a gestão 
  empresarial através da tecnologia.
</p>
```

## 🔧 Ajustes de Estilo

### Alterar cores do badge (linha ~104):
```tsx
<div className="absolute -bottom-4 -right-4 bg-primary text-white">
  // Trocar bg-primary por bg-green-600, bg-blue-700, etc.
</div>
```

### Alterar tamanho da foto (linha ~100):
```tsx
<div className="w-64 h-64 rounded-2xl">  // Atual: 256x256px
<div className="w-80 h-80 rounded-2xl">  // Maior: 320x320px
```

## ❓ Solução de Problemas

### Seção não expande:
1. Verifique o console do navegador para erros
2. Certifique-se que o estado `showFounder` está funcionando

### Imagem não aparece:
1. Verifique se `founder.png` está em `/public/`
2. Nome deve ser exatamente `founder.png` (minúsculas)
3. Atualize a página (Ctrl + F5)

### Animação está travada:
1. Verifique se não há conflitos CSS
2. Tente ajustar o `max-h-[1000px]` para um valor maior

---

**Última atualização:** Abril 2026
