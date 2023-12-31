import { showNotification } from "../helpers/showNotification.js";

export const Card = (props) => {
    let { question, options0, options1, options2, img0, img1, img2, img3, answer, name0, name1, name2, name3, answerImg, } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'opciones');
    // Contador de intentos
    let intentos = 3; 
    let intentosElement = document.createElement('p');
    intentosElement.textContent = `Intentos: ${intentos}`;
    // Contador de respuestas correctas
    let answerCorrect = 0; 
    let correct = document.createElement('p');
    correct.textContent = `Correctas: ${answerCorrect}`;
    // Contador de respuestas incorrectas
    let answerIncorrect = 0; 
    let incorrect = document.createElement('p');
    incorrect.textContent = `Incorrectas: ${answerIncorrect}`;

    const verificarRespuesta = (opcionSeleccionada) => {
        if (intentos === 0) {
            return;
        }
        if (opcionSeleccionada === answer) {
            answerCorrect++;
            correct.textContent = `Correctas: ${answerCorrect}`;
            // Ocultar las imágenes img1, img2 y img3
            div.querySelectorAll('img').forEach((img, index) => {
                if (index !== 0) {
                    img.style.display = 'none';
                }
            });
            // muestra la imagen img0 cuando la respuesta es correcta
            div.querySelector('img').style.display = 'inline';
            // Deshabilita los botones de las opciones
            div.querySelectorAll('button').forEach(button => {
                button.disabled = true;
            });
            // Mostrar un mensaje de respuesta correcta con toastify
            showNotification(`Correcto porque es un ${answerImg}`, 'success');
        } else {
            answerIncorrect++;
            incorrect.textContent = `Incorrectas: ${answerIncorrect}`;
            intentos--;
            intentosElement.textContent = `Intentos: ${intentos}`;
            // Mostrar un mensaje de respuesta incorrecta con toastify
            showNotification('Incorrecto, como no te vas a dar cuenta', 'error');
            if (intentos === 0) {
                // Si se agotaron los 3 intentos incorrectos, deshabilita las opciones
                div.querySelectorAll('button').forEach(button => {
                    button.disabled = true;
                });
            }
        }
        if (intentos === 0 || answerCorrect === 3) {
            // Si se agotaron los intentos o se respondieron 3 preguntas correctamente el juego termina
            intentos = 0;
        }
    };

    div.innerHTML = `
        <div class="card-body">
            <h2><span>${question}</span></h2>
            <h3><button>${options0}</button></h3>
            <h3><button>${options1}</button></h3>
            <h3><button>${options2}</button></h3>
            <img src="${img0}" alt="imagen de ${name0}" style="display: none;">
            <img src="${img1}" alt="imagen de ${name1}">
            <img src="${img2}" alt="imagen de ${name2}">
            <img src="${img3}" alt="imagen de ${name3}">
        </div>
    `;

    div.appendChild(intentosElement);
    div.appendChild(correct);
    div.appendChild(incorrect);

    // Agregar un manejador de eventos a los botones de opciones
    div.querySelectorAll('button').forEach((button, index) => {
        button.addEventListener('click', () => {
            verificarRespuesta(String.fromCharCode(97 + index));
        });
    });

    return div;
};
