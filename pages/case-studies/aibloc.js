import styles from "../../styles/casestudies/Aibloc.module.css";
import Nav from "../../components/Nav/Navbar";
import Head from "next/head";
import AiBloc from "../../public/casestudies/aibloc/aiblocTwo.png";
import Link from "next/link";
import Image from "next/image";
import Image2 from "../../public/casestudies/aibloc/image2.png";
import Image3 from "../../public/casestudies/aibloc/image3.png";
import Image4 from "../../public/casestudies/aibloc/image4.png";
import Image5 from "../../public/casestudies/aibloc/image5.png";
import Image6 from "../../public/casestudies/aibloc/image6.png";
import Footer from "../../components/Footer/Footer";
import React, {useRef} from "react"
import {Power3, gsap} from "gsap";
import AOS from "aos";

function Aibloc() {

    React.useEffect(() => {
        AOS.init({
            duration: 600
        })
    }, [])

    let wrapper = useRef();
    let header = useRef();
    let subHeader = useRef();
    let button = useRef();
    let scroll = useRef();
    let image = useRef();

    React.useEffect(() => {
      gsap.set(wrapper.current, {css: { visibility: "visible" } });
  
      gsap.from(header.current,{
        duration: 0.8,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 0.8,
      });

      gsap.from(subHeader.current,{
        duration: 0.8,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 0.9,
      });
  
  
      gsap.from(button.current,{
        duration: 0.6,
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
        delay: 1,
      });
  
      gsap.from(scroll.current,{
        duration: 0.5,
        opacity: 0,
        y: 70,
        ease: Power3.easeOut,
        delay: 1.2,
      });
  
      gsap.from(image.current,{
        duration: 0.5,
        opacity: 0,
        x: 150,
        ease: Power3.easeOut,
        delay: 1.3,
      });
    }, [])
    return (
        <>
            <Head>
                <title>Tudor Alexandru - Ai Bloc</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="Case study about Ai Bloc, a non-code platform where you can build programs" />
                <meta name="author" content="Tudor Alexandru" />
                <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, ai bloc" />
                <link rel="icon" href="../logo.png" />
            </Head>
           <Nav type="study"/>
           <div className={styles.hero} ref={wrapper}>
               <div className={styles.info}>
                    <h1 ref={header}>Ai Bloc</h1>
                    <p ref={subHeader}>Ai Bloc is a non-code platform where you can build Data Science and Machine Learning programs, the client wanted a good and beautiful landing page for this start-up.</p>
                    <div className={styles.buttons} ref={button}>
                        <Link href="https://github.com/tudorale/aibloc" passHref>
                            <a target="_blank" rel="noreferrer">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

                                    <span>Github</span>  
                                </button> 
                            </a>
                        </Link>
                    </div>
                    <svg
                        className={styles.scroll}
                        width="40"
                        height="77"
                        ref={scroll}
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

               <div className={styles.image} ref={image}>
                    <Image alt="ai bloc landing page" loading="eager" width="650" height="310" src={AiBloc}/>
               </div>
           </div>

           <div className={styles.studyContent}>
               <h1 data-aos='fade-right'><span>{"//"}</span> SUMMERY</h1>
               <p data-aos="fade-up"><span>Ai Bloc</span> is a non-code platform where you can build Data Science and Machine Learning programs, the client wanted a good and beautiful landing page for this start-up.
                <br />
                <br/>
                At first, I started designing a wireframe in Figma, the client was happy about it and then we went to the coding process. I used mainly React JS as the client was fine with it, I used also different libraries such as GSAP, AOS, Typed.js for animations. The illustrations from the landing page were edited in Adobe Photoshop to match the color scheme.</p>
           </div>

           <div className={styles.banner}>
               <div className={styles.bannerContent}>
                    <div className={styles.bannerImage} data-aos="fade-right">
                        <Image alt="ai bloc landing page" loading="eager" width="750" height="362" src={AiBloc}/>
                    </div>
                    <div className={styles.bannerInfo} data-aos="fade-up">
                        <h1>Hero section, with an interactiv demo from the product.</h1>
                    </div>
               </div>
           </div>

           <div className={styles.studyContent} style={{marginTop: "100px"}}>
               <h1 data-aos="fade-right"><span>{"//"}</span> MY ROLE</h1>
               <p data-aos="fade-up">As the recruiter for this one time project wanted a Front-End Developer, with experience in React JS, I handled the coding of the landing page but also the design of it.
                <br />
                <br/>
                For the coding process I used <span>React JS</span> with the following libraries: <span>GSAP</span>, <span>AOS</span>, <span>React Slick</span> and <span>Typed JS</span>.
                <br/>
                To design the wireframe and a mockup for the landing page I used Figma.</p>
           </div>

           <div className={styles.banner}>
               <div className={styles.bannerContent}>
                    <div className={styles.bannerImage} data-aos="fade-right">
                        <Image alt="ai bloc landing page" loading="eager" width="750" height="362" src={Image2}/>
                    </div>
                    <div className={styles.bannerInfo} data-aos="fade-up">
                        <h1>Section two, about the first feature, along with a carousel with videos.</h1>
                    </div>
               </div>
           </div>

           <div className={styles.studyContent} style={{marginTop: "100px"}}>
               <h1 data-aos="fade-right"><span>{"//"}</span> WALKTHROUGH</h1>
               <p data-aos="fade-up">
                The project started with a wireframe made in Figma, after the client review it, I started adding more features, illustrations and icons to make the design look better. After the mock up for the landing page was done I started the coding process.
                <br/>
                <br/>
                As I said I made this project in React JS as the client had his platform also on React JS, this will help the client to implement the landing page to his main project, the coding process took between <span>10-24 hours of coding</span>, the first day I added the content for the website, the second day we found illustrations and made carousel for the videos that were provided by the client, and in the final day I made the website fully responsive.
                <br/>
                <br/>
                The landing page turned out as a beautiful responsive website with animations and a great user experience as you can see in the images below.
               </p>
            
           </div>

            <div className={styles.banner}>
               <div className={styles.bannerContent}>
                    <div className={styles.bannerImage} data-aos="fade-down">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={Image3}/>
                    </div>
                    <div className={styles.bannerImage} data-aos="fade-up">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={Image4}/>
                    </div>
                    <div className={styles.bannerImage} data-aos="fade-up">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={Image5}/>
                    </div>
                    <div className={styles.bannerImage} data-aos="fade-down">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={Image6}/>
                    </div>
               </div>
           </div>


            <div className={styles.studyFooter}>
                <Footer />
            </div>
          
        </>
    )
}

export default Aibloc
