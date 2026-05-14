import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="empty-state">
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não corresponde a nenhuma rota do ChefPro.</p>

      <Link className="button" to="/">
        Voltar para o início
      </Link>
    </section>
  );
}