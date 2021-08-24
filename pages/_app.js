import '../styles/globals.css'
import "aos/dist/aos.css"
import {useEffect} from "react";
import Scrollbar from "smooth-scrollbar";

function MyApp({ Component, pageProps }){

  useEffect(() => {
    const myScrollbar = Scrollbar.init(document.querySelector("#container"));

    [].forEach.call(document.querySelectorAll('[data-aos]'), (el) => {
      myScrollbar.addListener(() => {
        if (myScrollbar.isVisible(el)) {
          el.classList.add('aos-animate');
        }
      });
    });
  }, [])

  return (
      <div id="container">
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
