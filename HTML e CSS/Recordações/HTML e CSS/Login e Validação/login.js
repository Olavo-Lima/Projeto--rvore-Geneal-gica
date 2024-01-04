document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm')
    const errorElement = document.getElementById('error')
    
    var senha = '161960'

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = document.getElementById('password').value

        if (password === senha) {
            location.href = "/HTML e CSS/Recordações/HTML e CSS/HOME/home.html"
        } else {
            alert ('Senha ou usário incorretos')
        }
    })
})


        