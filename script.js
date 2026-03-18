const movieForm = document.getElementById('movie-form');
const movieList = document.getElementById('movie-list');
const titleInput = document.getElementById('title');
const yearInput = document.getElementById('year');
const clearBtn = document.getElementById('clear-all');

const appendNewItem = (item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title} (${item.year})`;
    movieList.appendChild(li);
};

const renderMovies = () => {
    movieList.innerHTML = "";
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.forEach(appendNewItem);
};

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newMovie = {
        title: titleInput.value,
        year: yearInput.value
    };

    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));

    titleInput.value = "";
    yearInput.value = "";

    renderMovies();
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('movies');
    renderMovies();
});

renderMovies();