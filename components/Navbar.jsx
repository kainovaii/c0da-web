import Link from "next/link"

export default () => {
    return (
        <header class="header">
            <div class="header__center center">
                <Link href={"/"}><a className="header__logo"><img class="header__pic header__pic_light" src="/logo.png" /></a></Link>
                <div class="header__wrapper">
                    <nav class="header__nav">
                        <Link href={'/'}><a class="header__link">HOME</a></Link>
                        <Link href={'/read-c0da'}><a class="header__link">READ C0DA</a></Link>
                        <Link href={'/sketchbook'}><a class="header__link">SKETCHBOOK</a></Link>
                    </nav>
                </div>
                <button class="header__burger"></button>
            </div>
        </header>
    )
}