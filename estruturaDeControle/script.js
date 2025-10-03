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

