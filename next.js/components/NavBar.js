import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            <Link href="/" legacyBehavior>
                <a className={router.pathname === "/" ? active : ""}>Home</a>
                {/* <a style={{color: router.pathname === "/"? "red" : "blue"}}>Home</a> */}
            </Link>
            <Link href="/about" legacyBehavior>                
                <a className={router.pathname === "/about" ? active : ""}>About Us</a>
                {/* <a style={{color: router.pathname === "/about"? "red" : "blue"}}>About Us</a> */}
            </Link>
            <style jsx>{`
             nav {
                background-color: tomato;
             }
             a {
                text-decoration: none;
             }
            .active {
                color: blue;
            }
            `}
            </style>
        </nav>
    );
}