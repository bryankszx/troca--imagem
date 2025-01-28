"use strict";

const botaoMudarImagem = document.getElementById('mudar-imagem');

const imagens = [
    'img/hisoka.png',
    'img/Isaac.png',
    'img/killua.png',
    'img/kurapika.png',
    'img/shizuku.png'
];

let indiceImagem = 0; 

function trocarImagem() {
    indiceImagem = (indiceImagem + 1) % imagens.length;  
    document.body.style.backgroundImage = `url(${imagens[indiceImagem]})`;  
}

botaoMudarImagem.addEventListener('click', trocarImagem);
