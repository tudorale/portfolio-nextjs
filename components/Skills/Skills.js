import styles from "./Skills.module.css";
import React from "react";
import AOS from "aos";
function Skills() {

    React.useEffect(() => {
        AOS.init({
          duration: 500
        })
    }, [])

    return (
        <div className={styles.skills}>
            <h1 className={styles.header} data-aos="fade-down">My Skills</h1>
            <div className={styles.banner}>
                <div className={styles.additionalWrapper} data-aos="fade-up">
                    <div className={styles.sectionOne}>
                        <h1>Front-End Development</h1>
                        <p>It has been more than 3 years since I started coding my first page, in this time I learned technologies such as React JS, Next JS, React-Redux, TypeScript, JavaScript, Git, SCSS, and more. <br/>P.S: I am still learning new stuff.</p>
                    </div>

                    <div className={styles.sectionTwo}>
                        <h1 className={styles.title}>UI/UX Design</h1>
                        <p>I love to design and edit things, from editing photos to websites and more. I am using Adobe Photoshop from 2018 and for website design I am using Figma, every open source project and some other projects for clients are designed by me :)</p>
                    
                        <h1 className={styles.number} data-aos="fade-down">01</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
