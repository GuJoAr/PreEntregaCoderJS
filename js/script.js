// pregunto el nombre al usuario
function obtenerNombreUsuario() {
    return prompt("Por favor, ingresa tu nombre de usuario:");
}
let nombreUsuario = obtenerNombreUsuario();
// array con respuestas correctas
const respuestasCorrectas = ["perro", "grillo"];
function Adivinanzas(nombreUsuario) {
    let intentos = 3;
    let contadorIntentos = 0;
    let respuestaUsuario;
    // Primera Adivinanza
    while (intentos > 0) {
        respuestaUsuario = prompt(nombreUsuario + ', ¿qué animal dice "miau"? (\n- Gato. \n- Perro. \n- Leon.)');
        // Uso filter para verificar la respuesta del usuario es la correcta
        let respuestasFiltradas = respuestasCorrectas.filter(respuesta => respuestaUsuario.toLowerCase() === respuesta);
        if (respuestasFiltradas.length > 0) {
            alert('¡Correcto, ' + nombreUsuario + '! Es claro que es el perro, porque es un perro bilingüe.');
            break;
        } else {
            intentos--;
            contadorIntentos++;
            if (intentos > 0) {
                alert('Incorrecto, como va ser un ' + respuestaUsuario + '. Te quedan ' + intentos + ' intentos.');
            } else {
                alert('¡Agotaste tus intentos! La respuesta correcta era el Perro bilingüe.');
            }
        }
    }
    alert('Perdiste un total de intentos: ' + contadorIntentos);
    alert('A ver cómo te va con la segunda.');

    // Segunda Adivinanza
    let intentosMax = 3;
    let contadorIntentosMax = 0;
    while (intentosMax > 0) {
        respuestaUsuario = prompt(nombreUsuario + ', ¿qué animal ganaría una pelea entre? (\n- Grillo. \n- Elefante. \n- Tigre.)');
        // Uso filter para verificar la respuesta del usuario es la correcta
        let respuestasFiltradas = respuestasCorrectas.filter(respuesta => respuestaUsuario.toLowerCase() === respuesta);
        if (respuestasFiltradas.length > 0) {
            alert('¡Correcto, ' + nombreUsuario + '! Es claro que es el Grillo porque fue a clases de Karate.');
            break;
        } else {
            intentosMax--;
            contadorIntentosMax++;
            if (intentosMax > 0) {
                alert('Incorrecto, como va ser un ' + respuestaUsuario + ' Te quedan ' + intentosMax + ' intentos.');
            } else {
                alert('¡Agotaste tus intentos! La respuesta correcta era el Grillo porque fue a clases de Karate.');
            }
        }
    }
    alert('Perdiste un total de intentos: ' + contadorIntentosMax);
    //uso math.max para ver en que adivinanza gasto mas intentos
    if (Math.max(contadorIntentos, contadorIntentosMax) === contadorIntentos) {
        alert('La primera adivinanza utilizaste más intentos: ' + contadorIntentos);
    } else (Math.max(contadorIntentosMax, contadorIntentos) === contadorIntentosMax) 
        alert('La segunda adivinanza utilizó más intentos: ' + contadorIntentosMax);
    
}

Adivinanzas(nombreUsuario);
alert('Espero que hayas aprendido algo. Saludos');


