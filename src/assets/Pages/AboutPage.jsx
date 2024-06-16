import HeroLanding from "../Component/HeroLanding"
import Footer from "../Component/Footer"
import ContentAboutPage from "../Component/ContenAboutPage"

const AboutPage = () => {
    return(
        <>
        <HeroLanding
        title="About Us"
        imageUrl="../public/img/about-page.jpg"
        />
        <ContentAboutPage/>
        <Footer/>
        </>
    )
}

export default AboutPage