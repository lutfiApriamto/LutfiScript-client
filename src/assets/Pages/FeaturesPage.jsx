import HeroLanding from "../Component/HeroLanding";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <>
      <HeroLanding
        title="Features"
        imageUrl="/img/features-page.jpg"
      />
      <section id="features" className="w-full py-10">
        <div className="px-3 sm:px-36 md:flex md:px-5 md:justify-evenly">
          <div className="bg-white py-5 px-5 rounded-xl mb-5 sm:px-8 md:w-2/5 md:mb-0">
            <div className="w-full h-44 mb-2 lg:h-52 sm:mb-4">
              <img
                src="/img/features-page-image1.jpg"
                alt=""
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
            <h1 className="font-black text-3xl mb-2 sm:mb-4 sm:text-4xl ">
              Modules📚
            </h1>
            <p className="text-sm text-justify md:text-lg">
              Lutfiscript menyediakan modul-modul pembelajaran yang dapat kalian nikmati secara GRATIS Loh 🥳!!
              ini sangat memudahkan kalian-kalian para pemula yang sedang belajar bahasa pemrograman javascript.
              jadi tunggu apa lagi ? daftar dan mulailah belajar 😊😊.
            </p>
          </div>
          <div className="bg-white py-5 px-5 rounded-xl mb-5 sm:px-8 md:w-2/5 md:mb-0">
            <div className="w-full h-44 mb-2 lg:h-52 sm:mb-4">
              <img
                src="/img/features-page-image2.jpg"
                alt=""
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
            <h1 className="font-black text-3xl mb-2 sm:mb-4 sm:text-4xl ">
              Programming Quiz🎮
            </h1>
            <p className="text-sm text-justify md:text-lg">
              bukan hanya module pembelajaran, Lutfiscript juga menyediakan beberapa programming quiz menarik seputar bahasa pemrograman javascript loh 🥳🥳!!
              jadi kalian dapat menguji sampai mana pememahaman kalian mengenai javascript. yuk lah gaskeun cuyy 💨 !!
            </p>
          </div>
        </div>
        <div className="text-center md:mt-8">
          <Link
            to="/login"
            className="bg-yellow-300 px-4 py-2 rounded-xl mb-4 shadow-lg md:text-lg md:px-6 hover:bg-yellow-500 transition duration-500"
          >
            Get Started
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FeaturesPage;
