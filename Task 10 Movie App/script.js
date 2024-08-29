document.addEventListener('DOMContentLoaded', () => {
    const movieForm = document.getElementById('movieForm');
    const movieList = document.getElementById('movieList');
    let movies = [];

    movieForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const director = document.getElementById('director').value;
        const year = document.getElementById('year').value;

        const movie = {
            title,
            director,
            year
        };

        movies.push(movie);
        displayMovies();
        movieForm.reset();
    });

    function displayMovies() {
        movieList.innerHTML = '';
        movies.forEach((movie, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${movie.title} (${movie.year}) - Directed by ${movie.director} 
                            <button onclick="removeMovie(${index})">Remove</button>`;
            movieList.appendChild(li);
        });
    }

    window.removeMovie = function(index) {
        movies.splice(index, 1);
        displayMovies();
    };
});
