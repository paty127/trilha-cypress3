///<reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de tese sobre a rota /carrinhos da API Serverest', () => {


  it('Deve buscar todos  os carrinhos cadastrado ', () => {
    Serverest.buscarCarrinhos().then(res => {
      ValidaServerest.validarBuscaDeCarrinhoComSucesso(res)

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


    it('Deve postar um novo carinho com sucesso', () => {
      Serverest.buscarProdutosParaCarrinho()
      cy.get('@produtoCarrinho').then( produto => {
      Serverest.cadastrarCarrinhoComSucesso(produto).then(res => {
        ValidaServerest.validarCadastroDeCarrinhoComSucesso(res)
      })
    })
  })
})
})
