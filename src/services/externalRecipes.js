export async function buscarReceitaAleatoria() {
  const resposta = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar a receita externa.");
  }

  const dados = await resposta.json();
  const receita = dados.meals[0];

  return {
    id: receita.idMeal,
    titulo: receita.strMeal,
    categoria: receita.strCategory,
    origem: receita.strArea,
    imagem: receita.strMealThumb,
    instrucoes: receita.strInstructions,
    video: receita.strYoutube
  };
}