# Projeto Vue.js: Busca na API ViaCEP

Este projeto Vue.js foi desenvolvido com o objetivo de facilitar a busca por informações de endereços utilizando a API pública fornecida pelo ViaCEP. Com esta aplicação, os usuários poderão inserir um CEP e obter informações detalhadas sobre o endereço correspondente.

## Funcionalidades

- **Busca por CEP**: Os usuários podem inserir um CEP válido para recuperar informações sobre o endereço correspondente.
- **Exibição de Informações**: Após a busca, o aplicativo exibi detalhes como logradouro, bairro, cidade, estado do endereço.
- **Interface Amigável**: A interface do usuário será desenvolvida com Vue.js, proporcionando uma experiência interativa e intuitiva.

## Como Utilizar

1. **Instalação de Dependências**: Antes de começar, certifique-se de ter todas as dependências instaladas. Você pode fazer isso executando `npm install` no diretório do projeto.

2. **Execução do Projeto**: Após instalar as dependências, você pode iniciar o servidor de desenvolvimento com o comando `npm run serve`.

3. **Acesso à Aplicação**: Acesse a aplicação em seu navegador através do endereço [http://localhost:8080](http://localhost:8080).

4. **Busca por CEP**: Na página inicial, insira um CEP válido no campo de busca e pressione Enter ou clique no botão "Buscar".

5. **Visualização dos Resultados**: Após a busca, os detalhes do endereço correspondente serão exibidos na página.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **API ViaCEP**: API pública que fornece informações de endereço com base no CEP informado.
- **HTML/CSS**: Utilizados para estruturação e estilização da aplicação.
- **JavaScript**: Linguagem de programação utilizada para a lógica da aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR (pull request) com melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Preview da Aplicação

<img src="https://github.com/victorsantanna/busca-cep/blob/main/public/img/preview/TELA-PRINCIPAL.jpg" alt="tela principal">

## Preview com o resultado da busca

<img src="https://github.com/victorsantanna/busca-cep/blob/main/public/img/preview/TELA-COM-A-BUSCA-DO-CEP.jpg" alt="tela com resultado">

## Preview com os Erros da aplicação

<img src="https://github.com/victorsantanna/busca-cep/blob/main/public/img/preview/TELA-ERRO-AO-BUSCAR-O-CEP.jpg" alt="tela com erros">


<img src="https://github.com/victorsantanna/busca-cep/blob/main/public/img/preview/TELA-COM-AVISO-CEP-N%C3%83O-ENCONTRADO.jpg" alt="tela com erros">


## Preview com Avisos da aplicação

<img src="https://github.com/victorsantanna/busca-cep/blob/main/public/img/preview/TELA-COM-AVISO-QUANDO-O-INPUT-ESTIVER-VAZIO.jpg" alt="tela com avisos">



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
