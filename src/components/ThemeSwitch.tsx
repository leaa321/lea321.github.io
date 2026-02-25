import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function(){
     const[theme, setTheme] = useState(()=> {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'dark';
  });

    useEffect(() => {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
      localStorage.setItem('mode',theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return(
        <>
         <button className="icon darkmode" id="toggleMode" onClick={toggleTheme}>
                {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
              </button>
              </>
    )
}