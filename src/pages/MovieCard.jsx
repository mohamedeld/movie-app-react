import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../store/Slices/star";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function MovieCard({movie}) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    const favorites = useSelector((state)=>{
      
      return state.favorites.favorites;
    });
    // console.log(typeof favorites)
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
      setIsFavorite(Array.isArray(favorites) && favorites.some(fav => fav.id === movie.id));
    }, [favorites, movie.id]);
    // const isFavorite = favorites.some(fav => fav.id === movie.id);
    console.log(isFavorite); 
    const dispatch = useDispatch();
    const handleToggle = ()=>{
      dispatch(toggleFavourite(movie));
    }

  return (
    <>
        <div className="card" key={movie.id}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <button onClick={handleToggle} style={{backgroundColor:isFavorite?"yellow":"transparent"}}><FontAwesomeIcon icon={faStar} /></button>
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.overview}</p>
            <p className="card-text"><small className="text-muted">{movie.release_date}</small></p>
            </div>
            <Link to={`/movies/${movie.id}`} className="btn btn-primary" >Go To Details</Link>
        </div>

    </>
  )
}
