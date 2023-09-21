
function juegoAdivinanza(){
    let nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario:");
    let respuestaCorrecta = "perro";
    let intentos = 3;
    let respuestaUsuario;
    while (intentos > 0) {
        respuestaUsuario = prompt(nombreUsuario+ ', ¿qué animal dice "miau"? (\n1- Gato. \n2 - Perro. \n3 - Leon.)');
        if (respuestaUsuario.toLowerCase() === respuestaCorrecta) {
            alert('¡Correcto, '+nombreUsuario+ '! Es claro que es el perro, porque es un perro bilingüe.');
            break;
        } else {
            intentos--;
            if (intentos > 0) {
                alert('Incorrecto, como va ser un ' +respuestaUsuario+'. Te quedan ' +intentos+ ' intentos.');
            } else {
                alert('¡Agotaste tus intentos! La respuesta correcta era el Perro bilingüe.');
            }
        }
    }

    alert('A ver como te va con la segunda.');

    let intentosMax = 3;
    for (let i = intentosMax; i > 0; i--) {
        respuestaUsuario = prompt(nombreUsuario+ ', ¿qué animal estudio otro idioma? (\n1- Gato. \n2 - Perro. \n3 - Leon.)');
        if (respuestaUsuario.toLowerCase() === respuestaCorrecta) {
            alert('¡Correcto, ' +nombreUsuario+ '! Es claro que el perro fue a la escuela de idiomas.');
            break;
        } else {
            alert('Incorrecto, como va ser un ' +respuestaUsuario+' Te quedan ' + (i-1) + ' intentos.');
        }
    }
}
juegoAdivinanza();
alert('Espero que hayas aprendido algo. Saludos');