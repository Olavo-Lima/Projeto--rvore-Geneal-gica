const url = "localhost:6000/api" 

document.addEventListener('DOMContentLoaded', function () {
    const uploadform = document.getElementById('upload-form')
    const imageInput = document.getElementById('image-inpu')
    const uploadButton = document.getElementById('upload-button')
    const uploadStatus = document.getElementById('upload-status')
})

uploadButton.addEventListener('click', () => {
    const file = imageInput.files[0] 

    if (file) {
        const formData = new FormData()
        formData.append('image', file)

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            uploadStatus.innerHTML = 'Erro ao fazer o upload'
        })
    } else {
        uploadStatus.innerHTML = 'Selecione um arquivo para fazer upload'
    }
})