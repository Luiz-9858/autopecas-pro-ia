const database = {
  products: [
    {
      id: 1,
      name: "Pastilha de Freio Dianteira",
      category: "freios",
      type: "carro",
      price: 89.9,
      stock: 15,
    },
    {
      id: 2,
      name: "Disco de Freio Ventilado",
      category: "freios",
      type: "carro",
      price: 159.9,
      stock: 8,
    },
    {
      id: 3,
      name: "Amortecedor Traseiro",
      category: "suspensao",
      type: "carro",
      price: 249.9,
      stock: 12,
    },
    {
      id: 4,
      name: "Bateria 60Ah",
      category: "eletrica",
      type: "carro",
      price: 389.9,
      stock: 20,
    },
    {
      id: 5,
      name: "Alternador 90A",
      category: "eletrica",
      type: "carro",
      price: 459.9,
      stock: 6,
    },
    {
      id: 6,
      name: "Filtro de Óleo Motor",
      category: "motor",
      type: "carro",
      price: 29.9,
      stock: 50,
    },
    {
      id: 7,
      name: "Vela de Ignição (jogo)",
      category: "motor",
      type: "carro",
      price: 79.9,
      stock: 30,
    },
    {
      id: 8,
      name: "Pastilha Freio Caminhão",
      category: "freios",
      type: "caminhao",
      price: 189.9,
      stock: 10,
    },
    {
      id: 9,
      name: "Disco Freio Caminhão",
      category: "freios",
      type: "caminhao",
      price: 359.9,
      stock: 5,
    },
    {
      id: 10,
      name: "Bateria 150Ah Caminhão",
      category: "eletrica",
      type: "caminhao",
      price: 789.9,
      stock: 8,
    },
    {
      id: 11,
      name: "Filtro Ar Motor Caminhão",
      category: "motor",
      type: "caminhao",
      price: 119.9,
      stock: 15,
    },
    {
      id: 12,
      name: "Amortecedor Cabine",
      category: "suspensao",
      type: "caminhao",
      price: 449.9,
      stock: 7,
    },
  ],
  quotes: [],
};

function displayProducts(products) {
  const container = document.getElementById("productsContainer");

  if (products.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; color:#666;">Nenhuma peça encontrada.</p>';
    return;
  }

  container.innerHTML = products
    .map(
      (product) => `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <div class="price">R$ ${product.price.toFixed(2)}</div>
                    <div class="stock">Em estoque: ${product.stock}</div>
                    <button onclick="addToQuote('${
                      product.name
                    }')" style="margin-top:10px; padding:8px 15px; font-size:0.9em;">
                        Solicitar
                    </button>
                </div>
            `
    )
    .join("");
}

function filterProducts() {
  const vehicleType = document.getElementById("vehicleType").value;
  const category = document.getElementById("category").value;

  let filtered = database.products;

  if (vehicleType) {
    filtered = filtered.filter((p) => p.type === vehicleType);
  }

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  displayProducts(filtered);
}

function addToQuote(productName) {
  const partsField = document.getElementById("parts");
  const currentValue = partsField.value;
  partsField.value = currentValue
    ? `${currentValue}, ${productName}`
    : productName;
  partsField.focus();
}

// ========================================
// CHAT COM IA - AGORA USA O BACKEND
// ========================================
async function sendMessage() {
  const input = document.getElementById("chatInput");
  const messagesDiv = document.getElementById("chatMessages");
  const sendBtn = document.getElementById("sendBtn");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Desabilita botão e input
  sendBtn.disabled = true;
  input.disabled = true;

  // Adiciona mensagem do usuário
  messagesDiv.innerHTML += `
                <div class="message user">${userMessage}</div>
            `;

  input.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Mostra loading
  const loadingId = "loading-" + Date.now();
  messagesDiv.innerHTML += `
                <div class="message ai loading" id="${loadingId}">Pensando... 🤔</div>
            `;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  try {
    // CHAMADA AO BACKEND LOCAL
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        products: database.products.map((p) => ({
          name: p.name,
          price: p.price,
          type: p.type,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error("Erro na comunicação com o servidor");
    }

    const data = await response.json();
    const aiResponse = data.content[0].text;

    // Remove loading
    document.getElementById(loadingId)?.remove();

    // Adiciona resposta da IA
    messagesDiv.innerHTML += `
                    <div class="message ai">${aiResponse}</div>
                `;
  } catch (error) {
    console.error("Erro:", error);

    document.getElementById(loadingId)?.remove();

    messagesDiv.innerHTML += `
                    <div class="message ai error">
                        ❌ Erro ao processar mensagem. Verifique se o servidor está rodando em http://localhost:3000
                    </div>
                `;
  } finally {
    // Reabilita botão e input
    sendBtn.disabled = false;
    input.disabled = false;
    input.focus();
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

function submitQuote(event) {
  event.preventDefault();

  const quoteData = {
    id: Date.now(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    vehicle: document.getElementById("vehicle").value,
    parts: document.getElementById("parts").value,
    date: new Date().toISOString(),
  };

  database.quotes.push(quoteData);

  document.getElementById("successMessage").style.display = "block";
  document.getElementById("quoteForm").reset();

  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 5000);

  console.log("Orçamentos salvos:", database.quotes);
}

displayProducts(database.products);
