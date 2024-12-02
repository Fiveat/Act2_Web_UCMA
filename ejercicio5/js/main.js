// Seleccionar el botón y la lista
const boton = document.getElementById('addButton');
const lista = document.getElementById('lista');

// Contador para numeración de elementos
let contadorElementos = lista.children.length;

// Función para añadir un nuevo elemento a la lista
boton.addEventListener('click', function() {
    // Incrementar contador
    contadorElementos++;
    
    // Crear nuevo elemento de lista
    const nuevoElemento = document.createElement('li');
    
    // Añadir clases de Bootstrap
    nuevoElemento.classList.add('list-group-item');
    
    // Establecer texto del elemento
    nuevoElemento.textContent = `Elemento ${contadorElementos}`;
    
    // Añadir a la lista
    lista.appendChild(nuevoElemento);
});