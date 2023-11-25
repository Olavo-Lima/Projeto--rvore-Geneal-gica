document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm')
    const errorElement = document.getElementById('error')

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = document.getElementById('password').value

        if (password === '161960') {
            location.href = "/HTML e CSS/Recordações/HTML e CSS/HOME/home.html"
        } else {
            alert ('Senha ou usário incorretos')
        }
    })
})


        