/**
 * Ano automatico
 *  @Autor Luis Gustavo Rrodrigues Da Silva
 */


// inserindo o nao na tag spam
let ano = document.getElementById("copyrightYear")
// A linha abaixo pega a data do sistema
let anoAtual = new Date().getFullYear()
// a linha abaixo faz com que o sistema processe e coloque o ano na pagina
ano.innerHTML = anoAtual

/**
 * Carrosel de imagens
 */

let indice = 0 //0,1,2 (3 imagens)


// capturar as tags dos elementos
const imgs = document.getElementById("imagens")
//capturar 2 elementos html
const imagem = document.querySelectorAll("#imagens img")

function carrosel() {
    indice++ // somar 1 a variavel
    if(indice >= imagem.length) {
        indice = 0
    }

    // A linha abaixo modifica o estilo css d aimagem
    // style modifica o css
    // transform (deslocamento do eixo)
    imgs.style.transform = `translateX(${-indice * 512}px)`
    
}

// a linha abaixo executa a função carrosel a cada 2s
setInterval(carrosel, 2000)