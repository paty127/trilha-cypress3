///<reference types="cypress" />


import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de tese sobre a rota /produtos da API Serverest', () => {

    it('Deve buscar todos so aprodutos cadastrados', () => {
        Serverest.buscarProdutos().then(res => {
            ValidaServerest.validarBuscaDeProdutos(res)
        })
    })
    context('Logar com sucesso', () => {
        beforeEach('Logar', () => {
            Serverest.buscarUsuarioParaLogin()
            cy.get('@usuarioLogin').then(usuario => {
                Serverest.logar(usuario).then(res => {
                    ValidaServerest.validarLoginComSucesso(res)
                    Serverest.salvarBearer(res)


                })

            })
        })

        it('Deve postar um novo produto com sucesso', () => {
            Serverest.cadastrarProdutoComSucesso().then(res => {
                ValidaServerest.validarLoginComSucesso(res)


            })
        })
    })
})