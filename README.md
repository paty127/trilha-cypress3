<h1 align="center">Sprint 5 Cypress - API - Serverest </h1>

<p>Este projeto foi criado para demonstrar a utilização do Cypress para testar as principais rotas do  ServeRest que é um servidor REST que simula uma loja virtual com intuito de servir de material de estudos de testes de API. <p>

<p>Cypress é um framework de testes, de código aberto baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes <p>
<h4>Objetivos<h4>  

<ul> 

<li>Configurações iniciais de um projeto Cypress.</li> 

<li>Configurações de ambientes dinâmicos. </li> 

<li>Reconhecimento da API Serverest</li> 

<li>Estrutura e comandos personalizados</li> 

<li>Design Pattern Service Object</li> 

<li>Massas de dados fixas e dinâmicas</li> 

<li>Teste de contrato</li> 

<li>Report da automação</li> 
<h2>Mind Map<h2> 

![2022-09-12](https://user-images.githubusercontent.com/65580919/189706795-7f791845-e24b-4767-baa5-0f2caf38090c.png)
<h2>Serverest rotas<h2>
 
![2022-09-12 (1)](https://user-images.githubusercontent.com/65580919/189710031-604c13f8-54d0-433b-8576-52a3d4a726c9.png)

<h2>Cenários de Testes Remotos  </h2>

 

<h3>PRODUTOS</h3> 

<p>✓ Validar contrato de Produtos  <p>
 
<p>✓ Deve listar os produtos cadastrados  
 
<h3>USUÁRIOS</h3>

<p>✓ Deve validar o esquema do contrato - 
 
<p>✓ Deve listar todos os usuários cadastrado na Serverest  
 
<p>✓ Deve realizar login com sucesso 

<p>✓ Deve validar mensagem de erro ao postar um novo usuário administrador existente 

 

<h3>CARRINHOS</h3>

<p>✓ Deve buscar todos os carrinhos cadastrado <p>

 Ferramentas e comandos

<p>-Node.js - https://nodejs.org/en/ </p>

-Visual Studio Code ou qualquer editor de texto. Você encontra em: https://code.visualstudio.com/download 

cd cy_api_serverest 
 
Para instalar como dependências: 

npm install  
 
Suba o ambiente localhost 

npx run start 
 Ou 
npx serverest 

Após a execução, basta acessar a documentação http://localhost:300/ 

Para executar em moodo Headless, via console 

npx cypress run 
 

Para executar através do painel 

npx cypress open  
 

Após abrir o painel, clique na opção "Executando testes de integração" para rodar todos os testes. 

<h3>Gerando relatórios</h3> 

npm run cy:report   
Deve criar um arquivo "cypress/mochawesome-report/report.html. 

Bibliotecas de apoio: 

-Cypress: Framework de automação: https://cypress.io 

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker 

-Mochawesome Report, para geração de relatórios: https://www.npmjs.com/package/mochawesome 

Referências e agradecimentos, Alisson e toda equipe

 
