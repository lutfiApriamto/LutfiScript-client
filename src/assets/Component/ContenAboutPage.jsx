import { Link } from "react-router-dom";
import ParagraphContent from "./ParagraphContent";

const ContentAboutPage = () => {
    return(
        <>
        <section id="content" className="w-full py-10 px-6 sm:px-16 md:px-32 lg:px-60">
            <div className="w-full bg-white rounded-xl px-10 py-5 shadow-xl md:px-16 md:py-8 lg:px-8">
                <div className="text-center">
                <ParagraphContent
                pargraphValue={`JavaScript adalah bahasa pemrograman web yang bekerja di sisi klien, di mana pemrosesannya dilakukan oleh aplikasi klien seperti web browser. Contoh web browser yang memproses JavaScript antara lain Google Chrome, Mozilla Firefox, Opera Mini, dan lainnya. Sebagai bahasa pemrograman Client Side, JavaScript memungkinkan interaksi langsung dengan pengguna tanpa perlu mengirimkan permintaan kembali ke server (Omar, Astriana dan Miftahul, 2018).`}
                />
                <ParagraphContent
                pargraphValue="Tidak sedikit platform e-learning saat ini yang menawarkan kursus JavaScript, namun tidak semuanya memberikan pengalaman belajar yang optimal. Beberapa masalah umum yang sering dihadapi oleh siswa yang ingin memulai belajar bahasa pemrograman JavaScript di antaranya adalah tingginya biaya kursus, kurangnya materi pembelajaran yang tersedia  dalam bahasa Indonesia, dan tampilan atau mode pembelajaran yang kurang menarik."
                />
                <ParagraphContent
                pargraphValue="Oleh karena itu, diperlukan sebuah platform e-learning yang tidak hanya memberikan materi secara gratis dan dapat diakses oleh semua kalangan, tetapi juga dirancang dengan pendekatan interaktif dan praktis untuk meningkatkan efektivitas pembelajaran. Dan kini LutfiScript Hadir untuk mengatasi semua masalah tersebut. Tunggu apalagi ? yuk gaskeun cuyy !!!"
                />
                    <Link to="/login" className="bg-yellow-300 px-4 py-2 rounded-xl mb-4 shadow-lg md:text-lg md:px-6 hover:bg-yellow-500 transition duration-500" >Get Started</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContentAboutPage;