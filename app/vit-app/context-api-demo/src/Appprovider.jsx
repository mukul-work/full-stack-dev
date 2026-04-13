// import {useState} from 'react';
// import{ThemeContext,UserContext,LangContext} from './context';

// const Appprovider=({children})=>{
//     const [theme,setTheme]=useState("light");
//     const [user,setUser]=useState({name:"guest"})
//     const [lang,setLang]=useState("en");

//     const toggleTheme=()=>
//     {
//         setTheme(prev=> prev==="light"?"dark":"light");
//     }
// return(
// <ThemeContext.Provider value={{theme,toggleTheme}}>
//     <UserContext.Provider value={{user,setUser}}>
//         <LangContext.Provider value={{lang,setLang}}>
//             {children}
//         </LangContext.Provider>

//     </UserContext.Provider>
// </ThemeContext.Provider>
// )
// }

// export default Appprovider;

import { useReducer } from 'react';
import { ThemeContext, UserContext, LangContext } from './context';


function reducer(state, action) { //REDUCER decides how state changes whereas ACTION tells what to do
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            };

        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            };

        case "SET_LANG":
            return {
                ...state,
                lang: action.payload
            };

        default:
            return state;
    }
}

const Appprovider = ({ children }) => {
    const initialState = {
        theme: "light",
        user: { name: "Guest" },
        lang: "en"
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            <UserContext.Provider value={{ state, dispatch }}>
                <LangContext.Provider value={{ state, dispatch }}>
                    {children}
                </LangContext.Provider>

            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

export default Appprovider;
