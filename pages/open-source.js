import styles from "../styles/OpenSource.module.css";
import Nav from "../components/Nav/Navbar";
import Head from "next/head";
import Link from "next/link";

function opensource() {
    return (
        <>
            <Nav type="open-source" />
            <Head>
                <title>Tudor Alexandru - Open Source Projects</title>
            </Head>
            <div className={styles.openSource}>
                <div className={styles.hero}>
                    <h1>Tudor Alexandru&apos;s open source projects</h1>
                    <p>You can also see them in detail on my <Link href="https://github.com/tudorale"><a target="_blank">Github</a></Link></p>
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
        
            <div className={styles.openSourceContent}>
                
            </div>
        </>
    )
}

export default opensource;
