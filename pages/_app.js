import '../styles/globals.css'
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }){
  return (
      <div id="container">
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
