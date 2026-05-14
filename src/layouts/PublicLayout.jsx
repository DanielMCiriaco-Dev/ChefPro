import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function PublicLayout() {
  const { usuario, logout } = useAuth();

  return (
    <div className="site">
      <header className="public-header">
        <Link to="/" className="logo">
          ChefPro
        </Link>

        <nav>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/receitas">Receitas</NavLink>
          <NavLink to="/admin">Admin</NavLink>

          {usuario ? (
            <button className="link-button" onClick={logout}>
              Sair
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>

      <main className="public-main">
        <Outlet />
      </main>
    </div>
  );
}