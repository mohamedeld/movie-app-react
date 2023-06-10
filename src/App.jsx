import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/common/header';
import MovieRouter from './routes/MovieRouter';
import Pricing from './pages/Pricing';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <MovieRouter/>
    </BrowserRouter>
    </>
  )
}

export default App
