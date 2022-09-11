const URL_USUARIOS  = '/usuarios'
const URL_LOGIN     = '/login'
const URL_PRODUTOS  = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {
    //Açoes que podemos realizar na API
    // Buscar usuarios
    //Cadastrar novos usuarios
    //Realizar Login

    static buscarUsuarios(){
        return cy.rest('GET', URL_USUARIOS)
    }

    static buscarUsuarioParaLogin(){
    cy.request(URL_USUARIOS).then( res => {
    
        cy.wrap({ 
            email: res.body.usuarios[1].email,
            password: res.body.usuarios[1].password
        }).as('usuarioLogin')        
    })
 } 

     static logar(usuario){
        return cy.rest('POST', URL_LOGIN, usuario)
    }

    static salvarBearer(resposta){
        Cypress.env('bearer', resposta.body.authorization.slice(7))
    
    } 

    //Produtos//
    static buscarProdutos(){
        return cy.rest('GET', URL_PRODUTOS)

    }
    static cadastrarProdutoComSucesso(){
        return cy.request({
            method: 'POST',
            url: URL_PRODUTOS,  
            body: {
                "nome": "Logitech MD Horizontaal",
                "preco": 25,
                "descricao": "Tecla",
                "quantidade": 38
                 
            },
            failOnStatusCode: true,
            auth:{
                bearer: Cypress.env("bearer")
            }
        })
    }
}
