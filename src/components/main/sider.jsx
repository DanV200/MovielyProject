import {Link}  from 'react-router-dom';

const Categories = (props) => {

  const {
    
    actionAmount,
    comedyAmount,
    dramaAmount,
    fantasyAmount,
    horrorAmount
  } =props;
  
  return (
    <div>
      <Link to='/actiongenre'> <button
      
        type="button"
        class="btn btn-primary position-relative m-2"
      >
        Action
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {actionAmount()}
          <span class="visually-hidden"></span>
        </span>
      </button>
      </Link>
      <Link to="/comedygenre">
      <button
        type="button"
        class="btn btn-primary position-relative m-2"
      >
        Comedy
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {comedyAmount()}
          <span class="visually-hidden"></span>
        </span>
      </button>
      </Link>
      <Link to="/dramagenre">
      <button
         
        type="button"
        class="btn btn-primary position-relative m-2"
      >
        Drama
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {dramaAmount()}
          <span class="visually-hidden"></span>
        </span>
      </button>
      </Link>
      <Link to="/fantasygenre">
      <button
        
        type="button"
        class="btn btn-primary position-relative m-2"
      >
        Fantasy
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {fantasyAmount()}
          <span class="visually-hidden"></span>
        </span>
      </button>
      </Link>
      <Link to="/horrorgenre">
      <button
         
        type="button"
        class="btn btn-primary position-relative m-2"
      >
        Horror
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {horrorAmount()}
          <span class="visually-hidden"></span>
        </span>
      </button>
      </Link>
    </div>
  );
};
export default Categories;
