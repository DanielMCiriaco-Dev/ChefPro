import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { usuario, logout } = useAuth();

  function sair() {
    logout();
    navigate("/login");
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <h2>ChefPro</h2>
        <p>Painel administrativo</p>

        <nav>
          <NavLink end to="/admin">
            Painel
          </NavLink>
          <NavLink to="/admin/nova">Nova receita</NavLink>
          <NavLink to="/admin/lista">Lista de receitas</NavLink>
          <NavLink to="/receitas">Área pública</NavLink>
        </nav>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <strong>Olá, {usuario?.nome}</strong>
            <span>Gerencie as receitas do site</span>
          </div>

          <button className="button danger" onClick={sair}>
            Logout
          </button>
        </header>

        <main className="admin-main">
          <Outlet />
        </main>
      </section>
    </div>
  );
}