import { Link } from "react-router-dom";

export default function MovieCard({movie,key}) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  return (
    <>
        <div className="card" key={key}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.overview}</p>
            <p className="card-text"><small className="text-muted">{movie.release_date}</small></p>
            </div>
            <Link to={`/movies/${movie.id}`} className="btn btn-primary" >Go To Details</Link>
        </div>

    </>
  )
}
