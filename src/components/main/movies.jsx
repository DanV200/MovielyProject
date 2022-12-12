import Movie from "./movie";
import ".././main/style.css";
import { useState } from "react";

const Movies = (props) => {
  const { myMovies, myDelete, mylike, itemsInPage } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const start = (currentPage - 1) * itemsInPage;
  const end = start + itemsInPage;
  const moviesInPage = myMovies.slice(start, end);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>rating</th>
            <th>genre</th>
            <th>Delete</th>
            <th> Like</th>
          </tr>
        </thead>
        <tbody>
          {moviesInPage.map((mv) => (
            <Movie
              key={mv.id}
              id={mv.id}
              name={mv.name}
              rating={mv.rating}
              genre={mv.genre}
              liked={mv.liked}
              myDelete={() => myDelete(mv.id)}
              mylike={() => mylike(mv.id)}
            />
          ))}
        </tbody>
      </table>

      <nav aria-label="">
        <ul className="pagination pagination-lg justify-content-center ">
          <li
            
            onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
          >
            <span class="page-link">-</span>
          </li>
          <li
          class="page-item active"
          
           
          >
            <a class="page-link">{currentPage}</a>
          </li>
          <li class="page-item"  onClick={() => {
                if (currentPage < myMovies.length / itemsInPage)
                  setCurrentPage(currentPage + 1);
              }}>
            <a class="page-link">+</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Movies;
