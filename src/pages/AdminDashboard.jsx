import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function AdminDashboard() {
  const { receitas } = useAuth();

  return (
    <section className="admin-page">
      <h1>Painel do administrador</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total de receitas</span>
          <strong>{receitas.length}</strong>
        </div>

        <div className="stat-card">
          <span>Rotas protegidas</span>
          <strong>Ativas</strong>
        </div>

        <div className="stat-card">
          <span>Login simulado</span>
          <strong>Contexto</strong>
        </div>
      </div>

      <div className="admin-actions">
        <Link className="button" to="/admin/nova">
          Cadastrar nova receita
        </Link>
        <Link className="button secondary" to="/admin/lista">
          Gerenciar receitas
        </Link>
      </div>
    </section>
  );
}