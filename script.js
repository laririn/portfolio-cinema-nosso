var btn = document.querySelector('.btn-trab');
var conteudot = document.querySelector('.conteudot');

btn.addEventListener('click', function() {
    if(conteudot.style.display === 'block'){
        conteudot.style.display = 'none';
    } else {
        conteudot.style.display = 'block';
    }
})

var btnFormacao = document.querySelector('.btn-formacao');
var conteudof = document.querySelector('.conteudof');

btnFormacao.addEventListener('click', function() {
    if(conteudof.style.display === 'block'){
        conteudof.style.display = 'none';
    } else {
        conteudof.style.display = 'block';
    }
})

var btnSobre = document.querySelector('.btn-sobre');
var conteudoS = document.querySelector('.conteudo-s');

btnSobre.addEventListener('click', function() {
    if(conteudoS.style.display === 'block'){
        conteudoS.style.display = 'none';
    } else {
        conteudoS.style.display = 'block';
    }
})