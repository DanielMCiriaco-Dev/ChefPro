import { useEffect, useState } from "react";
import ExternalRecipeCard from "../components/ExternalRecipeCard.jsx";
import { buscarReceitaAleatoria } from "../services/externalRecipes.js";

export default function ExternalRecipe() {
  const [receita, setReceita] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarReceita() {
    try {
      setCarregando(true);
      setErro("");

      const dados = await buscarReceitaAleatoria();
      setReceita(dados);
    } catch (error) {
      setErro("Não foi possível carregar a receita externa.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarReceita();
  }, []);

  return (
    <section className="section">
      <div className="section-title">
        <div>
          <span className="tag">Fetch API</span>
          <h1>Sugestão de receita externa</h1>
        </div>

        <button className="button" onClick={carregarReceita}>
          Buscar outra receita
        </button>
      </div>

      {carregando && <p>Carregando receita...</p>}

      {erro && <div className="error-message">{erro}</div>}

      {!carregando && receita && <ExternalRecipeCard receita={receita} />}
    </section>
  );
}