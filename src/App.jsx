import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieRouter from './routes/MovieRouter';
import LanguageContext from './Context/LangContext';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import "./App.css";

function App() {
  const [contextLang,setContextLang] = useState('en');

  return (
    <div className={contextLang === "en"?"text-left":"text-right"}>
    <BrowserRouter>
      <LanguageContext.Provider value={{contextLang,setContextLang}}>
        <MovieRouter/>
      </LanguageContext.Provider>
    </BrowserRouter>
    </div>
  )
}

export default App
