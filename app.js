// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //Array para almacenar los amigos

//Función para agregar amigos
function agregarAmigo() {
    let amigosUsuario = document.getElementById('amigo').value; // Obtener el nombre del amigo
    if (amigosUsuario === "") {
        alert('Debes ingresar un nombre');
    } else {
        amigos.push(amigosUsuario); // Agregar el amigo al array
        asignarTextoElemento('#listaAmigos'); // Llamar a la función para mostrar la lista de amigos
    }
    limpiarCaja(); // Limpiar la caja de texto
}

// Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = ''; // Limpiar el campo de entrada
}

function asignarTextoElemento(elemento, texto) 
{
    let elementoHTML = document.querySelector(elemento);
    if (texto) 
    {
        elementoHTML.innerHTML = texto;  // Asignar solo el texto del amigo sorteado
    } else 
    {
        let listaHTML = '';  // Si no es un texto específico, entonces es la lista
        for (let i = 0; i < amigos.length; i++) 
        {
            listaHTML += `<li>${amigos[i]}</li>`;
        }
        elementoHTML.innerHTML = listaHTML;
    }
}
// Función para limpiar la lista de amigos
function limpiarLista() {
   amigos = []; // Vaciar el array
   document.querySelector('#listaAmigos').innerHTML = ''; // Limpiar el HTML de la lista
} 

// Función para sortear un amigo
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('No has ingresado el nombre de tus amigos al sorteo');
    } else {
        let amigoSecreto = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
        let amigoSorteado = amigos[amigoSecreto]; // Obtener el amigo sorteado
        asignarTextoElemento('#resultado', amigoSorteado); // Pasar solo el amigo sorteado
    }
    limpiarLista();
}
