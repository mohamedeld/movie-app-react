
import { useContext } from "react";
import LanguageContext from "../../Context/LangContext"

export const ContextSwitcherLang = () => {
    const {contextLang,setContextLang} = useContext(LanguageContext);

  return (
    <button onClick={()=> setContextLang(contextLang === 'en'?'ar':'en')} className="btn btn-primary">{contextLang}</button>
  )
}
