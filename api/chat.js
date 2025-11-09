const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = async (req, res) => {
  // Habilita CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

    return res.status(200).json({
      content: [{ text: aiResponse }],
    });
  } catch (error) {
    console.error("❌ Erro:", error.message);
    return res.status(500).json({
      error: "Erro ao processar mensagem",
      details: error.message,
    });
  }
};
