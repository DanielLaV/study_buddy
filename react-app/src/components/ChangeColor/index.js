import { useState } from "react";
import './Color.css'

function ChangeColor(){
  const [theme, setTheme] = useState('')

  return(

  <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
  style={{position: "fixed", bottom:"15px", right: "15px", backgroundColor: "transparent", color: "var(--trimmings)"}}
  >{theme === 'light' ? "Dark Mode" : 'Light Mode'}
</button>

  )


}

export default ChangeColor;
