# ChefPro

ChefPro é uma aplicação web desenvolvida em React para visualização e gerenciamento de receitas. O projeto foi criado como uma SPA, ou seja, uma aplicação de página única, utilizando React Router para navegação entre páginas.

## Objetivo do projeto

O objetivo do ChefPro é permitir que usuários visualizem receitas na área pública do site e que administradores possam acessar uma área protegida para cadastrar, listar e remover receitas.

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- CSS
- JavaScript

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Página inicial
- Lista de receitas
- Página de detalhes da receita
- Página de login
- Área administrativa protegida
- Cadastro de nova receita
- Listagem de receitas cadastradas
- Remoção de receitas
- Login e logout simulados
- Redirecionamento para login caso o usuário tente acessar a área administrativa sem autenticação
- Redirecionamento para o painel administrativo após login
- Uso de rotas dinâmicas com `useParams`
- Uso de navegação programática com `useNavigate`
- Uso de contexto global para controle de autenticação e receitas

## Estrutura de pastas

```txt
chefpro
├── index.html
├── package.json
├── README.md
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components
    │   ├── ProtectedRoute.jsx
    │   └── RecipeCard.jsx
    ├── contexts
    │   └── AuthContext.jsx
    ├── data
    │   └── recipes.js
    ├── layouts
    │   ├── AdminLayout.jsx
    │   └── PublicLayout.jsx
    └── pages
        ├── AdminDashboard.jsx
        ├── AdminNewRecipe.jsx
        ├── AdminRecipeList.jsx
        ├── Home.jsx
        ├── Login.jsx
        ├── NotFound.jsx
        ├── RecipeDetails.jsx
        └── Recipes.jsx