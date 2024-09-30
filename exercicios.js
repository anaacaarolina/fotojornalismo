import exercicios from "./exerciciosObject.js";

const imagesBasePath = "assets/";
const charLimit = 500;

function createCards(ids) {
  ids.forEach((id) => {
    const exercicio = exercicios[id - 1];
    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-12";
    const anchor = document.createElement("a");
    anchor.href = "exercicio.html?id=" + id;
    const cardDiv = document.createElement("div");
    cardDiv.className = "card flex-row";
    // image
    const img = document.createElement("img");
    img.src =
      imagesBasePath + "exercicio_" + id + "/" + exercicio.imagens[0].ficheiro;
    img.className = "card-img-left";
    img.alt = exercicio.imagens[0].descricao;
    // body
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.id = "";
    cardTitle.innerText = "Exercício " + id;
    const cardSubtitle = document.createElement("h5");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.id = "card-subtitle";
    cardSubtitle.innerText = exercicio.proposta;
    const cardDateText = document.createElement("p");
    cardDateText.className = "card-date-text";
    cardDateText.innerText = exercicio.data;
    const hr = document.createElement("hr");
    hr.className = "card-hr";
    const cardBodyText = document.createElement("p");
    cardBodyText.className = "card-body-text";
    cardBodyText.innerText = limitChars(exercicio.corpo); //TODO: split by \n and create p elements + limit characters
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardSubtitle);
    cardBodyDiv.appendChild(cardDateText);
    cardBodyDiv.appendChild(hr);
    cardBodyDiv.appendChild(cardBodyText);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
    anchor.appendChild(cardDiv);
    colDiv.appendChild(anchor);
    document.getElementById("exercicios-row-1").appendChild(colDiv);
  });
}

function limitChars(corpo) {
  if (corpo.length <= charLimit) return corpo;

  let limitedCorpo = corpo.slice(0, charLimit);

  // Remove the last word
  limitedCorpo = limitedCorpo.replace(/\s+\S*$/, "...");

  return limitedCorpo;
}

function getIds() {
  const urlParams = new URLSearchParams(window.location.search);
  const ids = urlParams.get("ids");
  if (!ids) return null;
  return ids.split(",").map((id) => parseInt(id, 10));
}

const ids = getIds();
if (ids) createCards(ids);
else createCards(Array.from({ length: exercicios.length }, (_, i) => i + 1));
