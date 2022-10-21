export default function Home() {
  return (
    <div className="invite">
        <div className="invite__center center">
            <div className="invite__container">
                <div style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(apocalypse_v5.png)", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover"
                }} className="invite__bg"></div>
                <div className="invite__wrap">
                    <h2 className="invite__title d1" data-aos="animation-scale-top" data-aos-duration="600">C0DA</h2>
                    <div className="invite__text">by Michael Kirkbride</div>
                </div>
                {/*
                <div className="invite__gallery">
                    <div className="invite__preview"><img src="img/figures-7.1.png" /></div>
                    <div className="invite__preview" data-aos="animation-translate-down" data-aos-duration="1000"><img src="img/figures-7.2.png" /></div>
                </div>               
                */}
            </div>
        </div>
    </div>
  )
}