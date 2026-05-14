import { Link } from "react-router-dom";

export default function RecipeCard({ receita }) {
  return (
    <article className="card receita-card">
      <img src={receita.imagem} alt={receita.titulo} />

      <div className="card-content">
        <span className="tag">{receita.categoria}</span>
        <h3>{receita.titulo}</h3>
        <p>
          {receita.tempo} · {receita.dificuldade}
        </p>

        <Link className="button secondary" to={`/receita/${receita.id}`}>
          Ver receita
        </Link>
      </div>
    </article>
  );
}