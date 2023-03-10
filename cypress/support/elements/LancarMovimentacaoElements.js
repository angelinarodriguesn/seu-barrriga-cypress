class LancarMovimentacaoElements {
    inputEmail = () => { return '#email' }  
    inputSenha = () => { return '#senha'}
    botaoEntrar = () => {return '.btn'}  
    
    menucriarMovimentacao = () => {return ':nth-child(3) > a'}
    dataMovimentacao = () => {return '#data_transacao'}
    dataPagamento = () => {return '#data_pagamento'}
    descricao = () => {return '#descricao'}
    interessado = () => {return '#interessado'}
    valor = () => {return '#valor'}
    checkboxPago = () => {return '#status_pago'}

    alert = () => {return '.alert'}    
} 
export default LancarMovimentacaoElements;
