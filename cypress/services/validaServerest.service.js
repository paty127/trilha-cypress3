
export default class ValidaServerest {
    //Validações das açoes que podemos realizar na API
    // validar Busca de  usuarios
    //validar Cadastro  novos usuarios
    //validar  Login
    static validarBuscaDeUsuarios(resposta){
     //  expect(resposta.body.quantidade).to.be.greaterThan()
    }
    static validarLoginComSucesso(resposta){
            expect(resposta).to.be.a('object')
            expect(resposta.body.message).to.be.a('string')    
            expect(resposta.body).to.haveOwnProperty('authorization') 
    }
    static validarBuscaDeProdutos(resposta){
            expect(resposta).to.be.a('object')
            expect(resposta.body.quantidade).to.be.a('number')
            expect(resposta.body.produtos[0]).to.haveOwnProperty('nome')
            expect(resposta.body.produtos[0]).to.haveOwnProperty('preco')
            expect(resposta.body.produtos[0]).to.haveOwnProperty('descricao')
            

    }
    static validarCadastroDeProdutoComSucesso(resposta){
              expect(resposta).to.be.a('object')
              expect(resposta.body.message).to.be.a('string')
              expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
              expect(resposta.body).to.haveOwnProperty('_id')
    }

}