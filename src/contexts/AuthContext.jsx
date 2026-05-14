import { createContext, useContext, useState } from "react";
import { receitasIniciais } from "../data/recipes.js";

const AuthContext = createContext(null);

const ADMIN_USUARIO = "bolsonaro";
const ADMIN_SENHA = "mito";

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [receitas, setReceitas] = useState(receitasIniciais);

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
      ingredientes: receita.ingredientes
        .split("\n")
        .filter((item) => item.trim() !== "")
    };

    setReceitas((listaAtual) => [novaReceita, ...listaAtual]);
  }

  function removerReceita(id) {
    setReceitas((listaAtual) =>
      listaAtual.filter((receita) => receita.id !== id)
    );
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        receitas,
        login,
        logout,
        adicionarReceita,
        removerReceita
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}