function revelar() {

    const imagem = document.querySelector('.card-img-top');
    imagem.src = 'img/_vinicius_junior.png';

    const nome = document.getElementById('Nome');
    const rank = document.getElementById('Rank');
    const dataNas = document.getElementById('Data_Nas');
    const altura = document.getElementById('Alutra'); 
    const posicao = document.getElementById('Posição '); 

    nome.innerHTML = 'Vinícius José Paixão de Oliveira Júnior';
    nome.classList.remove('placeholder-glow');
    
    const spans = document.querySelectorAll('.placeholder');
    spans.forEach(span => {
        span.classList.remove('placeholder');
    });

    rank.innerText = '9,5';
    dataNas.innerText = '12/07/2000 (25 anos)';
    altura.innerText = '1,76 m';
    posicao.innerText = 'Ponta-esquerda / Atacante';

    dataNas.classList.add('card-text');
    altura.classList.add('card-text');
    posicao.classList.add('card-text');
}