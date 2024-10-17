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
  document.getElementById("corpo-resposta").innerHTML = exercicio.corpo;

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
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#exampleModal");

    img.addEventListener("click", () => {
      const modalImg = document.getElementById("modal-img");
      const modalFooter = document.getElementById("modal-footer");
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalFooter.innerText = img.alt;
    });

    const modalDiv = document.createElement("div");
    modalDiv.className = "modal fade";
    modalDiv.id = "exampleModal";
    modalDiv.tabIndex = -1;
    modalDiv.setAttribute("aria-labelledby", "exampleModalLabel");
    modalDiv.setAttribute("aria-hidden", "true");

    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.style.textAlign = "center";

    const imgModal = document.createElement("img");
    imgModal.id = "modal-img";
    imgModal.className = "img-fluid";

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalBody.style.textAlign = "center";
    modalFooter.innerText = imageObj.descricao;

    // Create the figcaption element
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = imageObj.descricao;

    modalBody.appendChild(imgModal);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modalDiv.appendChild(modalDialog);
    document.body.appendChild(modalDiv);

    // Append the image and figcaption to the figure
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Append the figure to the column div
    colDiv.appendChild(figure);

    document.getElementById("photo-gallery-row").appendChild(colDiv);
  });
}

setProposta();
