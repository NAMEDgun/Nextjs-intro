import Link from "next/link";

export default function NavBar() {
    return <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About Us</a>
        </Link>
    </nav>
}