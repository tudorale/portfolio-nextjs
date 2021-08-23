import '../styles/globals.css'
import "aos/dist/aos.css"
import {useEffect} from "react";

function MyApp({ Component, pageProps }){

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
