let inp = document.getElementById('text')
let paragraf = document.querySelector('p')

let maxchar = '60'
let cur_char = 0

function returnUser(){
    cur_char =  cur_char + 1
    cur_char.toString
    paragraf.innerHTML = cur_char + '/' + maxchar
}

inp.addEventListener('input',returnUser)


