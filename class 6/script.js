
async function getMovieData(){
    try {
    let result =await fetch('https://ghibliapi.vercel.app/films');
    result = await result.json();
    
    result.map(function(movie){
        let moviebox = document.querySelector('#moviebox');
        let div = document.createElement('div');
        div.classList.add('col-12');
        div.classList.add('shadow');
        div.classList.add('my-3');
        div.classList.add('bg-white');
        div.innerHTML = `
        <h2>${movie.title}</h2>
        <h3>${movie.original_title}</h3>
        <img src=${movie.movie_banner} class="img-fluid" alt="">
        <p>${movie.description}</p>
        `
        moviebox.appendChild(div)
    })

    } catch (error) {
        console.log(error)
    }
}

getMovieData();