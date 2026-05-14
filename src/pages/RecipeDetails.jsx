import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function RecipeDetails() {
  const { id } = useParams();
  const { receitas } = useAuth();
  const receita = receitas.find((item) => String(item.id) === id);

  if (!receita) {
    return (
      <section className="empty-state">
        <h1>Receita não encontrada</h1>
        <p>A receita solicitada não existe ou foi removida.</p>
        <Link className="button" to="/receitas">
          Voltar para receitas
        </Link>
      </section>
    );
  }

  return (
    <section className="details">
      <img src={receita.imagem} alt={receita.titulo} />

      <div className="details-content">
        <span className="tag">{receita.categoria}</span>
        <h1>{receita.titulo}</h1>
        <p className="meta">
          {receita.tempo} · {receita.dificuldade}
        </p>

        <h2>Ingredientes</h2>
        <ul>
          {receita.ingredientes.map((ingrediente, index) => (
            <li key={`${ingrediente}-${index}`}>{ingrediente}</li>
          ))}
        </ul>

        <h2>Modo de preparo</h2>
        <p>{receita.preparo}</p>

        <Link className="button secondary" to="/receitas">
          Voltar
        </Link>
      </div>
    </section>
  );
}