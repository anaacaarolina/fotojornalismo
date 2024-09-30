import exercicios from "./exerciciosObject.js";

let results = [];

let debounceTimer;
const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

const search = document.getElementById("search");
search.addEventListener("input", (e) => {
  e.preventDefault();
  const query = e.target.value;
  debounce(() => handleSearchPosts(query), 500);
});

search.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();
  handleSearchPosts(e.target.value);

  const resultsQueryString =
    results.length === 0 ? "" : "?ids=" + results.join(",");

  window.location.href = "exercicios.html" + resultsQueryString;
});

function handleSearchPosts(query) {
  results = [];
  const searchQuery = query.trim().toLowerCase();

  exercicios.forEach((exercicio) => {
    let found = false;

    if (exercicio.proposta.toLowerCase().includes(searchQuery)) found = true;
    if (exercicio.data.toLowerCase().includes(searchQuery)) found = true;
    if (exercicio.corpo.toLowerCase().includes(searchQuery)) found = true;

    exercicio.imagens.forEach((imagem) => {
      if (imagem.descricao.toLowerCase().includes(searchQuery)) found = true;
    });

    if (found) results.push(exercicio.id);
  });
}
