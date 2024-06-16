import HeroLanding from "../Component/HeroLanding"
import Footer from "../Component/Footer"
import ContentBenefitsPage from "../Component/ContentBenefitsPage"

const BenefitsPage = () => {
    return(
        <>
        <HeroLanding
        title="Benefits"
        imageUrl="../public/img/benefits-page.jpg"
        />
        <ContentBenefitsPage/>
        <Footer/>
        </>
    )
}

export default BenefitsPage