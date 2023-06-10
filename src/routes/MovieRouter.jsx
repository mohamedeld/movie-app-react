import { Route,Routes } from "react-router-dom";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails";
import PageNotFound from "../pages/PageNotFound";
import Pricing from "../pages/Pricing";

export default function MovieRouter() {
  return (
    <>
        <Routes>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<MoviesDetails/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
        
  )
}
