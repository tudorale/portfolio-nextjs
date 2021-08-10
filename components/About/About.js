import styles from "./About.module.css";
import Image from 'next/image'
import World from "../../public/world.png";
import AOS from "aos";
import React from "react";
function About() {


    React.useEffect(() => {
        AOS.init({
          duration: 500
        })
    }, [])

    return (
        <div className={styles.about}>
            
            <h1 className={styles.header} data-aos="fade-up">About Me</h1>
            <div className={styles.sectionOne} data-aos="fade-up">
                
                First of all, my name is Tudor Alexandru - Ionut and I am from România, my passion for Web Development started in July 2019. I started with HTML5 and I didn&apos;t know so much about this, but I chose the Front-End field because I want to show the world what I can do with a computer. 
                And now I am doing freelancing and living a good life by connecting with people around the world.  
               
                <div className={styles.imageWrapper}>
                    <Image width="20" height="20" alt="world" src={World}/>
                </div>    
            </div>
            
            <div className={styles.aboutBanner}>
                <div className={styles.wrapper}>
                    <div className={styles.additionalWrapper} data-aos="fade-down">
                        <p>After a few months I knew that I am good at what I&apos;m doing, actually, from the first page that I made at that time I knew that I can do much better. I wasn&apos;t like others at start, put some text and add a color and that&apos;s it, even though I didn&apos;t had the knowledge at that time to make something bigger, like animations or working with libraries, and I don&apos;t like to lie myself about my work, I want to make the things perfectly and I think I have a special eye for details.</p>
                        <h1 className={styles.number}>02</h1>
                    </div> 
                </div>
            </div>

        </div>
    )
}

export default About
