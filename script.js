const fotos = [
    { id: 1, titulo: "Acre", url: "./imgs/Bandeira_do_Acre.png" },
    { id: 2, titulo: "Alagoas", url: "./imgs/Bandeira_de_Alagoas.png" },
    { id: 3, titulo: "Amapá", url: "./imgs/Bandeira_do_Amapá.png" },
    { id: 4, titulo: "Amazonas", url: "./imgs/Bandeira_do_Amazonas.png" },
    { id: 5, titulo: "Bahia", url: "./imgs/Bandeira_da_Bahia.png" },
    { id: 6, titulo: "Ceará", url: "./imgs/Bandeira_do_Ceará.png" },
    { id: 7, titulo: "Distrito Federal", url: "./imgs/Bandeira_do_Distrito_Federal_(Brasil).png" },
    { id: 8, titulo: "Espirito Santo", url: "./imgs/Bandeira_do_Espírito_Santo.png" },
    { id: 9, titulo: "Goiás", url: "./imgs/Bandeira_do_Goiás.png" },
    { id: 10, titulo: "Maranhão", url: "./imgs/Bandeira_do_Maranhão.png" },
    { id: 11, titulo: "Mato Grosso", url: "./imgs/Bandeira_de_Mato_Grosso.png" },
    { id: 12, titulo: "Mato Grosso do Sul", url: "./imgs/Bandeira_de_Mato_Grosso_do_Sul.png" },
    { id: 13, titulo: "Minas Gerais", url: "./imgs/Bandeira_de_Minas_Gerais.png" },
    { id: 14, titulo: "Pará", url: "./imgs/Bandeira_do_Pará.png" },
    { id: 15, titulo: "Paraíba", url: "./imgs/Bandeira_da_Paraíba.png" },
    { id: 16, titulo: "Paraná", url: "./imgs/Bandeira_do_Paraná.png" },
    { id: 17, titulo: "Pernambuco", url: "./imgs/Bandeira_de_Pernambuco.png" },
    { id: 18, titulo: "Piauí", url: "./imgs/Bandeira_do_Piauí.png" },
    { id: 19, titulo: "Rio de Janeiro", url: "./imgs/Bandeira_do_estado_do_Rio_de_Janeiro.png" },
    { id: 20, titulo: "Rio Grande do Norte", url: "./imgs/Bandeira_do_Rio_Grande_do_Norte.png" },
    { id: 21, titulo: "Rio Grande do Sul", url: "./imgs/Bandeira_do_Rio_Grande_do_Sul.png" },
    { id: 22, titulo: "Rondônia", url: "./imgs/Bandeira_de_Rondônia.png" },
    { id: 23, titulo: "Roraima", url: "./imgs/Bandeira_de_Roraima.png" },
    { id: 24, titulo: "Santa Catarina", url: "./imgs/Bandeira_de_Santa_Catarina.png" },
    { id: 25, titulo: "São Paulo", url: "./imgs/Bandeira_do_estado_de_São_Paulo.png" },
    { id: 26, titulo: "Sergipe", url: "./imgs/Bandeira_de_Sergipe.png" },
    { id: 27, titulo: "Tocantins", url: "./imgs/Bandeira_do_Tocantins.png" }

];

const container = document.getElementById('grid-de-fotos');

function colocarFotos(lista) {

    container.innerHTML = "";
    const mensagemVazia = document.getElementById("msg-nenhum-resultado")
    
    if (lista.length === 0) {
        mensagemVazia.style.display = "block";

    } else {
    mensagemVazia.style.display = "none";
    lista.forEach(foto => {
        const htmlDaFoto = `
            <div class="cartao-foto">
                <img src="${foto.url}" alt="${foto.titulo}">
                <p> ${foto.titulo}</p>
            </div>
            `;
            container.innerHTML += htmlDaFoto;
        });
    }
}

const campobuscador = document.getElementById('campo-buscador')

campobuscador.addEventListener('input', () => {
    const termo = campobuscador.value.toLowerCase();
    const fotosFiltradas = fotos.filter(foto => {
        return foto.titulo.toLowerCase().includes(termo);
    });
    colocarFotos(fotosFiltradas)
});

colocarFotos(fotos)

