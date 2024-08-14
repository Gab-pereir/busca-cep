const inputCep = document.getElementById('js-input-cep');
const btnBuscarCep = document.getElementById('js-btn-buscar-cep');

const inputdadosBairro = document.getElementById('js-input-dados-bairro');
const inputdadosCep = document.getElementById('js-input-dados-cep');
const inputdadosLogradouro = document.getElementById('js-input-dados-logradouro');
const inputdadosCidade = document.getElementById('js-input-dados-cidade');

const areaDados = document.getElementById('js-dados');
const msgErro = document.getElementById('js-error')

btnBuscarCep.addEventListener('click', () => {
    if(inputCep.value != ""){

        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
        .then(Response => Response.json())
        .then(json => {
            inputdadosBairro.value = json.bairro;
            inputdadosCep.value = json.cep;
            inputdadosLogradouro.value = json.logradouro;
            inputdadosCidade.value = json.localidade;
        });

        msgErro.style.display ='none';
    } else{
        msgErro.style.display ='block';
    }
})


