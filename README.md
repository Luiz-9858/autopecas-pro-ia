# 🚗 AutoPeças Pro - Sistema com IA

Sistema completo de peças automotivas com assistente virtual integrado usando IA.

## ✨ Funcionalidades

- 📦 Catálogo de peças para carros e caminhões
- 🤖 Chat inteligente com IA (Groq/Llama 3.3)
- 📋 Formulário de orçamento
- 🔍 Filtros por tipo de veículo e categoria
- 💬 Respostas em português

## 🛠️ Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express
- **IA:** Groq API (Llama-3.3-70b-versatile)

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/Luiz-9858/autopecas-pro-ia.git 
cd autopecas-pro-ia
```

2. Instale as dependências:
```bash
npm install
```

3. **Configure a chave API:**
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione sua chave: `GROQ_API_KEY=sua_chave_aqui`
   - 🔑 Obtenha sua chave grátis em: https://console.groq.com/

4. Inicie o servidor:
```bash
npm start
```

5. Acesse: `http://localhost:3000/index.html`

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env` com:
```
GROQ_API_KEY=sua_chave_da_groq_aqui
```

**⚠️ IMPORTANTE:** Nunca compartilhe suas chaves API!

## 📦 Deploy na Vercel

1. Faça fork do repositório
2. Conecte com Vercel
3. Adicione a variável `GROQ_API_KEY` nas configurações

## 📝 Licença

MIT

## 👨‍💻 Autor

Desenvolvido com 💜
```

---

## ✅ **Verificar antes de fazer commit:**

Confira se seu `.gitignore` tem:
```
node_modules/
.env
package-lock.json
.DS_Store
