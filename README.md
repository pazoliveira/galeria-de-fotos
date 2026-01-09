# Galeria de Bandeiras - Brasil

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
├── style.css        # Estilização e Grid
├── script.js        # Lógica de busca e renderização
└── imgs/             # Assets (Bandeiras)
```

## 🚀 Como Executar

Para rodar o projeto na sua máquina, siga os passos abaixo:

1. **Clone o repositório** ou baixe os arquivos:
   ```bash
   git clone https://github.com/pazoliveira/galeria-de-fotos
Verifique a estrutura: Certifique-se de que a pasta de imagens (/imgs) está no mesmo diretório que os arquivos de código (index.html, style.css, script.js).

Abra a aplicação: Localize o arquivo index.html e abra-o em qualquer navegador moderno.
