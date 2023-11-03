import { CardContainer } from "./components/CardContainer.js";

const nicknameInput = document.querySelector("#nickName");
const welcomeContainer = document.querySelector("#mensaje");
const displayedName = document.querySelector("#displayedName");

// Recupera el nombre de usuario del Local Storage (si existe)
const storedNickname = localStorage.getItem("nickname");
if (storedNickname) {
    displayedName.textContent = storedNickname;
    welcomeContainer.classList.remove("hidden");
}

// Agrega un evento al botón para mostrar el mensaje de bienvenida
document.querySelector("#submitButton").addEventListener("click", function() {
    const nickname = nicknameInput.value; // Obtiene el nombre de usuario ingresado
    if (nickname) {
        // Verifica si se ingresó un nombre
        displayedName.textContent = nickname; // Muestra el nombre en el párrafo
        welcomeContainer.classList.remove("hidden"); // Muestra el mensaje de bienvenida
        // Guarda el nick en el Local Storage
        localStorage.setItem("nickname", nickname);
    }
});

export const script = () => {
    function getData() {
        return fetch('./js/data.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Hubo problemas para obtener los datos');
                }
                return res.json();
            });
    }
    // llama a getData para obtener los datos y luego crea el CardContainer
    getData()
        .then(data => {
            let scriptRoot = document.querySelector('#root');
            scriptRoot.append(CardContainer({ adivinanzas: data }));
        });
}
