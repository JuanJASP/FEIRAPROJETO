document.getElementById('cadartista').addEventListener('submit', function(event) {
    event.preventDefault(); // n atualizar

    const artista = {
        nome: document.getElementById('nomeArtista').value,
        cpfCnpj: document.getElementById('cpfCnpjArtista').value,
        telefone: document.getElementById('telArtista').value,
        email: document.getElementById('emailArtista').value,
        contrato: document.getElementById('contratoArtista').value
    };

    const artistas = JSON.parse(localStorage.getItem('artistas')) || [];
    artistas.push(artista);
    localStorage.setItem('artistas', JSON.stringify(artistas));

    this.reset();
    atualizarTabela();
});

function atualizarTabela() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    (JSON.parse(localStorage.getItem('artistas'))).forEach(({ nome, cpfCnpj, telefone, email, contrato }) => {
        tbody.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>${cpfCnpj}</td>
                <td>${telefone}</td>
                <td>${email}</td>
                <td>${contrato}</td>
                <td><button class="cadastrarbtn" onclick="editarArtista('${nome}')">Editar</button></td>
                <td><button class="limparbtn" onclick="excluirArtista('${nome}')">Excluir</button></td>
            </tr>
        `;
    });
}

window.onload = atualizarTabela;


function excluirArtista(nome) {
    const artistas = JSON.parse(localStorage.getItem('artistas'));
    const artistasFiltrados = artistas.filter(artista => artista.nome !== nome);
    localStorage.setItem('artistas', JSON.stringify(artistasFiltrados)); 
    atualizarTabela(); 
}
