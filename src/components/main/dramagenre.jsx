import React, { Component } from 'react';
import Movie from './movie';
import  '.././main/style.css'
class Dramagenre extends Component {
    
    render() { 
        const {myMovies,myDelete,mylike}=this.props
        let Movies=myMovies.filter((movie)=>movie.genre=='drama')
        return ( 
            <div>
                <table className='table'>  
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
                {Movies.map(mv=>
               <Movie
                key={mv.id}
                id={mv.id}
                name={mv.name}
                rating={mv.rating}
                genre={mv.genre}
                liked={mv.liked}
                myDelete={()=>myDelete(mv.id)}
                mylike={()=>mylike(mv.id)}
               
               /> 
                    
                 
                )
                }
                </tbody>
                 </table>
              
                
                    
            </div>
               
            
            
            
        );
    }
}
 
export default Dramagenre ;