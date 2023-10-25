import { CardContainer } from "./components/CardContainer.js";
import { Adivinanzas } from "./helpers/data.js";

const nicknameInput = document.querySelector("#nickName");
const welcomeContainer = document.querySelector("#mensaje");
const displayedName = document.querySelector("#displayedName");

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
    let scriptRoot = document.querySelector('#root');
    scriptRoot.append(CardContainer({adivinanzas: Adivinanzas}));
}
