import exercicios from "./exerciciosObject.js";

const numero_da_proposta = new URLSearchParams(window.location.search).get(
  "id"
);

const imagesBasePath = "assets/";

function setProposta() {
  const exercicio = exercicios[numero_da_proposta - 1];

  document.title = "Exercício " + numero_da_proposta;

  document.getElementById(
    "title-section-ex"
  ).style.backgroundImage = `url(${imagesBasePath}exercicio_${numero_da_proposta}/${exercicio.imagens[0].ficheiro})`;
  document.getElementById("numero-exercicio").innerText =
    "Exercício " + numero_da_proposta;
  document.getElementById("enunciado-proposta").innerText = exercicio.proposta;
  document.getElementById("data-publicacao").innerText = exercicio.data;
  document.getElementById("corpo-resposta").innerText = exercicio.corpo;

  //TODO: dynamically create images
  const colMaxSize =
    exercicio.imagens.length === 1 ? 6 : exercicio.imagens.length === 2 ? 5 : 4;

  exercicio.imagens.forEach((imageObj) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-" + colMaxSize;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src =
      imagesBasePath +
      "exercicio_" +
      numero_da_proposta +
      "/" +
      imageObj.ficheiro;
    img.className = "img-fluid";
    img.alt = imageObj.descricao;

    // Create the figcaption element
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = imageObj.descricao;

    // Append the image and figcaption to the figure
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Append the figure to the column div
    colDiv.appendChild(figure);

    document.getElementById("photo-gallery-row").appendChild(colDiv);
  });
}

setProposta();
