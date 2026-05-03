
// Para elegir imágenes dependiendo de cuantas existan dentro de la ruta
const totalImagenesCarrusel = 23;

// Creamos una "bolsa" con todos los números de imágenes disponibles
let bolsaDeNumeros = [];
for (let i = 1; i <= totalImagenesCarrusel; i++) {
    bolsaDeNumeros.push(i);
}

const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
    // Elegimos un índice al azar de los que quedan en la bolsa
    let indiceAlAzar = Math.floor(Math.random() * bolsaDeNumeros.length);

    // Sacamos el número real de esa posición
    let numeroElegido = bolsaDeNumeros[indiceAlAzar];

    // Eliminamos ese número de la bolsa para que no se repita
    bolsaDeNumeros.splice(indiceAlAzar, 1);

    let ruta = `img/CarruselPhotos/${numeroElegido}.jpg`;
    slider.style.backgroundImage = `url(${ruta})`;
});


// empieza la función de automatización de movimiento
let contador = 0;
const intervalo = 5000;
const cajaCarusel = document.querySelector('.caruselItemsBox');

// --- TRUCO PARA INFINITO ---
// Clonamos el primer slider para que al final del carrusel se vea igual al inicio
const primerClone = sliders[0].cloneNode(true);
cajaCarusel.appendChild(primerClone);
// ---------------------------

setInterval(() => {
    contador++;

    // Aplicamos la transición para el movimiento normal
    cajaCarusel.style.transition = "transform 0.8s ease-in-out";
    cajaCarusel.style.transform = `translateX(-${contador * (100 / 6)}%)`;

    // Si llegamos al clon (posición 5)
    if (contador >= 5) {
        setTimeout(() => {
            // Quitamos la transición para que el salto sea invisible
            cajaCarusel.style.transition = "none";
            contador = 0;
            cajaCarusel.style.transform = `translateX(0%)`;
        }, 800); // Esperamos los 0.8s que dura la animación
    }
}, intervalo);