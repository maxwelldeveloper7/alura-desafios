function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    console.log(quantidade)
    if (tipo.value == 'pista'){
        comprarPista(quantidade);
    } else if (tipo.value == 'superior'){
        comprarSuperior(quantidade);
    } else if (tipo.value == 'inferior'){
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade >= qtdPista){
        alert('Quantidade indisponível para pista');
    }else{
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso!')
    }
}

function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade >= qtdSuperior){
        alert('Quantidade indisponível para cadeira superior');
    }else{
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso!')
    } 
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade >= qtdInferior){
        alert('Quantidade indisponível para cadeira inferior');
    }else{
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada com sucesso!')
    }
}