let slideIndex = 0;
showSlides();

function showSlides() { 
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Mostrar el slide actual
    slides[slideIndex].style.display = "block";

    // Avanzar al siguiente
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Vuelve al principio
    }
    setTimeout(showSlides, 2000); // Cambia cada 2 segundos
}

