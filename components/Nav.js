import React from 'react'
import styles from './Nav.module.css'
import Link from "next/link"
function Nav() {
  return (
    <div className={styles.navbar}>
        <Link href="/"><p className={styles.logo}><span>Tudor</span> Alexandru</p></Link>
        <ul className={styles.links}>
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Open Source</Link></li>
            <li><Link href="#">Hire Me</Link></li>
        </ul>
    </div>
  )
}

export default Nav