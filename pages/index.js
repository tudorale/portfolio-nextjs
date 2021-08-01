import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Nav/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Computer from "../public/computer.png"
import Work from '../components/Projects/Work'
import Skills from '../components/Skills/Skills'
import About from '../components/About/About'
import Hire from "../components/Hire/Hire";

export default function Home() {

  let status = false;
  const animation = () => {
    status = !status;
    
    if(status){
      let keys = document.querySelectorAll(`.${styles.key}`);
      keys.forEach((key) => {
        key.style.filter = "drop-shadow( -2px 2px 0px #2d8acc";
      })
    }else{
      let keys = document.querySelectorAll(`.${styles.key}`);
      keys.forEach((key) => {
        key.style.filter = "none";
      })
    }
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tudor Alexandru - An enthusiastic Front-End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Personal portfolio where you can find more about me and my journey as a Front-End Developer" />
        <meta name="author" content="Tudor Alexandru" />
        <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, website development" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <Navbar/>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.bigText}>I create beautiful websites with my hands and a computer <Image width="32" height="32" alt="computer" src={Computer}/></div>
            <Link href="#contact" passHref className={styles.cta}>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-2.789 3.857l.94.934c-.875.885-1.773 1.933-2.125 3.375l-1.286-.314c.434-1.774 1.491-3.004 2.471-3.995zm-1.565 7.642c-.715 0-1.353-.279-1.887-.83-1.458.515-2.844-.044-3.576-1.084-.575-.817-.703-1.853-.353-2.845-.552-.534-.83-1.166-.83-1.884 0-1.562 1.16-2.803 3.24-2.586l.195 1.117c-.664.062-1.277.097-1.674.494-.668.668-.467 2.063.787 2.433-.832.836-.751 2.037-.127 2.696.654.69 1.903.799 2.765-.059.385 1.305 1.798 1.422 2.433.787.392-.392.431-.995.492-1.649l1.125.229c.2 1.979-1.009 3.181-2.59 3.181zm-3.318-7.032l.314 1.287c1.755-.43 2.953-1.45 3.989-2.471l-.938-.931c-.876.866-1.927 1.764-3.365 2.115z"/></svg>
                <span>Contact me</span>
              </button>
            </Link>

            <svg
            className={styles.scroll}
            width="40"
            height="77"
            viewBox="0 0 40 77"
            >
              <g id="scrollCircle" transform="translate(-253 -787)">
                <g
                  id="Rectangle_12"
                  transform="translate(253 787)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                >
                  <rect width="40" height="77" rx="20" stroke="none"></rect>
                  <rect
                    x="2"
                    y="2"
                    width="36"
                    height="73"
                    rx="18"
                    fill="none"
                  ></rect>
                </g>
                <circle
                  className={styles.circle}
                  id="Ellipse_1"
                  cx="11"
                  cy="11"
                  r="11"
                  transform="translate(262 798)"
                  fill="#fff"
                ></circle>
              </g>
            </svg>
          </div>
          <div className={styles.right}>
            <svg    
              viewBox="7.426 -6.6 495.049 207.92"
              className={styles.keyboard}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                style={{ fill: "rgb(74, 23, 155)" }}
                x="24.166"
                y="2.917"
                width="467.821"
                height="179.868"
                rx="11"
                ry="11"
              />
              <rect
                style={{ fill: "rgb(232, 232, 232)" }}
                x="16.914"
                y="10.634"
                width="467.821"
                height="179.868"
                rx="11"
                ry="11"
              />

              <rect
                style={{ fill: "rgb(45, 138, 204)" }}
                onClick={animation}
                className={styles.keyAnimation}
                x="29.289"
                y="23.841"
                width="40.429"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="94.359"
                y="23.841"
                width="48.463"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="153.986"
                y="23.841"
                width="48.463"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="213.923"
                y="24.723"
                width="48.463"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="273.957"
                y="25.783"
                width="48.463"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="334.358"
                y="25.783"
                width="48.463"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="395.346"
                y="25.665"
                width="70.957"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="28.399"
                y="64.531"
                width="84.983"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="123.471"
                y="64.531"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="182.526"
                y="65.413"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="242.597"
                y="66.473"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "rgb(45, 138, 204)" }}
               className={styles.keyAnimation}
                x="301.87"
                y="66.473"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="147.882"
                y="93.554"
                width="47.735"
                height="27.228"
                rx="5"
                ry="5"
                transform="matrix(0.999979, 0.006511, 0, 1.000021, 271.143616, -27.330996)"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="360.899"
                y="66.802"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "rgb(45, 138, 204)" }}
               className={styles.keyAnimation}
                x="151.595"
                y="107.629"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="211.666"
                y="107.689"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="270.939"
                y="107.689"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="245.016"
                y="93.554"
                width="79.089"
                height="27.228"
                rx="5"
                ry="5"
                transform="matrix(0.999979, 0.006511, 0, 1.000021, 143.081161, 13.252908)"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="329.968"
                y="108.018"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="30.034"
                y="105.931"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="89.615"
                y="106.931"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="151.338"
                y="149.539"
                width="191.232"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="29.777"
                y="149.841"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="89.358"
                y="149.841"
                width="48.493"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "white" }}
                className={styles.key}
                x="352.166"
                y="149.01"
                width="50.968"
                height="27.228"
                rx="5"
                ry="5"
              />
              <rect
                style={{ fill: "rgb(45, 138, 204)" }}
               className={styles.keyAnimation}
                x="413.272"
                y="148.835"
                width="52.618"
                height="27.228"
                rx="5"
                ry="5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <Work/>

        <Skills/>

        <About />

        <Hire />
      </div>
     </div>
  )
}
