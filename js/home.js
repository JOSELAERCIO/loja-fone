const $second = document.querySelector('.-second');
const carrinho = document.querySelector('.-last'); 
let valorInicial = 10;

$second.addEventListener('click', function() {
    
    carrinho.textContent = `Carrinho (${++valorInicial})`;
});

