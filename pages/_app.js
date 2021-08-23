import '../styles/globals.css'
// import "aos/dist/aos.css"
import Scrollbar from "smooth-scrollbar";
import {useEffect} from "react";

function MyApp({ Component, pageProps }){

  useEffect(() => {
    let elem = document.querySelector("body");

    Scrollbar.init(elem);

  }, [])

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
