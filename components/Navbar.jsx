import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="header">
            <div className="header__center center">
                <Link href={"/"}>
                    <a className="header__logo">
                        <Image className="header__pic header__pic_light" src="/logo.png" alt="2" width={30} height={30} />
                    </a>
                </Link>
                <div className="header__wrapper">
                    <nav className="header__nav">
                        <Link href={'/'}><a className="header__link">HOME</a></Link>
                        <Link href={'/read-c0da'}><a className="header__link">READ C0DA</a></Link>
                        <Link href={'/sketchbook'}><a className="header__link">SKETCHBOOK</a></Link>
                    </nav>
                </div>
                <button className="header__burger"></button>
            </div>
        </header>
    )
}