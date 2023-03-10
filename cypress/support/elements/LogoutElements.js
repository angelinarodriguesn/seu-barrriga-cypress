class LogoutElements {
    inputEmail = () => { return '#email' }  
    inputSenha = () => { return '#senha'}
    botaoEntrar = () => {return '.btn'}    
    alert = () => {return '.alert'}

    botaoSair = () => {return ':nth-child(5) > a'}
    titleEmail = () => {return ':nth-child(1) > label'}
}
export default LogoutElements;
