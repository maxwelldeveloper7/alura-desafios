function adicionar(){
    //criar um objeto itemCompra e recuperar os valores dos campos e uma função que retorna o preço

    let itemCompra = {
        produto: document.getElementById("produto").value,
        nomeProduto: document.getElementById("produto").value.split("-")[0],
        quantidade: document.getElementById("quantidade").value,
        valorUnitario: document.getElementById("produto").value.split("R$")[1],
        
        preco: function(){
            return this.quantidade * this.valorUnitario;
        }

    }
    //adicionar o itemCompra no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${itemCompra.quantidade}x</span> ${itemCompra.nomeProduto} <span class="texto-azul">R$${itemCompra.preco()}</span>
  </section>`;
    //atualizar total do carrinho
    let total = document.getElementById("valor-total");
    total.innerHTML = `R$${parseInt(total.innerHTML.split("R$")[1]) + itemCompra.preco()}`
    document.getElementById("quantidade").value = 0;
}

function limpar(){
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";
}