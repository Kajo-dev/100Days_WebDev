let inp = document.getElementById('text')
let paragraf = document.querySelector('p')

let maxchar = '60'
let cur_char = 0

function returnUser(event){
    let value_event = event.target.value
    value_event.toString
    paragraf.innerHTML = value_event.length + '/' + maxchar
}

inp.addEventListener('input',returnUser)


