const fotos = [
    { id: 1, titulo: "Acre", url: "./imgs/Bandeira_do_Acre.png" },
    { id: 2, titulo: "Alagoas", url: "./imgs/Bandeira_de_Alagoas.png" },
    { id: 3, titulo: "Amapa", url: "./imgs/Bandeira_do_Amapá.png" },
    { id: 4, titulo: "Amazonas", url: "./imgs/Bandeira_do_Amazonas.png" },
    { id: 5, titulo: "Bahia", url: "./imgs/Bandeira_da_Bahia.png" },
    { id: 6, titulo: "Ceara", url: "./imgs/Bandeira_do_Ceará.png" },
    { id: 7, titulo: "Distrito-Federal", url: "./imgs/Bandeira_do_Distrito_Federal_(Brasil).png" },
    { id: 8, titulo: "Espirito-Santo", url: "./imgs/Bandeira_do_Espírito_Santo.png" },
    { id: 9, titulo: "Goias", url: "./imgs/Bandeira_do_Goiás.png" },
    { id: 10, titulo: "Maranhao", url: "./imgs/Bandeira_do_Acre.png" },
    { id: 11, titulo: "Mato-Grosso", url: "./imgs/Bandeira_de_Mato_Grosso.png" },
    { id: 12, titulo: "Mato-Grosso-do-Sul", url: "./imgs/Bandeira_de_Mato_Grosso_do_Sul.png" },
    { id: 13, titulo: "Minas-Gerais", url: "./imgs/Bandeira_de_Minas_Gerais.png" },
    { id: 14, titulo: "Para", url: "./imgs/Bandeira_do_Pará.png" },
    { id: 15, titulo: "Paraiba", url: "./imgs/Bandeira_da_Paraíba.png" },
    { id: 16, titulo: "Parana", url: "./imgs/Bandeira_do_Paraná.png" },
    { id: 17, titulo: "Pernambuco", url: "./imgs/Bandeira_de_Pernambuco.png" },
    { id: 18, titulo: "Piaui", url: "./imgs/Bandeira_do_Piauí.png" },
    { id: 19, titulo: "Rio-de-Janeiro", url: "./imgs/Bandeira_do_estado_do_Rio_de_Janeiro.png" },
    { id: 20, titulo: "Rio-Grande-do-Norte", url: "./imgs/Bandeira_do_Rio_Grande_do_Norte.png" },
    { id: 21, titulo: "Rio-Grande-do-Sul", url: "./imgs/Bandeira_do_Rio_Grande_do_Sul.png" },
    { id: 22, titulo: "Rondonia", url: "./imgs/Bandeira_de_Rondônia.png" },
    { id: 23, titulo: "Roraima", url: "./imgs/Bandeira_de_Roraima.png" },
    { id: 24, titulo: "Santa-Catarina", url: "./imgs/Bandeira_de_Santa_Catarina.png" },
    { id: 25, titulo: "Sao-Paulo", url: "./imgs/Bandeira_do_estado_de_São_Paulo.png" },
    { id: 26, titulo: "Sergipe", url: "./imgs/Bandeira_de_Sergipe.png" },
    { id: 27, titulo: "Tocantins", url: "./imgs/Bandeira_do_Tocantins.png" }
];

const container = document.getElementById('caixa-de-fotos');

function mostrarFotos(lista) {
  container.innerHTML = "";
  const mensagemVazia = document.getElementById('mensagem-vazia');

  if (lista.length === 0) {
    mensagemVazia.style.display = "block";
  } else {
    mensagemVazia.style.display = "none";
    lista.forEach(foto => {
      const htmlDaFoto = `
        <div class="cartao-foto">
          <img src="${foto.url}" alt="${foto.titulo}">
          <p>${foto.titulo}</p>
        </div>
      `;
      container.innerHTML += htmlDaFoto;
    });
  }
}
// 1. Selecionamos o campo de entrada do HTML
const campoBusca = document.getElementById('campo-busca');

// 2. Adicionamos um "ouvinte" que detecta cada tecla digitada
campoBusca.addEventListener('input', () => {
    // Pegamos o que o usuário digitou e transformamos em minúsculas
    const termo = campoBusca.value.toLowerCase();
    
    // Criamos uma nova lista contendo apenas os estados que batem com a busca
    const fotosFiltradas = fotos.filter(foto => {
        // Verificamos se o título (em minúsculo) contém o termo digitado
        return foto.titulo.toLowerCase().includes(termo);
    });

    // Chamamos a função que você já tem, mas enviando a lista filtrada!
    mostrarFotos(fotosFiltradas);
});


mostrarFotos(fotos);
