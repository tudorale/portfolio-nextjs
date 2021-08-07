import Link from "next/link"
import styles from "./Navbar.module.css";

function Navbar({type}) {

    let status = false;

    const handleMobile = () => {
        status = !status;
        let mobileNavbar = document.querySelector("#mobileNavbar");
        let overlay = document.querySelector("#overlay");

        if(status){
            if(mobileNavbar){
                mobileNavbar.style.left = "0px";
            }
            if(overlay){
                overlay.style.visibility = "visible";
                overlay.style.zIndex = "1000";
                overlay.style.opacity = "0.35";
            }
        }else{
            if(mobileNavbar){
                mobileNavbar.style.left = "-500px";
            }
            if(overlay){
                overlay.style.visibility = "hidden";
                overlay.style.zIndex = "-1";
                overlay.style.opacity = "0";
            }
        }
    }

    return (
        <>
            <div className={styles.overlay} onClick={handleMobile} id="overlay"></div>
            <div className={styles.navbar}>
                <Link href="/" passHref><h1>Tudor <span className={styles.lastName}>Alexandru</span></h1></Link>
                {type === "main" &&
                    <ul>
                        <li><Link href="/open-source">Open Source Projects</Link></li>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="#contact">Hire Me</Link></li>
                    </ul>
                }
                {
                    type === "study" && 
                    <ul>
                        <li><Link href="/open-source">Open Source Projects</Link></li>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/">Main</Link></li>
                    </ul>
                }
                {type === "open-source" &&
                    <ul>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/">Main</Link></li>
                    </ul>
                }

                {type === "case-studies" &&
                    <ul>
                        <li><Link href="/open-source">Open Source Projects</Link></li>
                        <li><Link href="/">Main</Link></li>
                    </ul>
                }

                <div className={styles.hamburger} onClick={handleMobile}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>

            <div className={styles.mobileNavbar} id="mobileNavbar">
                <div onClick={handleMobile} style={{width: "fit-content"}}>
                    <h1>Tudor <span className={styles.lastName}>Alexandru</span></h1>
                </div>
                {type === "main" &&
                    <ul>
                        <li><Link href="/open-source">Open Source Projects</Link></li>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="#contact">Hire Me</Link></li>
                    </ul>
                }
                {
                    type === "study" && 
                    <ul>
                        <li><Link href="/open-source">Open Source Projects</Link></li>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/">Main</Link></li>
                    </ul>
                }
                {type === "open-source" &&
                    <ul>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/">Main</Link></li>
                    </ul>
                }

                {type === "case-studies" &&
                    <ul>
                        <li><Link href="/open-source">Open Source Projects</Link></li>
                        <li><Link href="/">Main</Link></li>
                    </ul>
                }
            </div>
        </>
    )
}

export default Navbar;
