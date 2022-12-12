const Movie=(props)=>{
    const{id,name,rating,genre,liked,myDelete,mylike}=props
    let icon1='';
   
    if(liked){
        icon1="bi bi-arrow-through-heart-fill"
    }else{
        icon1="bi bi-arrow-through-heart"
    }
        return ( 
             <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{rating}</th>
            <th>{genre}</th>
            <th><button  id={id} className="btn btn-danger btn-sm"
            onClick={()=>myDelete()}>Delete</button></th>
            <th> <i onClick={()=>mylike(id)}><i style={{fontSize:25}} className={icon1}></i></i>  </th>
            </tr>
        );
    }


 
export default Movie;