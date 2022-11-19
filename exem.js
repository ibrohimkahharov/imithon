let lorem = document.querySelector(".int")
let close = document.querySelector('.clo')
let lorem2 = document.querySelector(".chov")

function game(){
    lorem.classList.toggle("active")
}

close.onclick = function(){
    lorem.classList.remove('active');
}

function tap(){
lorem2.classList.toggle('chOv')
}



