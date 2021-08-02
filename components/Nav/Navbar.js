import Link from "next/link"
import styles from "./Navbar.module.css";

function Navbar({type}) {
    
    return (
        <div className={styles.navbar}>
            <h1><Link href="/">Tudor Alexandru</Link></h1>
            {type === "main" &&
                <ul>
                    <li><Link href="/open-source">Open Source Projects</Link></li>
                    <li><Link href="/case-studies">Case Studies</Link></li>
                    <li><Link href="#contact">Hire Me</Link></li>
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
    )
}

export default Navbar;
