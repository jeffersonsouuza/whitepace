# Whitepace - Landing Page

<p align="center">
  <img src="img/hero-lp.jpg" alt="Landing Page" width="500" height="300">
</p>

**Whitepace** é uma landing page desenvolvida para apresentar um software de controle de tarefas, com foco em uma interface atraente e moderna. Este projeto foi criado para aprimorar habilidades com **HTML5**, **CSS3 (GRID)**, **JavaScript** e ferramentas de otimização e automação como **Webpack** e **Babel**.

[**Deploy da Página**] https://jeffersonsouuza.github.io/whitepace

## Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com Grid Layout)
- **Sass**
- **Javascript**
- **Swiper JS** (para carrossel de imagens)
- **Webpack** (para gerenciamento de módulos)
- **EsLint** (para padronização de código)
- **Babel** (para compatibilidade com versões mais antigas de navegadores)

## Estrutura de Pastas

Abaixo está a estrutura de pastas do projeto para facilitar a navegação:

```plaintext
whitepace/
├── docs/                  # Pasta gerada com a versão final para produção
├── css/                   # Arquivos CSS e Sass
│   ├── sass/              # Arquivos .scss organizados em partials
│   └── style.css          # Arquivo CSS principal gerado a partir do Sass
├── img/                   # Imagens usadas no projeto
├── js/                    # Arquivos JavaScript
│   ├── modules/           # Módulos JS
│   │   └── script.js      # Arquivo JS principal
│   └── index.html         # Página principal (HTML)
├── .eslintrc              # Configuração do ESLint
├── package.json           # Dependências e scripts do projeto
└── webpack.config.js      # Configuração do Webpack
```

## Como Configurar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

### Instalação

1. **Clone o repositório:**

   Clone este repositório para a sua máquina local usando o comando abaixo:

   ```bash
   git clone https://github.com/jeffersonsouuza/whitepace.git
   ```

2. **Navegue até o diretório do projeto:**

   Após clonar o repositório, entre na pasta do projeto:

   ```bash
   cd whitepace
   ```

3. **Instale as dependências do projeto:**

   Para instalar todas as dependências necessárias listadas no arquivo package.json, execute o comando:

   ```bash
   npm install
   ```

## Como Usar

### Compilando Sass

Para compilar os arquivos Sass e iniciar um servidor de desenvolvimento com atualização automática, execute o seguinte comando:

```bash
npm run dev
```

### Processo de Build do Webpack

Para gerar a versão de produção do projeto com o Webpack, use o comando:

```bash
npm run build
```

## Créditos

Este projeto é baseado no design da Whitepace - SaaS Landing Page disponibilizado no Figma Community, e foi desenvolvido para praticar técnicas de layout e design com CSS Grid.

- Design original: [Whitepace - SaaS Landing Page](<https://www.figma.com/design/YTJKhpHH5Dv61sJDoIs0no/Whitepace---SaaS-Landing-Page-(Community)?t=Vjo01d8wCaYFyOpd-0>)
- Autor do Design: [Al Razi Siam](https://www.figma.com/@alrazisiam)
