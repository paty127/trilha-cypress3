/// <reference types="cypress" />


describe('Caso de teste sobre a rota /usuarios da API Serverest', () => {

    it('Deve buscar todos os usuarios cadsatrados na Serverest', () => {
      cy.request('/usuarios').then ( res => {
        expect(res).to.be.a('object')
        expect(res.body.quantidade).to.be.a('number')
        expect(res.body.quantidade).to.be.greaterThan(0)

      })
  })

  it('Não deve postar um novo usuário administrador existente', () => {
    cy.postarUsuarioSemSucesso().then( res => {  
            expect(res).to.be.a('object')
            expect(res.body.message).to.be.a('string')
            expect(res.body.message).to.be.eq('Este email já está sendo usado')
        
        })
    })
    it('Deve validar o comando personalizado', () => {
        cy.rest('GET', '/usuarios').then( res => {
            expect(res).to.be.a('object')
            cy.log(JSON.stringify(res ))
            
        
        })
    })
    it.only('Deve realizar login com sucesso', () => {
        cy.buscarUsuarioParaLogin().then( usuario => {
            cy.logar(usuario.email, usuario.senha).then( res =>{
                expect(res).to.be.a('object')
                expect(res.body.message).to.be.a('string')
                expect(res.body).to.haveOwnProperty('authorization')
                var bearer = res.body.authorization.slice(7)
                cy.log(bearer)
                 
        
            })
        })
    })
})                                                                                                          


    

