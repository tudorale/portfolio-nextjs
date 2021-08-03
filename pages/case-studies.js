import styles from "../styles/CaseStudies.module.css";
import Nav from "../components/Nav/Navbar";
import Head from "next/head";

function casestudies() {
    return (
        <div>
             <>
            <Nav type="case-studies" />
            <Head>
                <title>Tudor Alexandru - Case Studies</title>
            </Head>
            <div className={styles.caseStudies}>
                <div className={styles.hero}>
                    <h1>Tudor Alexandru&apos;s case studies</h1>
                    <p>Case studies about projects that I made for real clients, every client gave their permission for showing the case studies here.</p>
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
    
        </>
    )
}

export default casestudies
