import styles from "../../styles/casestudies/Aibloc.module.css";
import Nav from "../../components/Nav/Navbar";
import Head from "next/head";
import AiBloc from "../../public/casestudies/aiblocTwo.png";
import Link from "next/link";
import Image from "next/image";

function aibloc() {
    return (
        <>
            <Head>
                <title>Tudor Alexandru - Ai Bloc</title>
            </Head>
           <Nav type="study"/>
           <div className={styles.hero}>
               <div className={styles.info}>
                    <h1>Ai Bloc</h1>
                    <p>Ai Bloc is a non-code platform where you can build Data Science and Machine Learning programs, the client wanted a good and beautiful landing page for this start-up.</p>
                    <div className={styles.buttons}>
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

               <div className={styles.image}>
                    <Image alt="ai bloc landing page" width="600" height="320" src={AiBloc}/>
               </div>
           </div>
        </>
    )
}

export default aibloc
