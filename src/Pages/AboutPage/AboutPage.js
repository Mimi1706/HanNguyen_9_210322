import "./AboutPage.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import imgBanner from "../../Assets/about_banner.png"
import Collapsible from "../../Components/Collapsible/Collapsible"

import dataAbout from "../../Data/dataAbout"

const AboutPage = () => {
  return (
    <main>
      <HeroBanner
        className="aboutBanner"
        img={imgBanner}
        alt="Paysage de rochers dans l'eau"
      />

      <div className="collapsibleAboutWrapper">
        {dataAbout.map((info, index) => {
          return (
            <Collapsible key={index} label={info.title} text={info.bodyText} />
          )
        })}
      </div>
    </main>
  )
}

export default AboutPage
