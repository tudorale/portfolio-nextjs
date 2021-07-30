import Link from "next/link"
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1><Link href="/">Tudor Alexandru</Link></h1>
            <ul>
                <li><Link href="/projects">Open Source Projects</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="#contact">Hire Me</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
