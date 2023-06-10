import { useEffect, useState } from "react"

import axiosInstance from "../api/config";
import MovieCard from "./MovieCard";
import Header from "../components/common/header";
import Paginate from "../components/Paginate";

export default function Movies() {
    const [moviesDate,setMoviesData] = useState([]);
    const getAllMovies = ()=>{
        axiosInstance.get("/3/movie/popular?api_key=21c647fe89830dd907b4672aed732997",{
        }).then(res=> setMoviesData(res.data.results)).catch(err=> console.log(err));
    }
    const getPage = (page)=>{
        axiosInstance.get(`/3/movie/popular?api_key=21c647fe89830dd907b4672aed732997&page=${page}`,{
        }).then(res=> setMoviesData(res.data.results)).catch(err=> console.log(err));
    }
    useEffect(()=>{
        getAllMovies();
    },[]);
    const handleSearch =(word)=>{
        if(word === ""){
            getAllMovies();
        }else{
            axiosInstance.get(`/3/search/movie?api_key=21c647fe89830dd907b4672aed732997&query=${word}`).then(res=> setMoviesData(res.data.results)).catch(err=> console.log(err));

        }
      }
    
  return (
    <>
    <Header handleSearch={handleSearch}/>
     <div className="container">
        <div className="row py-4">
       {moviesDate.map(movie=>(
            <div className="col-md-4">
            <MovieCard movie={movie} key={movie.id}/>
            </div>  ))
       }
       </div>
       <Paginate getPage = {getPage}/>
    </div>
    </>
  )
}
