class MovimentacaoElements {
    inputEmail = () => { return '#email' }  
    inputSenha = () => { return '#senha'}
    botaoEntrar = () => {return '.btn'}     
    
    menuContas = () => { return '.dropdown-toggle' }
    submenuListar = () => {return '.dropdown-menu > :nth-child(2) > a'}     
    listaContas = () => {return '#tabelaContas'}
    iconExclusao = () => {return '[href="/removerConta?id=1636178"] > .glyphicon'}
    alert = () => {return '.alert'}

    submenuAdcionar = () => {return '.dropdown-menu > :nth-child(1) > a'}
    inputnomeConta = () => {return '#nome'}
    botaoSalvar = () => {return '.btn'}         
}
export default MovimentacaoElements;