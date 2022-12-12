
import { Route, Routes, Switch } from 'react-router-dom';
import React from 'react';
import Movies from './movies';
import Movie from './movie';
import AddMovie from './addmovie';
import Actiongenre from './actiongenre';
import Comedygenre from './comedygenre';
import Dramagenre from './dramagenre';
import Fantasygenre from './fantasygenre';
import Horrorgenre from './horrorgenre';




 


    const Main=(props)=>{

      return (
      <React.Fragment>
        <Routes>
          <Route  path="/"  element={<Movies {...props} />}/>
          <Route  path="/actiongenre"  element={<Actiongenre {...props} />}/>
          <Route  path="/comedygenre"  element={<Comedygenre {...props} />}/>
          <Route  path="/dramagenre"  element={<Dramagenre {...props} />}/>
          <Route  path="/fantasygenre"  element={<Fantasygenre {...props} />}/>
          <Route  path="/horrorgenre"  element={<Horrorgenre {...props} />}/>
          <Route  path="/addmovie"  element={<AddMovie {...props} />}/>
        </Routes>
      </React.Fragment>
    );
  };
  
 



export default Main;

