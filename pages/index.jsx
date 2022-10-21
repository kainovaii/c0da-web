export default function Home() {
  return (
    <div class="invite">
        <div class="invite__center center">
            <div class="invite__container">
                <div style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(apocalypse_v5.png)", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover"
                }} class="invite__bg"></div>
                <div class="invite__wrap">
                    <h2 class="invite__title d1" data-aos="animation-scale-top" data-aos-duration="600">C0DA</h2>
                    <div class="invite__text">by Michael Kirkbride</div>
                </div>
                {/*
                <div class="invite__gallery">
                    <div class="invite__preview"><img src="img/figures-7.1.png" /></div>
                    <div class="invite__preview" data-aos="animation-translate-down" data-aos-duration="1000"><img src="img/figures-7.2.png" /></div>
                </div>               
                */}
            </div>
        </div>
    </div>
  )
}