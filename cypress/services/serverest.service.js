const URL_USUARIOS = '/usuarios'
const URL_LOGIN = '/login'
const URL_PRODUTOS = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {
    //Açoes que podemos realizar na API
    // Buscar usuarios
    //Cadastrar novos usuarios
    //Realizar Login

    static buscarUsuarios() {
        return cy.rest('GET', URL_USUARIOS)
    }


    static buscarUsuarioParaLogin() {
        cy.request(URL_USUARIOS).then(res => {

            cy.wrap({
                email: res.body.usuarios[1].email,
                password: res.body.usuarios[1].password
            }).as('usuarioLogin')
        })
    }
    static buscarUsuarioPorId() {

        cy.rest('GET', URL_LOGIN, usuario, _id)
    }

    static logar(usuario) {
        return cy.rest('POST', URL_LOGIN, usuario)
    }

    static salvarBearer(resposta) {
        Cypress.env('bearer', resposta.body.authorization.slice(7))

    }

    //Produtos//
    static buscarProdutos() {
        return cy.rest('GET', URL_PRODUTOS)

    }
    static buscarProdutosParaCarrinho() {
        return cy.request(URL_PRODUTOS).then(res => {
            cy.wrap({
                idProduto: res.body.produtos[0]._id,
                quantidade: 1
            }).as('produtoCarrinho')
        })
    }
    static cadastrarProdutoComSucesso() {
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
            auth: {
                bearer: Cypress.env("bearer")
            }
        })
    }
    //carrinhos
    static buscarCarrinhos() {
        return cy.rest('GET', URL_CARRINHOS)
    }
    static cadastrarCarrinhoComSucesso(produto) {
        return cy.request({
            method: 'POST',
            url: URL_CARRINHOS,
            body: {
                produtos: [produto],
            },
            failOnStatusCode: true,
            auth: {
                bearer: Cypress.env("bearer")
            }


        })
    }
}