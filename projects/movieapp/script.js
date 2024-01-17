// Here is your key: 8915f152

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=8915f152

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=cbecce34-c77f-46c4-a45e-a01f336747fd
// If you did not make this request, please disregard this email.

// `
// top - title, poster,runtime,pg,ratings
// title
// poster
// year
// runtime
// rating
// gener
// director

// ` 
let inputData = document.querySelector("#movieInput");

let btn = document.querySelector("#searchbtn");

let result = document.querySelector(".main");

let key = "8915f152"
let getMovieData = () =>{
    let movie_name = inputData.value;
    let url = `http://www.omdbapi.com/?t=${movie_name}&apikey=${key}`;

    if(movie_name.length<=0){
        result.innerHTML= `<h1>please enter a movie name</h1>`
    }
   
    else{
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                console.log(data.Title);

              if (data.Error=="Movie not found!"){
                result.innerHTML= `<h1>Movie not found</h1>`

              }
                result.innerHTML = `
                
                <div class="row row1">
        <div class="col-md">
            <div class="poster">
                <img src=" ${data.Poster}" class="img-fluid" alt="">
            </div>
        </div>
        <div class="col-md titlearea">
            <h2 > ${data.Title}</h2>
            <div class="ratings">
                <h4>Runtime- <span>${data.Runtime}</span> </h4>
                <h4>Rated-${data.Rated}</h4>
            </div>
            <div class="gener">${data.Genre}</div>
            <div class="imdb">
                <div class="row">
                    <div class="col">
                        <h5>Roten</h5>
                        <span>${data.Ratings[1].Value}/100</span>
                    </div>
                    <div class="col">
                        <h5>IMDB</h5>
                        <span>${data.imdbRating}/10</span>
                    </div>
                    <div class="col">
                        <h5>Metascore</h5>
                        <span>${data.Metascore}/100</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <hr>
    <div class="row row2">
        <div class="col-md">
            <p>Released --  <span class="details">${data.Released}</span> </p>
            <p>Director --  <span class="details">${data.Director}</span> </p>
            <p>Writer --  <span class="details">${data.Writer}</span> </p>
            <p>BoxOffice --  <span class="details">${data.BoxOffice}</span> </p>
            <p>Cast --  <span class="details">${data.Actors}</span> </p>
        </div>
        <div class="col-md plot">
            <h3>Plot</h3>
            <p>${data.Plot}</p>
        </div>
    </div>
</div>

                
                `
            })
    }
} 


btn.addEventListener("click", getMovieData)