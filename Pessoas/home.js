const h2Elements = document.querySelectorAll('h2');

for (const h2Element of h2Elements) {
    h2Element.addEventListener('click', function() {
        window.location.href = '/HTML e CSS/index.html';
    });
}

const login = document.getElementById('login')

login.addEventListener('click', (event) => {
    event.forEach(element => {
        location.href = './Recordações/HTML e CSS/Login e Validação/login.html'
    });
})
