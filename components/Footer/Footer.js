import Link from "next/link"
import styles from "./Footer.module.css";
import Copyright from "../../public/copyright.png"
import Image from "next/image";
import {useState} from "react";

function Footer() {

    let [color, setColor] = useState("");

    const changeColor = (e) => {
        setColor(e.target.value);

        let root = document.querySelector(':root');
        root.style.setProperty('--main-color', `${color}`)

        let themeIcon = document.querySelector("#theme");
        themeIcon.style.fill = "#804bd6";

        let darkIcon = document.querySelector("#darkmode");
        darkIcon.style.stroke = "white";
    }

    const applyDarkTheme = () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--main-color', '#0a0a0a')

        let darkIcon = document.querySelector("#darkmode");
        darkIcon.style.stroke = "#804bd6";

        let themeIcon = document.querySelector("#theme");
        themeIcon.style.fill = "white";
    }

    const resetColor = () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--main-color', '#6930c3')

        let darkIcon = document.querySelector("#darkmode");
        darkIcon.style.stroke = "white";

        let themeIcon = document.querySelector("#theme");
        themeIcon.style.fill = "white";
    }

    return (
        <div className={styles.footer}>
            <Link href="/" passHref><h1 className={styles.logo}>Tudor <span className={styles.lastName}>Alexandru</span></h1></Link>
            <div className={styles.icons}>
                <Link href="https://github.com/tudorale" passHref>
                    <a target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </Link>
                
                <Link href="https://www.linkedin.com/in/tudor-alexandru-a503321a3/" passHref>
                    <a target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                    </a>
                </Link>
            </div>

            <div className={styles.links}>
                <Link href="/case-studies">
                    Case Studies
                </Link>

                <Link href="/open-source">
                    Open Source Projects
                </Link>

                <Link href="https://www.buymeacoffee.com/tudoralexandru" passHref>
                    <a target="_blank">
                        Buy me a coffee
                    </a>
                </Link>
            </div>
            <div className={styles.copyright}>
                <div className={styles.imageWrapper}>
                    <Image width="25" height="25" alt="copyright" src={Copyright}/>
                </div>
                Since 2021 Copyright Tudor Alexandru, Made with love in România {"<"}3
            </div>
        

            <div className={styles.resetColor}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => resetColor()} width="44" id="reset" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                </svg>
            </div>
            <div className={styles.changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" id="theme" width="24" height="24" viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg>
                <input type="color" id="mainColor" value={color} onChange={(e) => changeColor(e)}/>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" id="darkmode" className={styles.darkMode} onClick={applyDarkTheme} width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                <path d="M19 11h2m-1 -1v2" />
            </svg>
        </div>
    )
}

export default Footer;
