document.addEventListener('DOMContentLoaded', (event) => {
    // Evento para cambiar el fondo y color de letras
    const admireDiv = document.getElementById('admireDiv');
    if (admireDiv) {
        admireDiv.addEventListener('mouseover', () => {
            admireDiv.style.backgroundColor = '#f8edaa';
            admireDiv.style.color = '#ad9159';
        });

        admireDiv.addEventListener('mouseout', () => {
            admireDiv.style.backgroundColor = '';
            admireDiv.style.color = '';
        });
    }

    // Evento para la animación
    const animatedDiv = document.getElementById('animatedDiv');
    if (animatedDiv) {
        animatedDiv.addEventListener('mouseover', () => {
            animatedDiv.classList.add('animate');
        });

        animatedDiv.addEventListener('mouseout', () => {
            animatedDiv.classList.remove('animate');
        });
    }

    // Evento para cambiar el label
    const labl = document.querySelector("#labelc");
    const inp = document.querySelector("#inputc");
    const btnc = document.querySelector("#cambio");
    if (btnc) {
        btnc.addEventListener("click", function() {
            labl.textContent = inp.value;
        });
    }

    // Evento para mostrar alerta
    const inpD = document.querySelector("#inputD");
    const btnD = document.querySelector("#btnD");
    if (btnD) {
        btnD.addEventListener("click", function() {
            alert(inpD.value);
        });
    }

    // Evento para cambiar el label automáticamente
    const inputescr = document.querySelector("#inputescr");
    const labelescr = document.querySelector("#labelescr");
    if (inputescr) {
        inputescr.addEventListener("input", function() {
            labelescr.textContent = inputescr.value;
        });
    }

    // Evento para reemplazar texto con imagen
    const textToImageDiv = document.getElementById('textToImageDiv');
    const textContent = document.getElementById('textContent');
    if (textToImageDiv) {
        textToImageDiv.addEventListener('mouseover', () => {
            textContent.innerHTML = '<img src="Messirve.jpg" alt="Imagen de ejemplo" style="width:300px;height:300px;">';
        });

        textToImageDiv.addEventListener('mouseout', () => {
            textContent.innerHTML = 'Son animales bastantes interesantes y que se deben proteger';
        });
    }
});