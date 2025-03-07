import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import movie1 from "./images/interstellar.jpg";
 import placeholder from "./images/placeholder.png";


const movies = [
  { id: 1, title: "Interstellar", image: movie1 },
  { id: 2, title: "Chhava", image: "https://m.media-amazon.com/images/M/MV5BMWI4N2Y5NWUtNzEwOC00YjYzLWEzY2ItN2YwYTIxYzBjZGZmXkEyXkFqcGc@._V1_.jpg" },
  { id: 3, title: "KGF", image: "https://m.media-amazon.com/images/M/MV5BZmQzZjVkZTUtYjI4ZC00ZDJmLWI0ZDUtZTFmMGM1Mzc5ZjIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 4, title: "Avengers: Endgame", image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg" },
  { id: 5, title: "Movie 5", image: placeholder },
  { id: 6, title: "Movie 6", image: placeholder },
  { id: 7, title: "Movie 7", image: placeholder },
  { id: 8, title: "Movie 8", image: placeholder },
];

function MovieList() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Movie List</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", justifyItems: "center",gap: "10px"  }}>
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: "pointer", textAlign:"center" }}>
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;