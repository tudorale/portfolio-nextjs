import React from 'react'
import Link from "next/link"
import styles from "./Work.module.css";
import AOS from "aos";

function Work() {

    React.useEffect(() => {
        AOS.init({
          duration: 500
        })
    }, [])

    return (
        <div className={styles.work}>

          <div className={styles.category} data-aos="fade-right">
            <div className={styles.info}>
              <h1>See my open source projects where you can contribute</h1>
              <Link href="/open-source" passHref>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
                  <span>Show me</span>
                </button>
              </Link>

              <p>Also, you can find them explaind in detail on my <Link href="https://github.com/tudorale" passHref><a target="_blank">Github</a></Link></p>
            </div>

            <div className={styles.image}>
            </div>

          </div>

          <div className={styles.category + " " + styles.secondCategory} data-aos="fade-right">
            <div className={styles.info}>
              <h1>See my case studies about my work for real clients</h1>
              <Link href="/case-studies" passHref>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
                  <span>Show me</span>
                </button>
              </Link>

              <p>Only case studies where the client gave me permission to show</p>
            </div>

            <div className={styles.image}>
            </div>

            <h1 className={styles.number} data-aos="fade-up">00</h1>
          </div>
        </div>
    )
}

export default Work
