document.getElementById('cadproduto').addEventListener('submit', function(event) {
    event.preventDefault();
    const produto = {
        nome: document.getElementById('nomeProduto').value,
        tipo: document.getElementById('tipoProduto').value,
        preco: document.getElementById('precoUnitario').value,
        cuidados: document.getElementById('cuidadosProduto').value,
        quantidade: document.getElementById('quantidadeProduto').value
    };
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    this.reset();
    atualizarTabela();
});

function atualizarTabela() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    
    (JSON.parse(localStorage.getItem('produtos'))).forEach(({ nome, tipo, preco, cuidados, quantidade }) => {
        tbody.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>${tipo}</td>
                <td>${preco}</td>
                <td>${cuidados}</td>
                <td>${quantidade}</td>
                <td><button class="cadastrarbtn" onclick="editarProduto('${nome}')">Editar</button></td>
                <td><button class="limparbtn" onclick="excluirProduto('${nome}')">Excluir</button></td>
            </tr>
        `;
    });
}
window.onload = atualizarTabela;

function excluirProduto(nome) {
    const produtos = JSON.parse(localStorage.getItem('produtos')); 
    const produtosFiltrados = produtos.filter(produto => produto.nome !== nome);
    localStorage.setItem('produtos', JSON.stringify(produtosFiltrados)); 
    atualizarTabela(); 
}
