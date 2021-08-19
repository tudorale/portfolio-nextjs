import '../styles/globals.css'
import "aos/dist/aos.css"
import {useEffect} from "react"

function MyApp({ Component, pageProps }){

  useEffect(() => {  

    if(localStorage.getItem('color') == null){
      let root = document.querySelector(':root');
      root.style.setProperty('--main-color', '#6930c3') // which is the default color for my website
    }else{
      // get the color from localstorage and apply it to the root
      const savedColor = localStorage.getItem('color');
      
      let root = document.querySelector(':root');
      root.style.setProperty('--main-color', `${savedColor}`)
    }

  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
