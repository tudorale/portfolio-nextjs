import styles from "../../styles/CaseStudies.module.css";
import Nav from "../../components/Nav/Navbar";
import Head from "next/head";
import Study from "../../components/CaseStudy/Study";
import AiBloc from "../../public/casestudies/aibloc.jpg";
import Footer from "../../components/Footer/Footer";
import React from "react"
import {Power3, gsap} from "gsap";
import AOS from "aos";
import { projects} from "../../data"

function Casestudies() {

    let header = React.useRef();
    let subHeader = React.useRef();
    let scroll = React.useRef();
    let wrapper = React.useRef();

    React.useEffect(() => {
        AOS.init({
            duration: 600
        })

        gsap.set(wrapper.current, {css: { visibility: "visible" } });

        gsap.from(header.current,{
        duration: 0.7,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 0.8,
        });

        gsap.from(subHeader.current,{
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
    }, [])

    return (
        <>
            <Nav type="case-studies" />
            <Head>
                <title>Tudor Alexandru - Case Studies</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="Case studies about my work for real clients" />
                <meta name="author" content="Tudor Alexandru" />
                <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, case studies" />
                <link rel="icon" href="../logo.png" />
            </Head>
            <div className={styles.caseStudies} ref={wrapper}>
                <div className={styles.hero}>
                    <h1 ref={header}>Tudor Alexandru&apos;s case studies</h1>
                    <p ref={subHeader}>Case studies about projects that I made for real clients, every client gave their permission for showing the case study here.</p>
                    <svg
                        className={styles.scroll}
                        width="40"
                        ref={scroll}
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

                <div className={styles.caseStudiesContent}>
                    {
                        projects.map((project, index) => 
                            <div data-aos="fade-up" id={index}>
                                <Study
                                    image={project.title == "AiBloc" ? "/casestudies/aibloc.jpg" : project.images.heroImage.src}
                                    link={"/case-studies/" + `${project.path}`}
                                    repo={project.links.github}
                                    title={project.title}
                                    description={project.description}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
            
            <div className={styles.caseStudiesFooter}>
                <Footer />
            </div>
        </>
    )
}

export default Casestudies
