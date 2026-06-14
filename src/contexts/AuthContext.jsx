import { createContext, useContext, useEffect, useState } from "react";
import { receitasIniciais } from "../data/recipes.js";

const AuthContext = createContext(null);

const ADMIN_USUARIO = "admin";
const ADMIN_SENHA = "123456";
const STORAGE_KEY = "chefpro_receitas";

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const [receitas, setReceitas] = useState(() => {
    const receitasSalvas = localStorage.getItem(STORAGE_KEY);

    if (receitasSalvas) {
      return JSON.parse(receitasSalvas);
    }

    return receitasIniciais;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(receitas));
  }, [receitas]);

  function login(nome, senha) {
    if (nome === ADMIN_USUARIO && senha === ADMIN_SENHA) {
      setUsuario({ nome: "Administrador" });
      return true;
    }

    return false;
  }

  function logout() {
    setUsuario(null);
  }

  function adicionarReceita(receita) {
    const novaReceita = {
      ...receita,
      id: Date.now(),
      titulo: receita.titulo.trim(),
      categoria: receita.categoria.trim(),
      tempo: receita.tempo.trim(),
      imagem: receita.imagem.trim(),
      preparo: receita.preparo.trim(),
      ingredientes: receita.ingredientes
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== "")
    };

    setReceitas((listaAtual) => [novaReceita, ...listaAtual]);
  }

  function removerReceita(id) {
    const confirmar = window.confirm("Tem certeza que deseja remover esta receita?");

    if (!confirmar) {
      return;
    }

    setReceitas((listaAtual) =>
      listaAtual.filter((receita) => receita.id !== id)
    );
  }

  function limparReceitas() {
    const confirmar = window.confirm(
      "Tem certeza que deseja apagar todas as receitas cadastradas?"
    );

    if (!confirmar) {
      return;
    }

    setReceitas(receitasIniciais);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        receitas,
        login,
        logout,
        adicionarReceita,
        removerReceita,
        limparReceitas
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}