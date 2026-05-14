import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const estadoInicial = {
  titulo: "",
  categoria: "",
  tempo: "",
  dificuldade: "Fácil",
  imagem:
    "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1200&q=80",
  ingredientes: "",
  preparo: ""
};

export default function AdminNewRecipe() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const { adicionarReceita } = useAuth();
  const navigate = useNavigate();

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setFormulario((estadoAtual) => ({ ...estadoAtual, [name]: value }));
  }

  function salvarReceita(event) {
    event.preventDefault();
    adicionarReceita(formulario);
    setFormulario(estadoInicial);
    navigate("/admin/lista");
  }

  return (
    <section className="admin-page">
      <h1>Nova receita</h1>

      <form className="admin-form" onSubmit={salvarReceita}>
        <label>
          Título
          <input
            name="titulo"
            value={formulario.titulo}
            onChange={atualizarCampo}
            required
          />
        </label>

        <label>
          Categoria
          <input
            name="categoria"
            value={formulario.categoria}
            onChange={atualizarCampo}
            required
          />
        </label>

        <label>
          Tempo de preparo
          <input
            name="tempo"
            value={formulario.tempo}
            onChange={atualizarCampo}
            required
          />
        </label>

        <label>
          Dificuldade
          <select
            name="dificuldade"
            value={formulario.dificuldade}
            onChange={atualizarCampo}
          >
            <option>Fácil</option>
            <option>Média</option>
            <option>Difícil</option>
          </select>
        </label>

        <label>
          Imagem
          <input
            name="imagem"
            value={formulario.imagem}
            onChange={atualizarCampo}
            required
          />
        </label>

        <label>
          Ingredientes
          <textarea
            name="ingredientes"
            value={formulario.ingredientes}
            onChange={atualizarCampo}
            rows="6"
            required
          />
        </label>

        <label>
          Modo de preparo
          <textarea
            name="preparo"
            value={formulario.preparo}
            onChange={atualizarCampo}
            rows="6"
            required
          />
        </label>

        <button className="button" type="submit">
          Salvar receita
        </button>
      </form>
    </section>
  );
}