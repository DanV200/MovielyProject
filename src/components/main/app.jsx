import React, { Component } from 'react';
import Categories from "./sider";
import Navbar from './navbar'

import image from '../images/movie.jpg';
import Main from './main';

class App extends Component {
    state = { 
        moviesList: [
            { id: 1, name: "taken", rating: 4.8, genre: "action" },
            {id: 2,name: "dumb and dumber to",rating: 3.5,genre: "comedy",liked: false,},
            { id: 3, name: "gosto", rating: 4.7, genre: "comedy", liked: false },
            {id: 4,name: "kongfu panda",rating: 4.9,genre: "comedy",liked: false},
            {id: 5,name: "shrek",rating:3.8,genre: "fantasy" , liked: false},
            { id: 6,  name: "ironman",rating:3.8,genre: "fantasy" , liked: false},
            { id: 7, name: "f&f3", rating:3.8, genre: "action", liked: false},
            {id: 8,name: "titanic",rating:3.8,  genre: "drama", liked: false},
            {id:9,name:"the exorcist",rating:4.2,genre:"horror", liked: false},
            
          ],
          movieIdList:10,
          itemsInPage:4,

          actionCat:false,
          comedyCat:false,    //כלל המשתנים שנמצאים כאן קשורים לפונקציה 
          dramaCat:false,
          fantasyCat:false,
          horrorCat:false

     } 
    render() { 

        let moviesList=this.state.moviesList;
     if(this.state.actionCat)
      moviesList=moviesList.filter((movie)=>movie.genre=='action')
     if(this.state. comedyCat)
      moviesList=moviesList.filter((movie)=>movie.genre=='comedy')
     if(this.state.dramaCat)
      moviesList=moviesList.filter((movie)=>movie.genre=='drama')
     if(this.state.fantasyCat)
      moviesList=moviesList.filter((movie)=>movie.genre=='fantasy')
     if(this.state.horrorCat)
      moviesList=moviesList.filter((movie)=>movie.genre=='horror')
      
    return (
      <div style={{backgroundImage:`url(${image})`} } id="main">
        <div className="container text-center">
          <div className="row">
            <div className="col"> <Navbar
            
                changePage={(num)=>this.changePage(num)}            
            /></div>
          </div>
          <div className="row">
            <div className="col-1">
              <Categories 
             actionchangebul={()=>this.actionchangebul()}
             comedychangebul={()=>this.comedychangebul()} 
             dramachangebul={()=>this.dramachangebul()} 
             fantasychangebul={()=>this.fantasychangebul()} 
             horrorchangebul={()=>this.horrorchangebul()} 
             actionAmount={()=>this.actionAmount()}
             comedyAmount={()=>this.comedyAmount()} 
             dramaAmount={()=>this.dramaAmount()} 
             fantasyAmount={()=>this.fantasyAmount()} 
             horrorAmount={()=>this.horrorAmount()}
             />
            </div>
            <div className="col">
                
              <Main
                myMovies={moviesList}
                myDelete={(id) => this.handleDelete(id)}
                mylike={(id)=>this.handlelike(id)}
                addmovie2Array={(ev,values)=>this.pushMovieArray(ev,values)}
                itemsInPage={this.state.itemsInPage}

                
              />
              
            </div>
          </div>
          
          </div>
        </div>
    


        );
    }

    handleDelete = (id) => {
        const moviesList = this.state.moviesList.filter((val) => val.id !== id);//פוקנציה שכשלוחצים על דליט זה מוחק סרט
        this.setState({ moviesList });
      }
    
    handlelike=(id)=>{
      let i=this.state.moviesList.findIndex(movie=>movie.id==id)
      let moviesList=this.state.moviesList
      moviesList[i].liked=!moviesList[i].liked
      this.setState({moviesList})
      
    }
    
    
      actionchangebul=()=>{
        this.setState({actionCat:!this.state.actionCat}) //משנה את הערך הבוליאני של המשתנה אקשןקאט
        console.log(this.state.actionCat);
    }
    comedychangebul=()=>{
        this.setState({comedyCat:!this.state.comedyCat})
    }
    dramachangebul=()=>{
        this.setState({dramaCat:!this.state.dramaCat})
    }
    fantasychangebul=()=>{
        this.setState({fantasyCat:!this.state.fantasyCat})
    }
    horrorchangebul=()=>{
        this.setState({horrorCat:!this.state.horrorCat})
    }
     actionAmount=()=>{
      let action =this.state.moviesList.filter((movie)=>movie.genre=='action');
      return action.length;
     }
     dramaAmount=()=>{
      let drama =this.state.moviesList.filter((movie)=>movie.genre=='drama');
      return drama.length;
     }
     comedyAmount=()=>{
      let comedy =this.state.moviesList.filter((movie)=>movie.genre=='comedy');
      return comedy.length;
     }
     fantasyAmount=()=>{
      let fantasy =this.state.moviesList.filter((movie)=>movie.genre=='fantasy');
      return fantasy.length;
     }
     horrorAmount=()=>{
      let horror =this.state.moviesList.filter((movie)=>movie.genre=='horror');
      return horror.length;
     }
    pushMovieArray=(ev,values)=>{
        ev.preventDefault();
        this.state.moviesList.push({id:this.state.movieIdList,...values})
        this.state.movieIdList++
        this.setState({
            moviesList: this.state.moviesList,
            movieIdList:this.state.movieIdList
            
        })
       
    }
    changePage=(num)=>{
        this.setState({itemsInPage: parseInt(num)})
    }
}
 
export default App;
