//Add Click
const inserirHtml = document.getElementById('root')

inserirHtml.addEventListener('click', () => {
    const novoHtml = `
    <label class="picture" for="picture__input" tabIndex="0">
    <span id="picture__image"></span>
    </label>

    <input type="file" name="picture__input" id="picture__input">
    `
    inserirHtml.innerHTML = novoHtml
})

    //ADD Img
    const inputFile = document.querySelector("#picture__input");
    const pictureImage = document.querySelector(".picture__image");
    const pictureImageTxt = 'Escolha uma imagem'

    pictureImage.innerHTML = pictureImageTxt    
    
    inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture__img");

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageTxt;
        }
    }); 


    