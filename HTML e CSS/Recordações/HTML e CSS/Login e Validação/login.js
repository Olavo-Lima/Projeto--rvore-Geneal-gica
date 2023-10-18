document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm')
    const errorElement = document.getElementById('error')

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        //Verifique se o nome de usuário e senha estão corretos (substia isso pelo mecanismo de autenticação)
        const username = 'usuario' // Substitua pelo nome de usuário correto
        const password = 'senha123'// substitua pela senha correta 

        const inputUsername = loginForm.elements.username.value;
        const inputPassword = loginForm.elements.password.value;

        if (inputUsername === username && inputPassword === password) {
            // Redirecione o usuário para a página de sucesso ou excute outra ação
            location.href 
        }
    })
})