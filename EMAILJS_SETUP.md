# Configuração do EmailJS para Formulário de Contato

## 📧 Como Configurar o Envio de Emails

O formulário de contato está configurado para enviar emails usando **EmailJS**. Siga os passos abaixo para ativar o envio de emails real.

---

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse: [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **Sign Up** (é gratuito até 200 emails/mês)
3. Confirme seu email

### 2. Adicionar Serviço de Email

1. No dashboard do EmailJS, clique em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Para Gmail:
   - Nome do serviço: "CLACS Contact Form"
   - Email: `geral@clacstecnologia.com`
   - Siga as instruções para autorizar o acesso
5. Copie o **Service ID** (exemplo: `service_abc123`)

### 3. Criar Template de Email

1. Clique em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as seguintes variáveis:

**Subject (Assunto):**
```
Nova Mensagem de {{from_name}} - Site CLACS
```

**Content (Conteúdo):**
```
Nova mensagem recebida do site CLACS Tecnologia:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Empresa: {{company}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site.
```

**To Email:**
```
{{to_email}}
```

4. Salve o template e copie o **Template ID** (exemplo: `template_xyz789`)

### 4. Obter Public Key

1. Vá em **Account** no menu
2. Copie sua **Public Key** (exemplo: `Abc123XyZ_-456`)

### 5. Atualizar o Código

Abra o arquivo `/src/app/components/ContactSection.tsx` e substitua as seguintes linhas (por volta da linha 32-34):

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // Cole seu Service ID aqui
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Cole seu Template ID aqui
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // Cole seu Public Key aqui
```

Por:

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123';  // Seu Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Seu Template ID
const EMAILJS_PUBLIC_KEY = 'Abc123XyZ_-456';   // Seu Public Key
```

---

## ✅ Testar o Formulário

1. Preencha o formulário no site
2. Clique em "Enviar Mensagem"
3. Verifique a caixa de entrada do email `geral@clacstecnologia.com`

---

## 🔧 Solução de Problemas

### Erro 401: Unauthorized
- Verifique se a Public Key está correta
- Certifique-se de que o serviço está ativo no EmailJS

### Erro 400: Bad Request
- Verifique se o Template ID está correto
- Confirme que todas as variáveis do template estão configuradas

### Email não chega
- Verifique a pasta de SPAM
- Confirme que o email de destino está correto no serviço EmailJS
- Verifique os logs no dashboard do EmailJS

---

## 📊 Limites do Plano Gratuito

- ✅ 200 emails/mês
- ✅ Todos os recursos básicos
- ✅ Sem necessidade de cartão de crédito

Se precisar de mais emails, considere o plano pago ($15/mês para 1.000 emails).

---

## 🆘 Suporte

- Documentação EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Suporte EmailJS: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Última atualização:** Abril 2026
