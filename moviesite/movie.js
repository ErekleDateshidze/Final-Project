const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c06014e50bb1a95aac845fc1b92e1a2'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7c06014e50bb1a95aac845fc1b92e1a2&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const moviEl = document.createElement('div')
        moviEl.classList.add('movie')

        moviEl.innerHTML = `
        <img src= " ${IMG_PATH + poster_path}" alt=" ${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class = "${getClassByRate(vote_average)}"> ${vote_average}</span>
        </div>
        <div class="oveview">
        <h3>Overview</h3>
        ${overview}
        </div>
    `
        main.appendChild(moviEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    }
    else if (vote >= 7) {
        return 'orange'
    }
    else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== ' ') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ' '
    }
    else {
        window.location.reload()
    }
})