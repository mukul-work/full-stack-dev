// import { useContext } from "react";
// import{ThemeContext,UserContext,LangContext} from './context';

// const App=()=>{

//   const {theme,toggleTheme}=useContext(ThemeContext);
//   const {user,setUser}=useContext(UserContext);
//   const {lang,setLang}=useContext(LangContext);

//   return(

// <div
//   style={{
//     background: theme === "light" ? "#fff" : "#333",
//     color: theme === "light" ? "#000" : "#fff",
//     padding: "20px",
//   }}
// >
//       <p>Theme:{theme}</p>
//       <p>User:{user.name}</p>
//       <p>Lang:{lang}</p>

//       <button onClick={toggleTheme}>ThemeChange</button>
//       <button onClick={()=>setLang("en")}>en</button>
//       <button onClick={()=>setLang("fr")}>fr</button>



//     </div>
//   )
// }

// export default App;

import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from './context';

const App = () => {

  // const { state, dispatch } = useContext(ThemeContext);
  const { state, dispatch } = useContext(GlobalContext);
  const { theme, user, lang } = state;

  return (

    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <p>Theme:{theme}</p>
      <p>User:{user.name}</p>
      <p>Lang:{lang}</p>

      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>ThemeChange</button>
      <button onClick={() => dispatch({ type: "SET_LANG", payload: "en" })}>en</button>
      <button onClick={() => dispatch({ type: "SET_LANG", payload: "fr" })}>fr</button>

    </div>
  )
}

export default App;
