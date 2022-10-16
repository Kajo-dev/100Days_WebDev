//create editing

let nowy = document.createElement('a')

nowy.href = 'kajo'
nowy.textContent = 'super'

let link = document.getElementById('link')

link.append(nowy)

//remove

let h1 = document.querySelector('h1')

h1.remove()

//move 

let paragraf = document.querySelector('p')

paragraf.parentElement.append(paragraf)

// innerHTML

paragraf.innerHTML