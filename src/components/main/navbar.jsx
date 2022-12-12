import  React  from 'react';
import Movies from './movies';
import { Link,Route,Router } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
        
        <Link to="/">   <button class="btn btn-warning btn-lg">Moviely</button></Link>
         
         <Link to="/addmovie"> <a href="#" class="link-warning">Add Movie </a> </Link>
          <span>
            <div class="dropdown">
              <select onChange={(ev)=>props.changePage(ev.target.value)}
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <option > Select No. Movies in page:  </option>
               <option value='6'> 6 Movies in page </option>
               <option value='8' >   8 Movies in page </option>
              </select>
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
