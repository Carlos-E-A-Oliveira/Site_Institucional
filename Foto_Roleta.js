let currentIndex = 0;

const slides = document.querySelectorAll('.gallery-item');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    // Faz o looping quando chega na última ou primeira imagem
    if (currentIndex >= totalSlides) {
        currentIndex = 0;  // Volta para a primeira imagem
        document.querySelector('.gallery').style.transition = 'none';  // Desativa a transição para pular direto para a primeira
        setTimeout(() => {
            document.querySelector('.gallery').style.transition = 'transform 0.5s ease-in-out';  // Reativa a transição
            document.querySelector('.gallery').style.transform = `translateX(${ -currentIndex * 100 }%)`;  // Move para a primeira imagem
        }, 50);  // Espera um pequeno tempo antes de reativar a transição
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;  // Vai para a última imagem
        document.querySelector('.gallery').style.transition = 'none';  // Desativa a transição para pular direto para a última
        setTimeout(() => {
            document.querySelector('.gallery').style.transition = 'transform 0.5s ease-in-out';  // Reativa a transição
            document.querySelector('.gallery').style.transform = `translateX(${ -currentIndex * 100 }%)`;  // Move para a última imagem
        }, 50);  // Espera um pequeno tempo antes de reativar a transição
    } else {
        // Caso contrário, move normalmente com a transição
        document.querySelector('.gallery').style.transform = `translateX(${ -currentIndex * 100 }%)`;
    }
}