# Pasta Public - Arquivos Públicos

Esta pasta contém arquivos estáticos que serão servidos diretamente pelo servidor.

## 📸 Imagens Necessárias

### 1. timem.png
- **Localização:** `/public/timem.png`
- **Uso:** Imagem da equipe CLACS na seção "Sobre"
- **Recomendações:**
  - Tamanho sugerido: 800x600px ou maior
  - Formato: PNG (com transparência se necessário)
  - Peso: Máximo 500KB para melhor performance

### 2. Logos dos Clientes (22 imagens)
- **Localização:** `/public/cliente1.png` até `/public/cliente22.png`
- **Uso:** Grid de clientes na seção "Nossos Clientes"
- **Recomendações:**
  - **Cliente 1-9:** Largura 70px, Altura 21px
  - **Cliente 10-22:** Largura 78px, Altura 21px
  - Formato: PNG com fundo transparente (ideal para logos)
  - Peso: Máximo 50KB por imagem
  - Nomes exatos: `cliente1.png`, `cliente2.png`, ..., `cliente22.png`

### 3. Foto do Fundador
- **Localização:** `/public/founder.png`
- **Uso:** Seção expansível do fundador na página "Sobre"
- **Recomendações:**
  - Tamanho sugerido: 512x512px (quadrada)
  - Formato: PNG ou JPG
  - Foto profissional com fundo neutro
  - Peso: Máximo 200KB

### 4. Imagem de Fundo - Seção Clientes
- **Localização:** `/public/solutions-bg.png`
- **Uso:** Background da seção "Nossos Clientes"
- **Descrição:** Já copiada automaticamente do Figma

## 💡 Como Adicionar Imagens

1. Coloque todas as imagens diretamente nesta pasta `/public/`
2. O código já está configurado para carregar automaticamente
3. Caminhos no código:
   - `/timem.png`
   - `/cliente1.png` ... `/cliente22.png`
   - `/founder.png`
   - `/solutions-bg.png` (já incluída)

## ✏️ Personalizar Informações do Fundador

Edite o arquivo `/src/app/components/AboutSection.tsx` e substitua:
- `[Nome do Fundador]` - Nome real do fundador
- Texto da biografia
- Links das redes sociais
- Conquistas e certificações

## 🔗 Como Funciona

Qualquer arquivo colocado em `/public/` fica acessível diretamente pela URL:
- Arquivo: `/public/timem.png`
- URL: `https://seusite.com/timem.png`
