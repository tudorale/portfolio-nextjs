import styles from "./Skills.module.css";

function Skills() {
    return (
        <div className={styles.skills}>
            <h1 className={styles.header}>My Skills</h1>
            <div className={styles.banner}>
                <div className={styles.additionalWrapper}>
                    <div className={styles.sectionOne}>
                        <h1>Front-End Development</h1>
                        <p>In the Front-End Development field I have 3 years of experience in the modern technologies that a developer is using, like React JS, Next JS, React-Redux, TypeScript, JavaScript, Git, SCSS, and more, and I am still learning new stuff.</p>
                    </div>

                    <div className={styles.sectionTwo}>
                        <h1 className={styles.title}>UI/UX Design</h1>
                        <p>I love to design and edit things, from editing photos to websites and more. I am using Adobe Photoshop from 2018 and for website design I am using Figma along with other softwares like Gravit Designer, and every open source project it is designed by me :)</p>
                    
                        <h1 className={styles.number}>02</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
