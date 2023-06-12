import { Route,Routes } from "react-router-dom";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails";
import PageNotFound from "../pages/PageNotFound";
import Pricing from "../pages/Pricing";
import FavoritePage from "../pages/FavoritePage";
import { UserForm } from "../pages/UserForm";

export default function MovieRouter() {
  return (
    <>
        <Routes>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<MoviesDetails/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/favorite" element={<FavoritePage/>}/>
            <Route path="/form" element={<UserForm/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
        
  )
}
