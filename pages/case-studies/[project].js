import styles from "../../styles/casestudies/Aibloc.module.css";
import Nav from "../../components/Nav/Navbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import React, {useRef} from "react"
import {Power3, gsap} from "gsap";
import AOS from "aos";
import {server} from "../../config"

function Project({data}) {
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
                <title>Tudor Alexandru - {data.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="author" content="Tudor Alexandru" />
                <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, ai bloc" />
                <link rel="icon" href="../logo.png" />
            </Head>
           <Nav type="study"/>
           <div className={styles.hero} ref={wrapper}>
               <div className={styles.info}>
                    <h1 ref={header}>{data.title}</h1>
                    <p ref={subHeader}>{data.description}</p>
                    <div className={styles.buttons} ref={button}>
                        <Link href={`${data.links.github}`} passHref>
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
                    <Image alt="ai bloc landing page" loading="eager" width="650" height="310" src={`${data.images.imageOne.src}`}/>
               </div>
           </div>

           <div className={styles.studyContent}>
               <h1 data-aos='fade-right'><span>{"//"}</span> SUMMERY</h1>
               {
                 data.summery.map((text, index) => (
                  <p data-aos="fade-up" key={index}>{text}</p>
                 ))
               }
           </div>

           <div className={styles.banner}>
               <div className={styles.bannerContent}>
                    <div className={styles.bannerImage} data-aos="fade-right">
                        <Image alt="ai bloc landing page" loading="eager" width="750" height="362" src={data.images.imageOne.src}/>
                    </div>
                    <div className={styles.bannerInfo} data-aos="fade-up">
                        <h1>{data.images.imageOne.desc}</h1>
                    </div>
               </div>
           </div>

           <div className={styles.studyContent} style={{marginTop: "100px"}}>
               <h1 data-aos="fade-right"><span>{"//"}</span> MY ROLE</h1>
               {
                 data.role.map((text, index) => (
                  <p data-aos="fade-up" key={index}>{text}</p>
                 ))
               }
           </div>

           <div className={styles.banner}>
               <div className={styles.bannerContent}>
                    <div className={styles.bannerImage} data-aos="fade-right">
                        <Image alt="ai bloc landing page" loading="eager" width="750" height="362" src={data.images.imageTwo.src}/>
                    </div>
                    <div className={styles.bannerInfo} data-aos="fade-up">
                        <h1>{data.images.imageTwo.desc}</h1>
                    </div>
               </div>
           </div>

           <div className={styles.studyContent} style={{marginTop: "100px"}}>
               <h1 data-aos="fade-right"><span>{"//"}</span> WALKTHROUGH</h1>
              {data.walkthrough.map((text,index) => (
                <p data-aos="fade-up" key={index}>{text}</p>
              ))}
           </div>

            <div className={styles.banner}>
               <div className={styles.bannerContent}>
                    <div className={styles.bannerImage} data-aos="fade-down">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={data.images.imageThree.src}/>
                    </div>
                    <div className={styles.bannerImage} data-aos="fade-up">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={data.images.imageFour.src}/>
                    </div>
                    <div className={styles.bannerImage} data-aos="fade-up">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={data.images.imageFive.src}/>
                    </div>
                    <div className={styles.bannerImage} data-aos="fade-down">
                        <Image alt="ai bloc landing page" width="750" loading="eager" height="362" src={data.images.imageSix.src}/>
                    </div>
               </div>
           </div>


            <div className={styles.studyFooter}>
                <Footer />
            </div>
          
        </>
  )
}

export async function getStaticProps(content){
  const res = await fetch(`https://tudoralexandru.vercel.app/api/${content.params.project}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths(){
  const res = await fetch(`https://tudoralexandru.vercel.app/api/paths`);
  const data = await res.json();

  return {
    paths: data.paths.map((p) => {
      return {params: {project: p}}
    }),
    fallback: false,
  }
}

export default Project;