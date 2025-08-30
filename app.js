// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar un nuevo amigo a la lista.
//Valida que el nombre no esté vacío y no esté duplicado.

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Usamos trim() para eliminar espacios en blanco

    // 1. Validar que la entrada no esté vacía
    if (nombreAmigo === '') {
        alert("Por favor, ingrese un nombre válido.");
        return; // Detiene la ejecución de la función
    }

    // 2. Validar que el nombre no esté ya en la lista (evita duplicados)
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado. Por favor, ingrese un nombre diferente.");
        inputAmigo.value = ''; // Limpia el campo
        return;
    }

    // 3. Añadir el nombre al array
    amigos.push(nombreAmigo);

    // 4. Actualizar la lista que se muestra en la pantalla
    actualizarListaAmigos();

    // 5. Limpiar el campo de entrada para el siguiente nombre
    inputAmigo.value = '';
    inputAmigo.focus(); // Coloca el cursor de nuevo en el campo para facilitar la entrada
}

/**
 * Función para mostrar la lista de amigos en el HTML.
 * Limpia la lista actual y la vuelve a generar desde el array.
 */
function actualizarListaAmigos() {
    const listaHtml = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente para evitar duplicados al mostrar
    listaHtml.innerHTML = '';

    // Iterar sobre el array de amigos para crear los elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        const elementoAmigo = document.createElement('li');
        elementoAmigo.textContent = amigos[i];
        
        // Agregar el nuevo elemento a la lista en el HTML
        listaHtml.appendChild(elementoAmigo);
    }
}

// Función para realizar el sorteo del amigo secreto.

function sortearAmigo() {
    // Validar que haya suficientes amigos para el sorteo (mínimo 4)
    if (amigos.length < 4) {
        alert("Se necesitan al menos 4 participantes para realizar el sorteo.");
        return;
    }

    // Barajar (desordenar) el array de amigos usando el algoritmo de Fisher-Yates
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    const resultadoHtml = document.getElementById('resultado');
    resultadoHtml.innerHTML = ''; // Limpiar resultados anteriores

    // Asignar los pares y mostrarlos
    for (let i = 0; i < amigos.length; i++) {
        // El último amigo le regala al primero
        const amigoSecreto = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        
        const parrafoResultado = document.createElement('p');
        parrafoResultado.textContent = `${amigos[i]}  →  ${amigoSecreto}`;
        
        resultadoHtml.appendChild(parrafoResultado);
    }
}

// Función para reiniciar el juego por completo. 
function reiniciar() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Limpiar las listas en el HTML
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}

