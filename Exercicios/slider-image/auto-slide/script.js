let celularPreto = document.getElementById('celular-preto')
let celularVioleta = document.getElementById('celular-violeta')
let celularCreme = document.getElementById('celular-creme')
let celularVerde = document.getElementById('celular-verde')

let msg = document.querySelector('.msg')

function corPreto(){
    msg.innerHTML='preto'

    celularPreto.style.display='flex'
    celularVioleta.style.display='none'
    celularCreme.style.display='none'
    celularVerde.style.display='none'
}

function corVioleta(){
    msg.innerHTML='violeta'

    celularPreto.style.display='none'
    celularVioleta.style.display='flex'
    celularCreme.style.display='none'
    celularVerde.style.display='none'
}

function corCreme(){
    msg.innerHTML='Creme'

    celularPreto.style.display='none'
    celularVioleta.style.display='none'
    celularCreme.style.display='flex'
    celularVerde.style.display='none'
}

function corVerde(){
    msg.innerHTML='Verde'

    celularPreto.style.display='none'
    celularVioleta.style.display='none'
    celularCreme.style.display='none'
    celularVerde.style.display='flex'
}