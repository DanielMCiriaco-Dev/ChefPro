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
  const [erro, setErro] = useState("");
  const { adicionarReceita } = useAuth();
  const navigate = useNavigate();

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setFormulario((estadoAtual) => ({ ...estadoAtual, [name]: value }));
  }

  function validarFormulario() {
    if (formulario.titulo.trim().length < 3) {
      return "O título precisa ter pelo menos 3 caracteres.";
    }

    if (formulario.categoria.trim().length < 3) {
      return "A categoria precisa ter pelo menos 3 caracteres.";
    }

    if (formulario.tempo.trim().length < 3) {
      return "Informe corretamente o tempo de preparo.";
    }

    if (!formulario.imagem.trim().startsWith("http")) {
      return "A imagem precisa ser uma URL válida, começando com http ou https.";
    }

    if (formulario.ingredientes.trim().length < 5) {
      return "Informe pelo menos um ingrediente.";
    }

    if (formulario.preparo.trim().length < 10) {
      return "O modo de preparo precisa ter pelo menos 10 caracteres.";
    }

    return "";
  }

  function salvarReceita(event) {
    event.preventDefault();

    const mensagemErro = validarFormulario();

    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    adicionarReceita(formulario);
    setFormulario(estadoInicial);
    setErro("");
    navigate("/admin/lista");
  }

  return (
    <section className="admin-page">
      <h1>Nova receita</h1>

      <form className="admin-form" onSubmit={salvarReceita}>
        {erro && <div className="error-message">{erro}</div>}

        <label>
          Título
          <input
            name="titulo"
            value={formulario.titulo}
            onChange={atualizarCampo}
            placeholder="Ex: Bolo de cenoura"
            required
          />
        </label>

        <label>
          Categoria
          <input
            name="categoria"
            value={formulario.categoria}
            onChange={atualizarCampo}
            placeholder="Ex: Sobremesa"
            required
          />
        </label>

        <label>
          Tempo de preparo
          <input
            name="tempo"
            value={formulario.tempo}
            onChange={atualizarCampo}
            placeholder="Ex: 40 minutos"
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
            placeholder="Cole a URL da imagem"
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
            placeholder="Digite um ingrediente por linha"
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
            placeholder="Descreva o modo de preparo da receita"
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