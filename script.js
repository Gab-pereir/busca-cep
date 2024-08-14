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

        axios({
            method: 'GET',
            url: `https://viacep.com.br/ws/${inputCep.value}/json/`
        })
        .then(response => {
            let data = response.data;
            inputdadosBairro.value = data.bairro;
            inputdadosCep.value = data.cep;
            inputdadosLogradouro.value = data.logradouro;
            inputdadosCidade.value = data.localidade;
        });

        msgErro.style.display ='none';
    } else{
        msgErro.style.display ='block';
    }
})


