// script.js
document.addEventListener('DOMContentLoaded', function () {
  
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Exemplo de notícias
    const noticias = [
        'Fulano e beltrano, juntos nas proximas eleições!',
        'Mariazinha x Julinha! Vai dar o que falar!',
        'Não percam! HOJE na TV Câmara, Lulinha!',
    
    ];

    const noticiasRolador = document.getElementById('noticias-rolador');
    const rodapeNoticias = document.getElementById('rodape-noticias');

    // Adiciona notícias ao rodapé
    noticias.forEach((noticia, index) => {
        const p = document.createElement('p');
        p.textContent = noticia;
        rodapeNoticias.appendChild(p);
    });

    // Função para rolar automaticamente as notícias no rodapé
    function rolarNoticias() {
        const primeiraNoticia = rodapeNoticias.firstElementChild;
        rodapeNoticias.appendChild(primeiraNoticia);
    }

    // Define a rolagem automática a cada 3 segundos (3000 milissegundos)
    setInterval(rolarNoticias, 3000);

    // Adicione mais lógica JavaScript conforme necessário

});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');

    let index = 0;

    // Função para mover o carrossel para a próxima notícia
    function moveToNext() {
        index = (index + 1) % items.length;
        updateCarousel();
    }

    // Função para mover o carrossel para a notícia anterior
    function moveToPrev() {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    }

    // Atualiza a posição do carrossel
    function updateCarousel() {
        const position = -index * 100 + '%';
        track.style.transform = 'translateX(' + position + ')';
    }

    // Adiciona eventos aos botões
    nextButton.addEventListener('click', moveToNext);
    prevButton.addEventListener('click', moveToPrev);

    // Configura rotação automática
    setInterval(moveToNext, 3000);
});