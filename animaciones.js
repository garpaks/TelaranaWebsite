window.addEventListener('scroll', () => {
    // 1. Calculamos cuánto ha bajado el usuario en porcentaje (0 a 1)
    const scrollMaximo = document.documentElement.scrollHeight - window.innerHeight;
    const porcentajeScroll = window.scrollY / scrollMaximo;

    // 2. Calculamos cuánto espacio tiene la araña para bajar (alto de la ventana menos su tamaño)
    const altoVentana = window.innerHeight;
    const tamanoArana = 60; // Ajuste aproximado del tamaño de la imagen
    const distanciaTotal = altoVentana - tamanoArana;

    // 3. La posición final es el porcentaje del scroll multiplicado por la distancia total
    const movimiento = porcentajeScroll * distanciaTotal;

    const arana = document.getElementById('imgArana');
    const hilo = document.getElementById('hiloArana');
    
    if (arana) {
        arana.style.transform = `translateY(${movimiento}px)`;
    }
    
    if (hilo) {
        // El hilo empieza desde arriba y llega hasta la araña (sumamos el offset inicial)
        hilo.style.height = `${movimiento + 30}px`; 
    }
});
