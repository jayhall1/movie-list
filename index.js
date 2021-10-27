console.log ('hello world')
console.log('test')


const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span');
    movieTitle.addEventListener('click', crossOffMovie)
    let unorderedList = document.querySelector('ul')

    movieTitle.textContent = inputField.value
    console.log(movieTitle)
    movie.appendChild(movieTitle)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    unorderedList.appendChild(deleteBtn)
    unorderedList.appendChild(movie)
    console.log('test2')
    inputField.value = ''
    deleteBtn.addEventListener('click', deleteMovie)
}
const deleteMovie = (event) => {
    event.target.parentNode.remove()
    MessageChannel.textContent = 'movie deleted'
}

let form = document.querySelector('form')
form.addEventListener('submit', addMovie)

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')=== true){
        Message.textContent = 'movie watched' 

        } else {
            message.textContent = 'movie added back'
        }
    }


