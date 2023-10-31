
const inserirHtml = document.getElementById('root')

inserirHtml.addEventListener('click', () => {
    const novoHtml = `
    <form action="/HTML e CSS/Recordações/Uploads/uploads.js" method="post" enctype="multipart/form-data">
        <input type="file" name="imagem" id="imagem">
        <input type="submit" value="Enviar Imagem">
    </form>
    `
    inserirHtml.innerHTML = novoHtml
})

    