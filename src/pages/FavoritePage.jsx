import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Header from "../components/common/header";

export default function FavoritePage(){
    const favorites = useSelector((state) =>{
        return state.favorites.favorites;
    });
    
    return (
        <>  
        <Header/>
                <div className="container">
                    <div className="row">
            {
                favorites.map(favorite=>(
                    <div className="col-md-4" key={favorite.id}>
                               <div className="card">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${favorite.backdrop_path}`} alt="Card image cap"/>
            <div className="card-body">
                
            <h5 className="card-title">{favorite.original_title}</h5>
            <p className="card-text">{favorite.overview}</p>
            <p className="card-text"><small className="text-muted">{favorite.release_date}</small></p>
            </div>
            <Link to={`/movies/${favorite.id}`} className="btn btn-primary" >Go To Details</Link>
        </div>
                            </div>
                ))
            }
                </div>
                </div>
        </>
    )
}
