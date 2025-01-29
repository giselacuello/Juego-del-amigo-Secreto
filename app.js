const lista = [];

//funcion para validar nombre
function esNombreValido(nombre) {
    return nombre.trim().length > 0 && isNaN(nombre);
}

//funcion para verificar si el nombre ya existe en la lista
function esNombreRepetido(nombre) {
    // Convertir el nombre a minúsculas para comparación insensible a mayúsculas/minúsculas
    const nombreNormalizado = nombre.toLowerCase();
    
    // Compara el nombre normalizado con los nombres en la lista normalizados a minúsculas
    return lista.some(nombreEnLista => nombreEnLista.toLowerCase() === nombreNormalizado);
}

//funcion para agregar el nombre a la lista
function agregarAmigo () {
    //obtener el nombre desde el campo de texto
    const nombre = document.getElementById('amigo').value.trim();//eliminar espacios en blanco si los hubiera al inicio o final de la cadena

    //validar nombre
    if (!esNombreValido(nombre)) {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    // Comprobar si el nombre ya está en la lista
    if (esNombreRepetido(nombre)) {
        alert(`El nombre "${nombre}" ya está en la lista.`);
        return;
    }
    // Agregar el nombre a la lista
    lista.push(nombre);

    // Mostrar el nombre en el HTML
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = "";
}
// Escuchar la tecla Enter en el campo de texto
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Si se presiona Enter
        agregarAmigo();
    }
});

//realizar el sorteo
function sortearAmigo() {
    if (lista.length === 0) {
        alert("No hay amigos en la lista para realizar el sorteo.");
        return;
    }

    const amigoSecreto = lista[Math.floor(Math.random() * lista.length)];

    // Muestra el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;

    // Resetear la lista después del sorteo
    lista.length = 0;  // Vaciar la lista

    // Limpiar la lista visualmente en el HTML
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Eliminar todos los elementos <li> de la lista
}



