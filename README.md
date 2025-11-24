# Projeto: Site Institucional - Lima Lima Manutenção

Este é o repositório do site institucional para a "Lima Lima Manutenção", uma empresa focada em serviços de manutenção de computadores e notebooks. O site foi desenvolvido para ser responsivo, informativo e fácil de usar, apresentando os serviços, preços e informações de contato da empresa.

## Visão Geral

O projeto consiste em um site estático de várias páginas, construído com HTML, CSS e JavaScript. Ele foi projetado com uma abordagem "mobile-first", garantindo uma ótima experiência de visualização em dispositivos móveis, tablets e desktops.

## Funcionalidades Implementadas

- **Design Responsivo**: O layout se adapta a diferentes tamanhos de tela.
- **Navegação Intuitiva**: Menu de navegação claro e um menu "hamburger" para dispositivos móveis.
- **Páginas Dedicadas**:
  - **Início**: Página principal com uma chamada para ação (CTA) e resumo dos serviços.
  - **Serviços**: Descrição detalhada de cada serviço oferecido.
  - **Preços**: Tabela de preços transparente para os serviços mais comuns.
  - **Depoimentos**: Prova social com feedback de clientes.
  - **Blog**: Artigos e dicas sobre manutenção e tecnologia.
  - **Contato**: Informações de contato e um formulário para agendamentos ou orçamentos.
- **Botão Flutuante do WhatsApp**: Acesso rápido para contato direto via WhatsApp.
- **Gerador de Post para Redes Sociais**: Na página de preços, há um botão que gera uma imagem da tabela de preços, pronta para ser compartilhada em redes sociais como Instagram ou Facebook.

## Estrutura de Arquivos e Pastas

O projeto está organizado da seguinte forma:

```
g:/portifilio/site-servico-manutencao/
├── css/
│   └── style.css           # Folha de estilo principal com todo o CSS do projeto.
├── img/
│   └── logo2.png           # Arquivo de imagem da logo.
├── js/
│   ├── form-handler.js     # Script para lidar com o envio de formulários (se houver integração).
│   └── script.js           # Script principal para interatividades (menu, gerador de post, etc.).
├── blog.html               # Página principal do blog.
├── blog-post-1.html        # Artigo 1 do blog.
├── blog-post-2.html        # Artigo 2 do blog.
├── blog-post-3.html        # Artigo 3 do blog.
├── contato.html            # Página de contato.
├── depoimentos.html        # Página de depoimentos.
├── index.html              # Página inicial do site.
├── precos.html             # Página com a tabela de preços.
├── servicos.html           # Página de serviços.
└── README.md               # Este arquivo de documentação.
```

### Descrição dos Arquivos Principais

- **`*.html`**: Cada arquivo HTML representa uma página do site. A estrutura semântica do HTML5 foi utilizada para melhor acessibilidade e SEO.
- **`css/style.css`**: Contém todos os estilos do site. Utiliza variáveis CSS (`:root`) para fácil customização de cores e padrões. A abordagem é "mobile-first", com `media queries` para adaptar o layout a telas maiores.
- **`js/script.js`**: Responsável pela interatividade do site.
  - **Menu Hamburger**: Controla a exibição do menu de navegação em dispositivos móveis.
  - **Rolagem Suave**: Melhora a experiência de navegação para links internos.
  - **Gerador de Post**: Utiliza a biblioteca `html2canvas` para capturar a tabela de preços e transformá-la em uma imagem PNG, que pode ser baixada pelo usuário.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura e semântica do conteúdo.
- **CSS3**: Para estilização e layout responsivo (utilizando Flexbox e Grid).
- **JavaScript (ES6+)**: Para interatividade do lado do cliente.
- **html2canvas**: Uma biblioteca JavaScript para "tirar prints" de elementos da página.

## Como Executar o Projeto Localmente

Como este é um projeto de site estático, não há necessidade de um servidor complexo ou compilação.

1.  **Clone o repositório** (ou baixe os arquivos) para o seu computador.
2.  **Navegue até a pasta do projeto** no seu explorador de arquivos.
3.  **Abra o arquivo `index.html`** em qualquer navegador de internet (como Google Chrome, Firefox, etc.).

Você poderá navegar por todas as páginas e testar todas as funcionalidades diretamente do seu sistema de arquivos.

## Boas Práticas e Comentários

Todo o código (HTML, CSS e JS) foi comentado para explicar a função de cada bloco. Isso segue as boas práticas de desenvolvimento, tornando o código mais legível e fácil de manter ou modificar no futuro.

---
*Este projeto foi desenvolvido como um portfólio de desenvolvimento web, demonstrando habilidades em front-end.*