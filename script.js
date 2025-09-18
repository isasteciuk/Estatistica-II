function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[ai].style.display="list-item";                 
        }
    }
}

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "          Este projeto apresenta os resultados de um experimento conduzido com delineamento em Quadrado Latino (DQL). O objetivo foi avaliar diferentes tratamentos controlando duas fontes de variação, garantindo maior precisão nos resultados.",
        alternativas: [
            {
                texto: "Começar ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/736x/1f/f9/7d/1ff97d22dc19910d648edc520640a646.jpg"
    },
    {
        enunciado: "exemplo 1 --",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            },
         
        ],
        imagem: "" 
    },
    {
        enunciado: "exemplo 2 --",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "" 
    },
    {
        enunciado: "exemplo 3 --",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: ""
    },
    {
        enunciado: "exemplo 4 --",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "" 
    },
    {
        enunciado: "exemplo 5 --",
        alternativas: [
            {
                texto: "Resultado ♡︎",
                afirmacao: "",
            },
        ],
        imagem: "" 
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 
   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
   
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por ter acessado nosso site, espero que tenha gostado do teste florestal. O resultado é (---) ♡︎♡︎";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 

   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
  
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        img.style.width = "280px"; 
        img.style.height = "auto"; 
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
