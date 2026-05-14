import RecipeCard from "../components/RecipeCard.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Recipes() {
  const { receitas } = useAuth();

  return (
    <section className="section">
      <div className="section-title">
        <div>
          <span className="tag">Catálogo</span>
          <h1>Lista de receitas</h1>
        </div>

        <p>{receitas.length} receita(s) cadastrada(s)</p>
      </div>

      <div className="grid">
        {receitas.map((receita) => (
          <RecipeCard key={receita.id} receita={receita} />
        ))}
      </div>
    </section>
  );
}