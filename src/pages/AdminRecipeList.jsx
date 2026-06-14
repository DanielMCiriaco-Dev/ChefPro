import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function AdminRecipeList() {
  const { receitas, removerReceita, limparReceitas } = useAuth();

  return (
    <section className="admin-page">
      <div className="section-title compact">
        <h1>Receitas cadastradas</h1>

        <div className="admin-actions">
          <button className="button secondary" onClick={limparReceitas}>
            Restaurar receitas iniciais
          </button>

          <Link className="button" to="/admin/nova">
            Nova receita
          </Link>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Categoria</th>
              <th>Tempo</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {receitas.map((receita) => (
              <tr key={receita.id}>
                <td>{receita.id}</td>
                <td>{receita.titulo}</td>
                <td>{receita.categoria}</td>
                <td>{receita.tempo}</td>
                <td>
                  <Link className="small-link" to={`/receita/${receita.id}`}>
                    Ver
                  </Link>

                  <button
                    className="small-danger"
                    onClick={() => removerReceita(receita.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {receitas.length === 0 && (
          <p className="empty-table">Nenhuma receita cadastrada.</p>
        )}
      </div>
    </section>
  );
}