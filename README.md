<h1 align="center">MicroJá</h1>

<p align="center">
  Aplicação web desenvolvida para incentivar a construção de micro-hábitos diários por meio de pequenas ações simples, leves e acessíveis, com foco em bem-estar, constância e progresso sem pressão.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-layout-and-design-decisions">Layout e decisões de design</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Como executar</a>
</p>

<br>

<img src="./assets/Mockup - MicroJá.png" alt="MicroJa Mockup" width="100%">

---

## 🏠 About the project

O **MicroJá** foi desenvolvido como uma aplicação voltada ao incentivo de pequenos hábitos diários, ajudando o usuário a iniciar mudanças de forma simples, rápida e sem cobranças exageradas. A proposta central é mostrar que pequenas ações consistentes podem gerar evolução real ao longo do tempo.

O projeto conta com uma página inicial de apresentação, uma área de **hábitos do dia** com ações marcáveis como concluídas e uma seção de **histórico/progresso**, onde o usuário visualiza indicadores básicos da sua jornada. 

Além da parte funcional, o projeto também busca transmitir uma sensação de leveza e acolhimento por meio de uma identidade visual limpa, orgânica e responsiva, com suporte a modo escuro e persistência local de estado. 

---

## 🧰 Features

- Página inicial com proposta de valor e CTA
- Navegação entre início, hábitos do dia e histórico
- Lista de 5 micro-hábitos diários
- Marcação de hábitos como concluídos
- Opção de desfazer hábitos concluídos
- Contador de hábitos concluídos no dia
- Mensagem de sucesso ao concluir todos os hábitos
- Destaque visual para hábitos completados
- Exibição da data atual formatada em português
- Calendário com destaque automático do dia atual
- Indicador de dias concluídos
- Indicador visual de sequência atual
- Alternância entre tema claro e escuro
- Persistência do tema com `localStorage`
- Persistência dos hábitos concluídos com `localStorage`
- Efeitos visuais e animações sutis de interface 

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Manipulação do DOM
- LocalStorage
- Responsividade com CSS
- Animações com keyframes 

---

## 👷 Project structure

A estrutura principal da aplicação está organizada em seções como:

- Início
- Hábitos do Dia
- Histórico / Progresso
- Footer

Arquivos principais do projeto:

- `index.html`
- `style.css`
- `script.js`
- `assets/` para ícones, ilustrações e imagens da interface 

---

## 🎨 Layout and design decisions

O projeto utiliza uma identidade visual com tons claros, verdes suaves e elementos que remetem a natureza, bem-estar e leveza. Essa direção visual faz sentido com a proposta do produto: estimular progresso diário sem pressão excessiva. 

Alguns pontos de destaque no layout:

- visual leve e acolhedor
- uso de verde como cor de progresso e equilíbrio
- hero section simples e objetiva
- cards com cantos arredondados e aparência amigável
- modo escuro com adaptação visual consistente
- feedback visual claro para hábitos concluídos
- separação da aplicação por áreas funcionais
- animações suaves para enriquecer a experiência sem poluir a interface 

---

## ⚙️ Functional rules

A aplicação segue algumas regras práticas de funcionamento:

- cada hábito pode ser marcado como concluído
- ao concluir um hábito, o estado fica salvo no navegador
- hábitos concluídos recebem feedback visual específico
- o usuário pode desfazer uma conclusão
- ao concluir todos os hábitos do dia, a aplicação exibe uma mensagem de sucesso
- o tema escolhido pelo usuário também fica salvo localmente
- o calendário destaca automaticamente o dia atual com base na data do sistema
---

## 🌱 Daily habits included

Os micro-hábitos exibidos atualmente no projeto são:

- Sorria para o espelho
- Faça 10 respirações conscientes
- Beba um copo de água
- Respire fundo 3 vezes
- Alongue o corpo por 1 minuto

---

## 🔰 Getting Started

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- Git
- Um navegador de sua preferência

---

### Clone the repository

```bash id="ea7v2d"
git clone https://github.com/seu-usuario/microja.git
