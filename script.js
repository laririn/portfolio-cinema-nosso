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