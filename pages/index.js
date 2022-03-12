import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import Link from "next/link"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tudor Alexandru - An enthusiastic developer</title>
        <meta name="description" content="Hi, I'm Tudor Alexandru and I like to make websites for the WWW." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Nav />

      <div className={styles.hero}>
        <div className={styles.left}>
          <h1>I create beautiful websites with a computer and a keyboard <img src="/computer.png"/></h1>
          <div className={styles.buttonWrapper}>
            <Link href="#contact" passHref className={styles.cta}>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-2.789 3.857l.94.934c-.875.885-1.773 1.933-2.125 3.375l-1.286-.314c.434-1.774 1.491-3.004 2.471-3.995zm-1.565 7.642c-.715 0-1.353-.279-1.887-.83-1.458.515-2.844-.044-3.576-1.084-.575-.817-.703-1.853-.353-2.845-.552-.534-.83-1.166-.83-1.884 0-1.562 1.16-2.803 3.24-2.586l.195 1.117c-.664.062-1.277.097-1.674.494-.668.668-.467 2.063.787 2.433-.832.836-.751 2.037-.127 2.696.654.69 1.903.799 2.765-.059.385 1.305 1.798 1.422 2.433.787.392-.392.431-.995.492-1.649l1.125.229c.2 1.979-1.009 3.181-2.59 3.181zm-3.318-7.032l.314 1.287c1.755-.43 2.953-1.45 3.989-2.471l-.938-.931c-.876.866-1.927 1.764-3.365 2.115z"/></svg>
                <span>Contact me</span>
              </button>
            </Link>
          </div>

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
      </div>

      <div className={styles.work}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h1>See my personal projects where you can contribute</h1>  
            <Link href="/open-source" passHref>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
                    <span>Show me</span>
                  </button>
            </Link>

            <p>Also, you can find them explaind in detail on my <Link href="https://github.com/tudorale" passHref><a target="_blank">Github</a></Link></p>
          </div>  
          <Link href="/open-source" passHref><img className={styles.image} src="/opensource/typinghub.jpg"/></Link>
        </div>

        <div className={styles.line}></div>

        <div className={styles.grid + " " + styles.gridTwo}>
          <div className={styles.info}>
            <h1>See my case studies about my work for different clients</h1>  
            <Link href="/case-studies" passHref>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
                    <span>Show me</span>
                  </button>
            </Link>

            <p>Only case studies where the client gave me permission to show</p>
          </div>  
          <Link href="/case-studies/aibloc" passHref><img className={styles.image} src="/casestudies/aibloc.jpg"/></Link>
        </div>

        <div className={styles.bigLine}></div>

      </div>

      <div className={styles.skills}>
        <div>
          <p className={styles.title}>Front-End Development</p>
          <p className={styles.info}>In the Front-End Development field I have 3 years of experience in the modern technologies that a developer is using, like React JS, Next JS, React-Redux, TypeScript, JavaScript, Git, SCSS, and more.
            <br/>
            P.S: I am still learning new stuff.</p>
        </div>
        <div>
          <p className={styles.title}>UI/UX Design</p>
          <p className={styles.info}>I love to design and edit things, from editing photos to websites and more. I am using Adobe Photoshop from 2018 and for website design I am using Figma, every open source project and some other projects for clients are designed by me :)</p>
        </div>
        <div className={styles.bigLine} style={{marginTop: "70px"}}></div>
      </div>

      <div className={styles.about}>
        <p className={styles.intro}>Hi, isn't it awesome how someone like you, probably farrrrr awayyyy from me, can read this?</p>
      
        <div className={styles.text}>
                
          First of all, my name is Tudor Alexandru - Ionut and I am from România, my passion for Web Development started in July 2019. I started with HTML5 and I didn&apos;t know so much about this, but I chose the Front-End field because I want to show the world what I can do with a computer. 
          And now I am doing freelancing, playing with crypto and NFTs and living a good life by connecting with people around the world.  
               
          <div className={styles.imageWrapper}>
            <img width="20" height="20" alt="world" src="/world.png" />
          </div>    
        </div>

        <p className={styles.text}>After a few months I knew that I am good at what I'm doing, actually, from the first page that I made at that time I knew that I can do much better. I wasn't like others at start, put some text and add a color and that's it, even though I didn't had the knowledge at that time to make something bigger, like animations or working with libraries, and I don't like to lie myself about my work, I want to make the things perfectly with a very special eye for details.</p>
      </div>

      <div className={styles.bigLine} style={{marginTop: "70px"}}></div>

    
    </div>
  )
}
