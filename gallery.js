let image = document.querySelectorAll('.image');
let display = document.querySelector('.display');
let disimage = document.querySelector('.displayimg')

image.forEach(image => {
    image.addEventListener('click', () => { 
        display.style.display = "flex";
        disimage.src = `${image.src}`
    })
})

display.addEventListener('click', () => {
    display.style.display = "none";
})