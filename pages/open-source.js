import styles from "../styles/OpenSource.module.css";
import Nav from "../components/Nav/Navbar";
import Head from "next/head";
import Link from "next/link";
import Project from "../components/OpenSourceProject/Project";
import TypingHub from "../public/opensource/typinghub.jpg";
import OnlyLearn from "../public/opensource/onlylearn.jpg";
import Scorpion from "../public/opensource/scorpion.jpg";
import Portfolio from "../public/opensource/portfolio.jpg";
import Frozo from "../public/opensource/frozo.jpg";
import DashBoard from "../public/opensource/dashboard.jpg";
import Motes from "../public/opensource/motes.jpg";
import Footer from "../components/Footer/Footer"
import React from "react";
import AOS from "aos";
import {Power3, gsap} from "gsap";

function Opensource() {

    let header = React.useRef();
    let subHeader = React.useRef();
    let scroll = React.useRef();
    let wrapper = React.useRef();

    React.useEffect(() => {
        AOS.init({
          duration: 500
        })

        gsap.set(wrapper.current, {css: { visibility: "visible" } });

        gsap.from(header.current,{
        duration: 0.7,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 0.5,
        });

        gsap.from(subHeader.current,{
        duration: 0.6,
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 0.8,
        });

        gsap.from(scroll.current,{
        duration: 0.5,
        opacity: 0,
        y: 70,
        ease: Power3.easeOut,
        delay: 1,
        });
    }, [])

    return (
        <>
            <Nav type="open-source" />
            <Head>
                <title>Tudor Alexandru - Open Source Projects</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="My open source projects that I worked in my coding journey as a developer" />
                <meta name="author" content="Tudor Alexandru" />
                <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, open source projects" />
                <link rel="icon" href="../logo.png" />
            </Head>
            <div className={styles.openSource} ref={wrapper}>
                <div className={styles.hero}>
                    <h1 ref={header}>Tudor Alexandru&apos;s open source projects</h1>
                    <p ref={subHeader}>You can also see them in detail on my <Link href="https://github.com/tudorale" passHref><a target="_blank">Github</a></Link></p>
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
            </div>
        
            <div className={styles.openSourceContent}>
                <div data-aos="fade-up">
                    <Project
                        image={TypingHub}
                        repo="https://github.com/tudorale/typinghub"
                        title="TypingHub"
                        description="TypingHub is a competitive platform for typists, where you can improve your typing speed by taking tests on different categories and gain points by taking tests to join into the top."
                        website="https://tudorale.github.io/typinghub"
                        maintained="no"
                        application="yes"
                        react="yes"
                    />
                </div>
                
                <div data-aos="fade-down">
                    <Project
                        image={Motes}
                        repo="https://github.com/tudorale/motes"
                        title="Motes"
                        description="Motes is a place where you can keep all your notes in one place, the project started with the idea of a global Notes App as you have on your phone or computer, now you can keep all your notes here and you can access them on every device by going to your mote via a key."
                        website="https://tudorale.github.io/motes/#/"
                        maintained="no"
                        application="yes"
                        react="yes"
                    />
                </div>
                
                <div data-aos="fade-right">
                    <Project
                        image={OnlyLearn}
                        repo="https://github.com/tudorale/onlylearn"
                        title="OnlyLearn"
                        description="OnlyLearn, a free platform where you can learn Web Development for free with more than 60 lessons in HTML5, CSS3 & Responsive Design, and a text editor where you can practice."
                        website="https://only-learn-3ff6b.web.app/"
                        maintained="no"
                        application="yes"
                        react="yes"
                    />
                </div>
                
                <div data-aos="fade-up">
                    <Project
                        image={Scorpion}
                        repo="https://github.com/tudorale/scorpion-theme"
                        title="Scorpion Theme"
                        description="Scorpion is a professional and a looking good dark theme for Visual Studio Code, with three main colors for your editor that will make you relaxed."
                        website="https://marketplace.visualstudio.com/items?itemName=TudorAlexandru.scorpion"
                        maintained="yes"
                        extension="yes"
                />
                </div>

                <div data-aos="fade-down">
                    <Project
                        image={Portfolio}
                        repo="https://github.com/tudorale/portfolio"
                        title="Portfolio"
                        description="Personal portfolio where you can find more about me, all my big open source projects, my skills and you can contact me by filling a form."
                        website="https://tudorale.github.io/portfolio"
                        maintained="yes"
                        landing="yes"
                        react="yes"
                    />
                </div>
                
                <div data-aos="fade-right">
                    <Project
                        image={Frozo}
                        repo="https://github.com/tudorale/frozo"
                        title="Frozo"
                        description="Frozo is a streetwear brand, made by me and my friend, who is imprinting photos into clothes, this website is the landing page for this idea."
                        website="https://tudorale.github.io/frozo"
                        maintained="no"
                        landing="yes"
                        react="yes"
                    />
                </div>
                
                <div data-aos="fade-up">
                    <Project
                        image={DashBoard}
                        repo="https://github.com/tudorale/dashboard"
                        title="Dashboard"
                        description='A dashboard for a non-existen company, the data is hard-coded, try using the password and username "admin" for access to the To-do system.'
                        website="https://tudorale.github.io/dashboard"
                        maintained="no"
                        application="yes"
                        react="yes"
                    />
                </div>
            </div>

            <div className={styles.sourceFooter}>
                <Footer />
            </div>
        </>
    )
}

export default Opensource;
