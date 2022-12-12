import { useFormik} from 'formik'
import { Link } from 'react-router-dom';


const Addmovie = (props)=>{
    
    const formik= useFormik({
        initialValues:{
            name:'',
            rating:'',
            genre:'',

            
           
            




        }
    });
    console.table(formik.values)
    return(
       
        <div  className='m-5'>
        <form   onSubmit={(ev)=>props.addmovie2Array( ev,formik.values )}>
            <div>
                <label className='form-labe'> movie name</label>
                <input
                className="form-control"
                 type="text"
                 name="name"
                 id=""
                 value={formik.values.moviename}
                 placeholder='Please enter your movie Name'
                 onChange={formik.handleChange}
                  />
            </div>
            
            <div>
                <label className='form-labe'> rating </label>
                <input
                className="form-control"
                min={1}
                max={10}
                 type='number'
                 name="rating"
                 id="" 
                 value={formik.values.rating}
                 placeholder='please enter a number between 1-10'
                 onChange={formik.handleChange}
                 />
            </div>
            <div>
                <label className='form-labe'> genre </label>
              <select
                className="form-control"
                 name="genre"
                 id="" 
                 value={formik.values.genre}
                 onChange={formik.handleChange}
                 > <option value="">Enter your movie genre</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="horror">Horror</option>
                 </select>
            </div>
            
               
           

            <button type="submit" className=' mt-3 btn btn-primary' 
            >submit </button>


        </form>
    </div>
    


    );    
}

export default Addmovie;