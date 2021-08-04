import styles from "../../styles/CaseStudies.module.css";
import Nav from "../../components/Nav/Navbar";
import Head from "next/head";
import Study from "../../components/CaseStudy/Study";
import AiBloc from "../../public/casestudies/aibloc.jpg";

function casestudies() {
    return (
        <>
            <Nav type="case-studies" />
            <Head>
                <title>Tudor Alexandru - Case Studies</title>
            </Head>
            <div className={styles.caseStudies}>
                <div className={styles.hero}>
                    <h1>Tudor Alexandru&apos;s case studies</h1>
                    <p>Case studies about projects that I made for real clients, every client gave their permission for showing the case study here.</p>
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

                <div className={styles.caseStudiesContent}>
                    <div data-aos="fade-up">
                        <Study
                            image={AiBloc}
                            link="/case-studies/aibloc"
                            repo="https://github.com/tudorale/aibloc"
                            title="Ai Bloc"
                            description='Ai Bloc is a non-code platform where you can build Data Science and Machine Learning programs, the client wanted a good and beautiful landing page for this start-up.'
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default casestudies
