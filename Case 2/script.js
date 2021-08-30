const navLinks = document.querySelectorAll('.menu a[href^="#"]')

console.log(navLinks)

// Identificando o clique do usuario em cada um dos links
navLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

function scrollToSection(event){
    //Previne o comportamento padrão do link
    event.preventDefault()
    const distanceFromTop = getDistanceFromTop(event.currentTarget) - 30 // 30 é o tamanho do menu

    Scroll(distanceFromTop)
}

// Achar a distancia de rolagem
function getDistanceFromTop(element){
    let id = element.getAttribute('href')

    return document.querySelector(id).offsetTop
}

// Função de rolagem
function Scroll(distanceFromTop){
    // funcao nativa do browser
    window.scroll({
        top: distanceFromTop,
        behavior: 'smooth'
    })
}