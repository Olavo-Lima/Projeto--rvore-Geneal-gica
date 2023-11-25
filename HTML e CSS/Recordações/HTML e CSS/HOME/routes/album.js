const natal = document.getElementById('natal')
const familia = document.getElementById('familia')
const jem = document.getElementById('jem')
const junina = document.getElementById('junina')
const home = document.getElementById('retornar')

natal.addEventListener('click', () => {
    location.href = "./albuns/natal.html"
})

familia.addEventListener('click', () => {
    location.href = "./albuns/familia.html"
})

jem.addEventListener('click', () => {
    location.href = "./albuns/jem.html"
})

junina.addEventListener('click', () => {
    location.href = "./albuns/junina.html"
})

home.addEventListener('click', () => {
    location.href = '/HTML e CSS/index.html'
})
