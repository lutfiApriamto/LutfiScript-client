import { Link } from "react-router-dom";
import ParagraphContent from "./ParagraphContent";

const ContentBenefitsPage = () => {
    return(
        <>
        <section id="content" className="w-full py-10 px-6 sm:px-16 md:px-32 lg:px-60">
            <div className="w-full bg-white rounded-xl px-10 py-5 shadow-xl md:px-16 md:py-8 lg:px-8">
                <div className="text-center">
                <ParagraphContent
                pargraphValue="Menurut laporan LinkedIn (2020), ”keterampilan dalam bahasa pemrograman seperti JavaScript termasuk dalam sepuluh keterampilan yang paling dicari di pasar tenaga kerja global.”. Hal tersebut karena JavaScript  merupakan salah satu bahasa pemrograman yang menjadi peran vital dalam pengembangan aplikasi web interaktif dan dinamis. Menguasai JavaScript menjadi sebuah keharusan bagi para pengembang web dan profesional IT jika ingin tetap kompetitif di pasar kerja. Namun, tantangan terbesar dalam mempalajari JavaScript adalah kompleksitas bahasa itu sendiri serta keterbatasan sumber belajar yang terstruktur dan mudah diakses."
                />
                <ParagraphContent
                pargraphValue="WAW 😍😍 dari pernyataan di atas, sungguh menarik bukan mempelajari javascript. Dan dengan hadirnya Lutfiscript, diharapkan kalian para pemula yang sedang mempelajari javascript dapat dengan mudah melewati rintangan yang sudah di sebutkan sebelumnya. Karena bukan hanya gratis, namun LutfiScript juga dapat di akses dimana saja dan kapan saja sesuai dengan kegiatan kalian loh🥳🥳. tunggu apa lagi ? segera daftarkan diri anda dan mulailah belajar. semangatt !!!"
                />
                    <Link to="/login" className="bg-yellow-300 px-4 py-2 rounded-xl mb-4 shadow-lg md:text-lg md:px-6 hover:bg-yellow-500 transition duration-500" >Get Started</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContentBenefitsPage;