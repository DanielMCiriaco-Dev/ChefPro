# ChefPro

ChefPro é uma aplicação web desenvolvida em React para cadastro, consulta e gerenciamento de receitas culinárias.

O projeto foi desenvolvido como uma SPA, ou seja, uma aplicação de página única, utilizando React Router DOM para navegação entre páginas públicas e administrativas. A aplicação também utiliza LocalStorage para armazenar os dados cadastrados, Fetch API para consumir dados externos e Styled Components para estilização de componentes.

## Objetivo do projeto

O objetivo do ChefPro é permitir que usuários visualizem receitas na área pública do site e que administradores possam acessar uma área protegida para cadastrar, listar e remover receitas.

Além disso, o sistema possui uma página de sugestão externa, que consome uma API pública de receitas e exibe uma receita aleatória para o usuário.

## Tecnologias utilizadas

* React
* Vite
* JavaScript
* React Router DOM
* Styled Components
* CSS
* HTML5
* LocalStorage
* Fetch API
* JSON
* Git
* GitHub

## Funcionalidades

O sistema possui as seguintes funcionalidades:

* Página inicial
* Lista de receitas cadastradas
* Página de detalhes da receita
* Página de login
* Área administrativa protegida
* Cadastro de nova receita
* Listagem de receitas cadastradas
* Remoção de receitas
* Confirmação antes de remover receitas
* Restauração das receitas iniciais
* Validação de formulário com JavaScript
* Login e logout simulados
* Redirecionamento para login caso o usuário tente acessar a área administrativa sem autenticação
* Redirecionamento para o painel administrativo após login
* Uso de rotas dinâmicas
* Consumo de API externa com Fetch API
* Armazenamento de receitas no LocalStorage
* Manipulação de dados em JSON
* Responsividade para telas menores

## Login administrativo

Para acessar a área administrativa, utilize:

```txt
Usuário: admin
Senha: 123456
```

## API externa utilizada

O projeto utiliza a API TheMealDB para buscar receitas aleatórias.

Endpoint utilizado:

```txt
https://www.themealdb.com/api/json/v1/1/random.php
```

Essa API retorna dados em formato JSON, que são tratados e exibidos na página de sugestão externa.

Como a TheMealDB é uma API internacional, algumas informações retornadas, como título da receita, ingredientes e modo de preparo, podem aparecer em inglês. No projeto, os rótulos da interface foram mantidos em português, mas parte do conteúdo exibido depende diretamente dos dados fornecidos pela API.

## Como executar o projeto

Primeiro, clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd chefpro
```

Instale as dependências:

```bash
npm install
```

Instale o Styled Components, caso ainda não esteja instalado:

```bash
npm install styled-components
```

Execute o projeto:

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal. Geralmente será:

```txt
http://localhost:5173
```

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
    │   ├── ExternalRecipeCard.jsx
    │   ├── ProtectedRoute.jsx
    │   └── RecipeCard.jsx
    ├── contexts
    │   └── AuthContext.jsx
    ├── data
    │   └── recipes.js
    ├── layouts
    │   ├── AdminLayout.jsx
    │   └── PublicLayout.jsx
    ├── pages
    │   ├── AdminDashboard.jsx
    │   ├── AdminNewRecipe.jsx
    │   ├── AdminRecipeList.jsx
    │   ├── ExternalRecipe.jsx
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── NotFound.jsx
    │   ├── RecipeDetails.jsx
    │   └── Recipes.jsx
    └── services
        └── externalRecipes.js
```

## Principais arquivos do projeto

### `main.jsx`

É o arquivo responsável por iniciar a aplicação React. Nele, o componente principal `App` é renderizado dentro do elemento `root` do HTML.

Também envolve a aplicação com o `BrowserRouter`, permitindo o uso de rotas, e com o `AuthProvider`, permitindo o uso do contexto global.

### `App.jsx`

É o arquivo responsável por organizar as rotas do sistema.

As principais rotas são:

* `/` — página inicial
* `/receitas` — lista de receitas
* `/receita/:id` — detalhes de uma receita específica
* `/sugestao` — sugestão de receita externa
* `/login` — página de login
* `/admin` — painel administrativo
* `/admin/nova` — cadastro de nova receita
* `/admin/lista` — gerenciamento de receitas

### `AuthContext.jsx`

É o contexto global do projeto. Ele armazena e controla:

* usuário logado;
* lista de receitas;
* função de login;
* função de logout;
* função de adicionar receita;
* função de remover receita;
* função de restaurar receitas iniciais.

Também utiliza LocalStorage para salvar as receitas cadastradas no navegador, permitindo que os dados permaneçam armazenados mesmo após atualizar a página.

### `ProtectedRoute.jsx`

É o componente responsável por proteger as rotas administrativas.

Caso o usuário não esteja logado, ele é redirecionado automaticamente para a página de login.

### `RecipeCard.jsx`

É um componente reutilizável usado para exibir as receitas em formato de card.

Ele recebe os dados da receita por meio de props.

### `ExternalRecipeCard.jsx`

É um componente responsável por exibir a receita externa buscada pela API.

Esse componente utiliza Styled Components para aplicar estilização diretamente no componente.

### `externalRecipes.js`

É o arquivo responsável por fazer a requisição externa usando Fetch API.

Ele busca uma receita aleatória na API TheMealDB, manipula os dados em JSON e retorna as informações formatadas para serem exibidas na aplicação.

### `styles.css`

É o arquivo responsável pela estilização geral da aplicação.

Nele estão definidos os estilos do layout público, painel administrativo, cards, formulários, tabelas, botões e responsividade.

## Conceitos aplicados

### HTML5 semântico

O projeto utiliza tags semânticas como:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `form`

Essas tags ajudam a organizar melhor a estrutura da página.

### Box Model, Flexbox e Grid Layout

O CSS do projeto utiliza propriedades relacionadas ao Box Model, como:

* `margin`
* `padding`
* `border`
* `box-sizing`

Também utiliza Flexbox e Grid Layout para organizar os elementos da interface, como cabeçalho, cards, seções, painel administrativo e tabelas.

### Responsividade

O projeto possui Media Queries no arquivo `styles.css`, permitindo que a interface se adapte melhor a telas menores, como celulares e tablets.

### Componentização

A aplicação foi dividida em componentes reutilizáveis, como:

* `RecipeCard`
* `ExternalRecipeCard`
* `ProtectedRoute`
* `PublicLayout`
* `AdminLayout`

Isso torna o código mais organizado e facilita a manutenção.

### Props

O projeto utiliza props para enviar dados de um componente para outro.

Um exemplo é o componente `RecipeCard`, que recebe uma receita e exibe suas informações.

### useState

O hook `useState` é utilizado para controlar estados da aplicação, como:

* dados do formulário;
* usuário logado;
* lista de receitas;
* mensagens de erro;
* carregamento da receita externa.

### useEffect

O hook `useEffect` é utilizado para executar ações em momentos específicos do ciclo de vida dos componentes.

No projeto, ele é usado para:

* salvar receitas no LocalStorage sempre que a lista de receitas for alterada;
* carregar uma receita externa assim que a página de sugestão for aberta.

### React Router DOM

O React Router DOM é utilizado para criar a navegação entre as páginas da aplicação.

O projeto possui rotas públicas, rotas protegidas e rotas dinâmicas.

### LocalStorage

O LocalStorage é utilizado para armazenar as receitas cadastradas no navegador.

Assim, mesmo que o usuário atualize a página, as receitas cadastradas continuam salvas.

### Fetch API

A Fetch API é utilizada para consumir dados de uma API externa.

No projeto, ela busca uma receita aleatória na API TheMealDB e exibe os dados para o usuário.

### JSON

O projeto manipula dados em formato JSON tanto no LocalStorage quanto na requisição externa feita com Fetch API.

### Styled Components

O projeto utiliza Styled Components no componente `ExternalRecipeCard.jsx`.

Essa biblioteca permite criar componentes estilizados dentro do próprio JavaScript, facilitando a organização da interface e a reutilização de estilos.

### Validação de formulário

O cadastro de receitas possui validação feita com JavaScript.

O sistema verifica, por exemplo:

* se o título foi preenchido corretamente;
* se a categoria foi preenchida corretamente;
* se o tempo de preparo foi informado;
* se a URL da imagem foi preenchida;
* se os ingredientes foram informados;
* se o modo de preparo possui uma descrição adequada.

## Descrição das páginas

### Página inicial

Apresenta o nome do sistema, uma breve descrição e botões para acessar a lista de receitas, a sugestão externa e o login administrativo.

Também exibe algumas receitas em destaque.

### Lista de receitas

Exibe todas as receitas cadastradas no sistema.

Cada receita aparece em formato de card com imagem, categoria, título, tempo, dificuldade e botão para visualizar os detalhes.

### Detalhes da receita

Exibe as informações completas de uma receita, incluindo:

* imagem;
* categoria;
* título;
* tempo de preparo;
* dificuldade;
* ingredientes;
* modo de preparo.

### Login

Permite o acesso do administrador ao painel administrativo.

O login é simulado e utiliza usuário e senha definidos no código.

### Painel administrativo

Exibe informações gerais do sistema, como total de receitas cadastradas e status das rotas protegidas.

Também possui botões para cadastrar nova receita e gerenciar receitas existentes.

### Cadastro de nova receita

Permite cadastrar uma nova receita por meio de formulário.

Os dados cadastrados são salvos no estado global e também no LocalStorage.

### Lista administrativa de receitas

Permite visualizar, acessar e remover receitas cadastradas.

Também possui a opção de restaurar as receitas iniciais.

### Sugestão externa

Exibe uma receita aleatória buscada em uma API externa.

A página utiliza Fetch API, JSON, useEffect, useState e componente com props.

## Boas práticas utilizadas

O projeto aplica boas práticas como:

* separação de responsabilidades;
* organização por pastas;
* uso de componentes reutilizáveis;
* uso de contexto global;
* rotas protegidas;
* validação de formulários;
* armazenamento local;
* consumo de API externa;
* README com instruções de instalação e execução;
* código versionado com Git e GitHub.

## Conclusão

O ChefPro é uma aplicação web desenvolvida com React que permite cadastrar, consultar, listar e remover receitas. O sistema utiliza conceitos importantes de desenvolvimento front-end, como componentização, rotas, estados, efeitos, formulários, validação, LocalStorage, Fetch API, JSON, responsividade e Styled Components.

Com isso, o projeto atende aos principais requisitos da atividade, demonstrando a construção de uma aplicação web funcional, organizada e interativa.
