var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', mouseEntrou)
a.addEventListener('mouseout', mouseSaiu)

function clicar(){
    a.innerHTML = 'Clicou'
    a.style.backgroundColor = 'black'
}

function mouseEntrou(){
    a.innerHTML = 'Entrou'
    a.style.backgroundColor = 'green'
}

function mouseSaiu(){
    a.innerHTML = 'Saiu'
    a.style.backgroundColor = 'red'
}










/*
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', mouseEntrou)
a.addEventListener('mouseout', mouseSaiu)

function clicar(){
    a.innerText = "Clicou"
    a.style.backgroundColor = "black"
}

function mouseEntrou(){
    a.innerText = 'Entrou'
    a.style.backgroundColor = "green"
}

function mouseSaiu(){
    a.innerText = 'Saiu'
    a.style.backgroundColor = "red"
}
*/