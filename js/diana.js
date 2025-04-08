function consultarCEP() {
    const cep = document.getElementById("cep").value;

    if(!cep){
        alert("Por favor, insira um CEP. ");
        return;
    }
    //Fazendo a requisição para a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        if(data.erro){
            throw new Error ("CEP inválido.");
        }

        document.getElementById("logradouro").textContent = data.logradouro;
        document.getElementById("bairro").textContent = data.bairro;
        document.getElementById("cidade").textContent = data.localidade;
        document.getElementById("estado").textContent = data.uf;
        document.getElementById("error").textContent = ""
    })
    .catch(error => {
        document.getElementById("error").textContent = "Erro: " + error.message;
        document.getElementById("logradouro").textContent = "";
        document.getElementById("bairro").textContent = "";
        document.getElementById("cidade").textContent = "";
        document.getElementById("estado").textContent = "";
    })
}