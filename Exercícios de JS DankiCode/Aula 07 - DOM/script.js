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
