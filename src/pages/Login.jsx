import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const destino = location.state?.from || "/admin";

  function enviarFormulario(event) {
    event.preventDefault();

    const acessoLiberado = login(nome, senha);

    if (acessoLiberado) {
      navigate(destino, { replace: true });
      return;
    }

    setErro("Usuário ou senha incorretos.");
  }

  return (
    <section className="login-page">
      <form className="form-card" onSubmit={enviarFormulario}>
        <span className="tag">Acesso administrativo</span>
        <h1>Login</h1>
        <p>Digite o usuário e a senha do administrador.</p>

        {erro && <div className="error-message">{erro}</div>}

        <label>
          Usuário
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Digite o usuário"
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Digite a senha"
          />
        </label>

        <button className="button" type="submit">
          Entrar
        </button>
      </form>
    </section>
  );
}