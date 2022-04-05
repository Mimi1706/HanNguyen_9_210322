import "./HeroBanner.css"

const HeroBanner = (props) => {
  return (
    <section className={props.className}>
      <img src={props.img} alt={props.alt} className="heroBannerImg"></img>
      <div className="heroBannerShade"></div>
      <p className="heroBannerText">{props.text}</p>
    </section>
  )
}

export default HeroBanner
