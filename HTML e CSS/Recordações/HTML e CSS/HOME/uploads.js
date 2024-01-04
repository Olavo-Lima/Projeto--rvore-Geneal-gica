const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolha uma Imagem";
pictureImage.innerHTML = pictureImageTxt;
const fileInput = document.getElementById('picture__input');

fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost3000/upload', {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert('Imagem enviada com sucesso!');
        } else {
            alert.error('Erro ao enviar imagem.');
        }
    } catch (error) {
        console.error('Erro ao enviar imagem:', error);
    }
});

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
