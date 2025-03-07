import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import interstellar from "./images/interstellar.jpg"
import placeholder from "./images/placeholder.png";

const movies = [
  { id: 1, title: "Interstellar", description: "Interstellar is a 2014 epic science fiction film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan. ",image: interstellar},
  { id: 2, title: "Chhava", description: "This is the description for Movie 2.",image:"https://m.media-amazon.com/images/M/MV5BMWI4N2Y5NWUtNzEwOC00YjYzLWEzY2ItN2YwYTIxYzBjZGZmXkEyXkFqcGc@._V1_.jpg"},
  { id: 3, title: "KGF", description: "This is the description for Movie 2." ,image:"https://m.media-amazon.com/images/M/MV5BZmQzZjVkZTUtYjI4ZC00ZDJmLWI0ZDUtZTFmMGM1Mzc5ZjIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
  { id: 4, title: "Avengers: Endgame", description: "This is the description for Movie 2." ,image:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"},

];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
     <img src={movie.image} alt="" className="movie-image"/>
      <p>{movie.description}</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;