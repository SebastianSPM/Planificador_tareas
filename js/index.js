const botonesVer = document.querySelectorAll('[data-bs-toggle="modal"]');
const btnCompletada = document.querySelectorAll(".btn-completar");
let tareaSeleccionada = null;

botonesVer.forEach(boton => {
    boton.addEventListener("click", (event) => {
        const card = event.currentTarget.closest(".card");
        tareaSeleccionada = card.dataset.id;
    });
});

btnCompletada.forEach(boton => {
    boton.addEventListener("click", () => {
        const fondoCard = document.querySelector(`.card[data-id="${tareaSeleccionada}"] .card-body`);
        if (boton.textContent.trim() === "Completar") {
            boton.textContent = "Completada";
            fondoCard.style.backgroundColor = "#d1e7dd";
        } else {
            boton.textContent = "Completar";
            fondoCard.style.backgroundColor = "";
        }
    });
});