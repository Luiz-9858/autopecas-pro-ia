<div align="center">

# 🚗 AutoPeças Pro

### Catálogo de Peças Automotivas com IA

[![Deploy](https://img.shields.io/badge/deploy-vercel-black)](https://autopecas-pro-ia.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-MVP-success)](https://github.com/Luiz-9858/autopecas-pro-ia)

**Peças de qualidade para carros e caminhões | Atendimento inteligente com IA**

[🔗 Ver Demo](https://autopecas-pro-ia.vercel.app/) • [📦 Repositório](https://github.com/seu-usuario/seu-repo)

</div>

---

## 📋 Sobre o Projeto

O **AutoPeças Pro** é um catálogo digital moderno de peças automotivas desenvolvido como MVP (Minimum Viable Product) para facilitar a busca e solicitação de peças para carros e caminhões.

O projeto integra tecnologias modernas como **Supabase** para gerenciamento de dados e **Groq AI** para atendimento inteligente via chat, proporcionando uma experiência completa para o usuário.

### 🎯 Objetivo

Criar uma plataforma intuitiva onde clientes possam:

- Buscar peças por tipo de veículo e categoria
- Consultar disponibilidade e preços em tempo real
- Obter recomendações através de IA
- Entrar em contato diretamente via WhatsApp

---

## ✨ Funcionalidades

### 🔍 Catálogo Inteligente

- **Busca por nome:** Encontre peças digitando o nome
- **Filtros avançados:** Por tipo de veículo (carro/caminhão) e categoria
- **Paginação:** Sistema "Carregar Mais" para melhor performance
- **Imagens:** Visualização de cada produto

### 🤖 Assistente Virtual com IA

- Chat integrado com Groq AI (Llama 3.3 70B)
- Respostas curtas e objetivas
- Recomendações personalizadas baseadas no estoque
- Contexto completo do catálogo

### 📱 Contato Direto

- Botão WhatsApp flutuante com animação
- Mensagem pré-configurada
- Link direto para conversa

### 🎨 Interface Moderna

- Design responsivo (mobile-first)
- Cards visuais com imagens
- Informações claras (preço, estoque)
- Ícone personalizado (favicon)

---

## 🖼️ Screenshots

### Tela Principal

![Catálogo](https://i.imgur.com/Jxom7ei.jpeg)

### Busca e Filtros

![Filtros](https://i.imgur.com/MFEFrzy.jpeg)

### Chat com IA

![Chat](https://i.imgur.com/P58QirF.jpeg)

### Mobile

![Mobile](https://i.imgur.com/eldjUZ3.jpeg)

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript (ES6+)** - Lógica e interatividade

### Backend & Serviços

- **Node.js** - Servidor backend
- **Express.js** - Framework web
- **Supabase** - Banco de dados PostgreSQL (BaaS)
- **Groq API** - Inteligência Artificial (Llama 3.3 70B)

### Deployment & Ferramentas

- **Vercel** - Deploy e hospedagem
- **Git/GitHub** - Controle de versão
- **VS Code** - Ambiente de desenvolvimento

### Bibliotecas

- **Font Awesome** - Ícones
- **Supabase JS Client** - SDK do Supabase

---

## 📦 Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase (gratuita)
- Conta no Groq (gratuita)

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/Luiz-9858/autopecas-pro.git
cd autopecas-pro
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
# Supabase
VITE_SUPABASE_URL=sua_url_aqui
VITE_SUPABASE_ANON_KEY=sua_chave_aqui

# Groq API
GROQ_API_KEY=sua_chave_groq_aqui
```

4. **Configure o banco de dados**

No Supabase, crie a tabela `products`:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL,
  price NUMERIC NOT NULL,
  stock INTEGER NOT NULL,
  description TEXT,
  image_url TEXT
);

-- Adicionar política de leitura pública
CREATE POLICY "Enable read access for all users"
ON products FOR SELECT
USING (true);
```

5. **Rode o projeto**

```bash
npm run dev
```

6. **Acesse no navegador**

```
http://localhost:3000
```

---

## 🚧 Desafios e Soluções

Durante o desenvolvimento, enfrentei alguns desafios técnicos interessantes:

### 1. **Integração com Supabase**

**Desafio:** Configurar Row Level Security (RLS) e policies para acesso público aos produtos.

**Solução:** Criei uma policy permissiva para operações SELECT, permitindo leitura pública enquanto mantém segurança para operações de escrita.

### 2. **Gerenciamento de Estado**

**Desafio:** Sincronizar dados do banco com filtros e paginação sem recarregar a página.

**Solução:** Implementei variáveis globais (`produtosGlobais`, `produtosMostrados`) e funções reativas que atualizam a UI instantaneamente.

### 3. **Respostas da IA muito longas**

**Desafio:** O chat retornava respostas extensas que prejudicavam a UX.

**Solução:** Refinei o prompt da IA com instruções explícitas de brevidade (máx 3 linhas) e uso de bullet points.

### 4. **Performance com muitos produtos**

**Desafio:** Renderizar todos os produtos de uma vez sobrecarregava a página.

**Solução:** Implementei paginação "Carregar Mais" com `slice()`, mostrando 12 produtos por vez.

### 5. **Imagens com URLs quebradas**

**Desafio:** Algumas URLs de imagens falhavam, mostrando cards vazios.

**Solução:** Adicionei `onerror` handler com imagem de fallback e validação de URLs no Supabase.

---

## 🎓 Aprendizados

Este projeto me proporcionou experiência prática em:

- ✅ **Integração com APIs REST** (Supabase, Groq)
- ✅ **Manipulação de DOM** e eventos JavaScript
- ✅ **Gerenciamento de estado** em vanilla JS
- ✅ **Trabalho com banco de dados** (PostgreSQL via Supabase)
- ✅ **Prompt engineering** para IA
- ✅ **Deploy contínuo** com Vercel
- ✅ **Versionamento** com Git/GitHub
- ✅ **Debugging** e resolução de problemas

---

## 🚀 Melhorias Futuras

### Curto Prazo

- [ ] Adicionar fotos reais das peças
- [ ] Sistema de ordenação (preço, nome, estoque)
- [ ] Modo escuro/claro
- [ ] Loader animado ao carregar produtos

### Médio Prazo

- [ ] Painel administrativo para gerenciar produtos
- [ ] Sistema de carrinho de compras
- [ ] Integração com WhatsApp Business API
- [ ] Formulário de orçamento com email
- [ ] Sistema de avaliações

### Longo Prazo (Versão PRO)

- [ ] Sistema de autenticação
- [ ] Área do cliente
- [ ] Histórico de pedidos
- [ ] Integração com gateway de pagamento
- [ ] Sistema de entregas
- [ ] App mobile (PWA)

---

## 👤 Autor

**Luiz Fernando**

- GitHub: [@Luiz-9858](https://github.com/Luiz-9858)
- LinkedIn: [luiz-fernand0-silva](www.linkedin.com/in/luiz-fernando-fullstack)
- Email: luizfernandodev16@gmail.com
- Portfolio: [luiz-silva-portfolio.netlify.app](https://luiz-silva-portfolio.netlify.app/)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- [Supabase](https://supabase.com/) - Backend as a Service
- [Groq](https://groq.com/) - Infraestrutura de IA
- [Vercel](https://vercel.com/) - Hospedagem e deploy
- [Font Awesome](https://fontawesome.com/) - Ícones

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela!**

Made with ❤️ and ☕

</div>
