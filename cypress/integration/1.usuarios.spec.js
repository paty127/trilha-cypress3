///<reference types="cypress" />


import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre rota/usuarios da API Serverest', () => {

    it('Deve buscar todos os usuários cadastrados na Serverest', () => {
        Serverest.buscarUsuarios().then( res => {
          cy.contractValidation(res, 'get-usuarios', 200)
                
             ValidaServerest.validarBuscaDeUsuarios(res)
            })
         })

         it.only('Não deve postar um novo usuario administrador existente', () => {
            cy.postarUsuarioSemSucesso().then( res => {
                cy.contractValidation(res, 'post-usuarios', 400)
                expect(res.body.message).to.be.eq('Este email já está sendo usado')
            })
        })

           it('Deve realizar login com sucesso',() => {
                Serverest.buscarUsuarioParaLogin()
                cy.get('@usuarioLogin').then( usuario => {
                    Serverest.logar(usuario).then( res => {
                        ValidaServerest.validarBuscaDeUsuarios(res)
                        Serverest.salvarBearer(res)
                    })
                })
            })
        })
    


    