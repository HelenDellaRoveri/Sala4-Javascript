// Lógica de verificador de idade

const idadeInput = document.getElementById('idadeInput');
const verifyButton = document.getElementById('verifyButton');
const result = document.getElementById('resultado');

function verificarIdade(){
    result.classList.remove('visivel');
    const idade = parseInt(idadeInput.value);
    let mensagem = '';

    if(isNaN(idade) || idade < 0){
        mensagem = 'Por favor, insira uma idade válida.';
    }else if(idade < 18){
        mensagem = 'Você é menor de idade.';
    }else if(idade < 60){
        mensagem = 'Você é adulto.';
    }else{
        mensagem = 'Você é idoso.';
    }
    
    setTimeout(() => {
        result.innerText = mensagem;
        result.classList.add('visivel');
    }, 100);
}

// evento que adiicona a funcionalidade ao botão e ao enter em que chama a função verificarIdade tanto ao clicar no botão quanto ao pressionar a tecla Enter
verifyButton.addEventListener('click', verificarIdade);
idadeInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') verificarIdade();
})

// 2.animação do fundo do canvas com as partículas

const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

// ajusta o tamanho do canvas para preencher a tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// objeto  para armazenar a posição do mouse
let mouse = {
    x: null,
    y: null,
    radius: 150 // área de influência do mouse
};

