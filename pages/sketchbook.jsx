import Image from "next/image";

export default function Sketchbook() {
    return (
    <div className="advantages">
        <div className="advantages__center center">
            <div className="advantages__head">
                <br />
                <br />
                <br />
                <h2 className="advantages__title h2">Sketchbook</h2>
            </div>
            <div className="advantages__list">

                <div className="advantages__item">
                    <div className="advantages__bg">
                        <div className="advantages__preview">
                            <Image width={'100%'} src="/vehk_fire.png" alt="1" />
                        </div>
                    </div>
                    <div className="advantages__wrap">
                        <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration="800" data-aos-delay="400">Vehk with Nerevar</div>
                        <div className="advantages__text">Misha Pabor</div>
                        <button className="advantages__btn btn btn_border">Artist page</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}