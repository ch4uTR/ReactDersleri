import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    Duration: 120,
    Rating: 8.8,
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    Duration: 180,
    Rating: 9.2,
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    Duration: 90,
    Rating: 8.9,
  },
  ,
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    Duration: 75,
    Rating: 7.9,
  },
];

const selected_movie_list = [
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    Duration: 180,
    Rating: 9.2,
  },
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    Duration: 120,
    Rating: 8.8,
  },
];

function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);

  function handleSelectMovie(movie) {
    setSelectedMovies((selectedMovies) => [...selectedMovies, movie]);
  }

  return (
    <>
      <nav className="bg-primary text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">Movie App</div>
            <div className="col-4">
              <input
                type="text"
                lassName="form-fontrol"
                placeholder="Film arayın"
              ></input>
            </div>
            <div className="col-4 text-end">
              <strong>5</strong> kayıt bulundu
            </div>
          </div>
        </div>
      </nav>
      <main className="container">
        <div className="row mt-2">
          <div className="col-md-9">
            <div className="movie-list">
              <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4">
                {movies.map((m) => (
                  <div className="col mb-2" key={m.Id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={m.Poster}
                        alt={m.Title}
                      ></img>
                      <div className="card-body">
                        <h6 className="card-title"> {m.Title} </h6>
                        <div>
                          <i class="fa-regular fa-calendar-days me-1"></i>
                          <span> {m.Year} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="movie-list">
              {selectedMovies.map((m) => (
                <div className="card mb-2" key={m.Id}>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={m.Poster}
                        alt={m.Title}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h6 className="card-title">{m.Title}</h6>
                        <div>
                          <span>
                            <i
                              className="fa-solid fa-star me-1"
                              style={{ color: "#FFD43B" }}
                            ></i>
                            {m.Rating}
                          </span>
                          <span className="ms-3">
                            <i
                              className="fa-solid fa-hourglass-start me-1"
                              style={{ color: "#FFD43B" }}
                            ></i>
                            {m.Duration} min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
