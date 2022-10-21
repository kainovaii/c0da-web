import { Link } from 'next/link'

export default () => {
    return (
    <div class="advantages">
        <div class="advantages__center center">
            <div class="advantages__head">
                <br />
                <br />
                <br />
                <h2 class="advantages__title h2">Sketchbook</h2>
            </div>
            <div class="advantages__list">

                <div class="advantages__item">
                    <div class="advantages__bg">
                        <div class="advantages__preview"><img width={'100%'} src="/vehk_fire.png" alt="" /></div>
                    </div>
                    <div class="advantages__wrap">
                        <div class="advantages__info" data-aos="animation-scale-top" data-aos-duration="800" data-aos-delay="400">Vehk with Nerevar</div>
                        <div class="advantages__text">Misha Pabor</div>
                        <button class="advantages__btn btn btn_border">Artist page</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}