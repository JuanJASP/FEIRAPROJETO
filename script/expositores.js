document.getElementById('cadexpositor').addEventListener('submit', function(event) {
    event.preventDefault();

    const expositor = {
        nome: document.getElementById('nomeExpositor').value,
        idade: document.getElementById('idadeExpositor').value,
        telefone: document.getElementById('telExpositor').value,
        email: document.getElementById('emailExpositor').value,
        descricao: document.getElementById('sobreExpositor').value
    };

    const expositores = JSON.parse(localStorage.getItem('expositores'));
    expositores.push(expositor);
    localStorage.setItem('expositores', JSON.stringify(expositores));
    this.reset();
    atualizarTabela();
});

function atualizarTabela() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    (JSON.parse(localStorage.getItem('expositores'))).forEach(({ nome, idade, telefone, email, descricao }) => {
        tbody.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>${idade}</td>
                <td>${telefone}</td>
                <td>${email}</td>
                <td>${descricao}</td>
                <td><button class="cadastrarbtn" onclick="editarExpositor('${nome}')">Editar</button></td>
                <td><button class="limparbtn" onclick="excluirExpositor('${nome}')">Excluir</button></td>
            </tr>
        `;
    });
}

window.onload = atualizarTabela;
function excluirExpositor(nome) {
    const expositores = JSON.parse(localStorage.getItem('expositores')); 
    const expositoresFiltrados = expositores.filter(expositor => expositor.nome !== nome); 
    localStorage.setItem('expositores', JSON.stringify(expositoresFiltrados));
    atualizarTabela(); 
}

