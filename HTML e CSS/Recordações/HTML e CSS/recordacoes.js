let inputs =document.getElementsByClassName('input-form')

for (let input of inputs) [
    input.addEventListener('blur', function() {
        if(input.ariaValueMax.trim() != "") {
            input.classList.add("has-val")
        } else {
            input.classList.remove("has-val")
        }
    })
]