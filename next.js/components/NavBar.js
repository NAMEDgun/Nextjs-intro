import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            <Link href="/" legacyBehavior>
                <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
                {/* <a style={{color: router.pathname === "/"? "red" : "blue"}}>Home</a> */}
            </Link>
            <Link href="/about" legacyBehavior>                
                <a className={router.pathname === "/about" ? styles.active : ""}>About Us</a>
                {/* <a style={{color: router.pathname === "/about"? "red" : "blue"}}>About Us</a> */}
            </Link>
        </nav>
    );
}