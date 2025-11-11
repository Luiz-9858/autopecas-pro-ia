# 🚗 AutoPeças Pro - Sistema com IA

![Status](https://img.shields.io/badge/status-online-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Sistema completo de peças automotivas com assistente virtual integrado usando Inteligência Artificial.

## 🌐 Demo Online

**🔗 [https://autopecas-pro-ia.vercel.app](https://autopecas-pro-ia.vercel.app)**

---

## ✨ Funcionalidades

- 📦 **Catálogo de Peças** - Navegação intuitiva com filtros por tipo de veículo e categoria
- 🤖 **Chat com IA** - Assistente virtual inteligente usando Groq API (Llama 3.3)
- 📋 **Formulário de Orçamento** - Solicitação de orçamentos em tempo real
- 🔍 **Filtros Avançados** - Busca por Carro/Caminhão e categorias (Motor, Freios, Suspensão, Elétrica)
- 💬 **Respostas em Português** - IA treinada para atender em português brasileiro
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Deploy Automático** - Integração contínua com Vercel

---

## 🛠️ Tecnologias

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

### IA e APIs

![Groq](https://img.shields.io/badge/Groq_API-FF6B6B?style=for-the-badge)
![Llama](https://img.shields.io/badge/Llama_3.3-8B5CF6?style=for-the-badge)

### Deploy e Ferramentas

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js v20.x ou superior
- npm ou yarn
- Conta na Groq (para chave API gratuita)

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/Luiz-9858/autopecas-pro-ia.git
cd autopecas-pro-ia
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto:

```env
GROQ_API_KEY=sua_chave_da_groq_aqui
```

> 🔑 **Como obter a chave da Groq:**
>
> 1. Acesse: [https://console.groq.com/](https://console.groq.com/)
> 2. Faça login ou crie uma conta gratuita
> 3. Vá em "API Keys"
> 4. Crie uma nova chave
> 5. Copie e cole no arquivo `.env`

4. **Inicie o servidor:**

```bash
npm start
```

5. **Acesse no navegador:**

```
http://localhost:3000
```

---

## 🌐 Deploy na Vercel

### Opção 1: Deploy Automático (Recomendado)

1. Faça fork deste repositório
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe o repositório `autopecas-pro-ia`
5. Configure a variável de ambiente:
   - **Key:** `GROQ_API_KEY`
   - **Value:** sua chave da Groq
6. Clique em "Deploy"

### Opção 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Durante o deploy, configure:

- **GROQ_API_KEY:** sua chave da Groq

---

## 📂 Estrutura do Projeto

```
autopecas-pro-ia/
├── api/
│   └── chat.js              # Serverless Function (API da IA)
├── node_modules/            # Dependências (ignorado no git)
├── .env                     # Variáveis de ambiente (ignorado no git)
├── .gitignore               # Arquivos ignorados pelo Git
├── index.html               # Frontend (HTML + CSS + JS inline)
├── package.json             # Dependências e scripts npm
├── package-lock.json        # Lock de versões
├── README.md                # Este arquivo
├── script.js                # JavaScript (referência/backup)
├── server.js                # Servidor Node.js local
├── style.css                # CSS (referência/backup)
└── vercel.json              # Configuração da Vercel
```

---

## 🔐 Segurança

- ✅ Chaves API armazenadas em variáveis de ambiente
- ✅ Arquivo `.env` no `.gitignore` (nunca commitado)
- ✅ CORS configurado corretamente
- ✅ Validação de entrada no backend
- ✅ Rate limiting da Groq API
- ✅ Proteção contra injeção de código

---

## 💾 Banco de Dados (Em Memória)

Atualmente, o sistema usa dados mockados em memória com:

- 12 produtos (6 para carros, 6 para caminhões)
- Categorias: Motor, Freios, Suspensão, Elétrica
- Orçamentos salvos na sessão do navegador

### Produtos Disponíveis:

- **Carros:** Pastilha de Freio, Disco de Freio, Amortecedor, Bateria 60Ah, Alternador, Filtro de Óleo, Vela de Ignição
- **Caminhões:** Pastilha de Freio, Disco de Freio, Bateria 150Ah, Filtro de Ar, Amortecedor de Cabine

---

## 🎨 Personalização

### Trocar Cores

Edite o gradiente no `index.html`:

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adicionar Produtos

Edite o array `database.products` no script:

```javascript
const database = {
  products: [
    {
      id: 13,
      name: "Novo Produto",
      category: "motor",
      type: "carro",
      price: 199.9,
      stock: 10,
    },
  ],
};
```

### Customizar IA

Edite o prompt em `api/chat.js`:

```javascript
content: `Você é um assistente especializado em peças automotivas...`;
```

---

## 🚧 Roadmap - Próximas Melhorias

### Fase 1 - Infraestrutura

- [ ] Integração com PostgreSQL para persistência de dados
- [ ] Sistema de envio de emails real (SendGrid/Mailgun)
- [ ] Logs estruturados e monitoramento

### Fase 2 - Funcionalidades

- [ ] Sistema de autenticação (login/registro)
- [ ] Dashboard administrativo
- [ ] CRUD completo de produtos
- [ ] Gerenciamento de orçamentos
- [ ] Substituir emojis por Font Awesome

### Fase 3 - E-commerce (Opcional)

- [ ] Carrinho de compras
- [ ] Sistema de pagamentos (Stripe/Mercado Pago)
- [ ] Rastreamento de pedidos
- [ ] Avaliações de produtos

---

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Se encontrar algum bug, abra uma [issue](https://github.com/Luiz-9858/autopecas-pro-ia/issues).

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Fernando da Silva**

- GitHub: [@Luiz-9858](https://github.com/Luiz-9858)
- Email: susananarcisio@gmail.com

---

## 🙏 Agradecimentos

- [Groq](https://groq.com/) - API de IA gratuita e rápida
- [Vercel](https://vercel.com/) - Plataforma de deploy
- [Anthropic](https://anthropic.com/) - Assistência no desenvolvimento com Claude

---

## 📊 Status do Projeto

```
✅ MVP Completo e Funcional
✅ Deploy em Produção
🚧 Melhorias em Planejamento
```

---

**⭐ Se este projeto te ajudou, deixe uma estrela no GitHub!**

**🔗 [Ver Projeto Online](https://autopecas-pro-ia.vercel.app)**
