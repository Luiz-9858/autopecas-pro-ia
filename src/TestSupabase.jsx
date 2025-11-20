import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function TestSupabase() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Erro ao buscar produtos:", error);
    } else {
      console.log("Produtos encontrados:", data);
      setProdutos(data);
    }
    setLoading(false);
  }

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h2>Produtos do Supabase</h2>
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <h3>{produto.name}</h3>
          <p>
            <strong>Categoria:</strong> {produto.category}
          </p>
          <p>
            <strong>Tipo:</strong> {produto.type}
          </p>
          <p>
            <strong>Preço:</strong> R$ {produto.price}
          </p>
          <p>
            <strong>Estoque:</strong> {produto.stock}
          </p>
          <p>
            <strong>Descrição:</strong> {produto.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TestSupabase;
