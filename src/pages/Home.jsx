import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Home() {
  const { receitas } = useAuth();
  const destaques = receitas.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div>
          <span className="tag">Receitas simples e saborosas</span>
          <h1>Organize, visualize e gerencie receitas em um só lugar.</h1>
          <p>
            ChefPro permite o usuário adicionar e ver receitas de outros usuários.
          </p>

          <div className="actions">
            <Link className="button" to="/receitas">
              Ver receitas
            </Link>
            <Link className="button secondary" to="/login">
              Entrar como administrador
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Receitas em destaque</h2>
          <Link to="/receitas">Ver todas</Link>
        </div>

        <div className="grid">
          {destaques.map((receita) => (
            <RecipeCard key={receita.id} receita={receita} />
          ))}
        </div>
      </section>
    </>
  );
}