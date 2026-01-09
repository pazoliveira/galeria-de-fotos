Aplicação web responsiva que renderiza uma galeria de bandeiras dos estados brasileiros a partir de um conjunto de dados JSON, permitindo filtragem em tempo real.

## 💻 Tecnologias
* **HTML5**: Estruturação semântica.
* **CSS3**: Layout via **CSS Grid** e **Flexbox** para responsividade.
* **JavaScript (ES6+)**: Manipulação dinâmica do DOM e métodos de array (`filter`, `forEach`).

## ⚙️ Funcionalidades
* **Renderização Dinâmica**: Os cartões de fotos são gerados via JavaScript, evitando repetição de código no HTML.
* **Search Engine**: Filtro *case-insensitive* que atualiza o grid a cada tecla digitada (evento de `input`).
* **Interface Responsiva**: Grid adaptável que ajusta o número de colunas conforme a largura da tela (uso de `minmax` e `auto-fill`).

## 📂 Estrutura de Pastas
```text
/
├── index.html        # Estrutura principal
├── Mstyle.css        # Estilização e Grid
├── Mscript.js        # Lógica de busca e renderização
└── imgs/             # Assets (Bandeiras)

🚀 Como Executar
Clone o repositório ou baixe os arquivos.

Certifique-se de que a estrutura de pastas das imagens (/imgs) está no mesmo diretório dos arquivos de código.

Abra o arquivo index.html em qualquer navegador moderno.

Desenvolvido por Diego Oliveira
