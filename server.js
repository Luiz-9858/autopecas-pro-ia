require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(".")); // Serve arquivos estáticos (HTML, CSS, JS)

// IMPORTANTE: Coloque sua chave API da Groq aqui
const apiKey = process.env.GROQ_API_KEY;
if (!apiKey) {
  console.error("Missing GROQ_API_KEY environment variable.");
  process.exit(1); // stop the server early so you don't run without a key
}

const groq = new Groq({ apiKey });

// Rota para o chat da IA
app.post("/api/chat", async (req, res) => {
  try {
    const { message, products } = req.body;

    console.log("📩 Recebida mensagem:", message);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Você é um assistente de uma loja de peças automotivas. O cliente perguntou: "${message}". 
                    
Temos as seguintes peças em estoque: ${JSON.stringify(products)}

Responda de forma amigável, técnica e útil em português. Se o cliente perguntar sobre uma peça específica, sugira opções do nosso estoque.`,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiResponse = chatCompletion.choices[0].message.content;

    console.log("✅ Resposta recebida da IA");

    res.json({
      content: [{ text: aiResponse }],
    });
  } catch (error) {
    console.error("❌ Erro no servidor:", error.message);
    res.status(500).json({
      error: "Erro ao processar mensagem",
      details: error.message,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("🚀 Servidor rodando em http://localhost:" + PORT);
  console.log("📦 Acesse: http://localhost:" + PORT + "/index.html");
  console.log("🔑 Groq API configurada!");
});
