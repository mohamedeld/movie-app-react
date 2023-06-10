import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/config";

export default function MoviesDetails() {
    const params = useParams();
    const navigate = useNavigate()
    const [movieDetail,setMovieDetail] = useState({});
    const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`;
    
    useEffect(()=>{
        axiosInstance.get(`/3/movie/${params.id}?api_key=21c647fe89830dd907b4672aed732997`).then(res=>setMovieDetail(res.data)).catch(err=>console.log(err));
    },[])
    console.log(movieDetail)
  return (
    <div className="container">
        <div className="card" key={movieDetail.id}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{movieDetail.original_title}</h5>
            <p className="card-text">{movieDetail.overview}</p>
            <p className="card-text"><small className="text-muted">{movieDetail.release_date}</small></p>
            </div>
            <button className="btn btn-primary" onClick={()=> navigate("/movies")}>Go To Home</button>
        </div>

    </div>
  )
}
