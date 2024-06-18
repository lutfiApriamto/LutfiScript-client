import { Link } from "react-router-dom";
import ParagraphContent from "./ParagraphContent";

const ContentAboutPage = () => {
    return(
        <>
        <section id="content" className="w-full py-10 px-6 sm:px-16 md:px-32 lg:px-60">
            <div className="w-full bg-white rounded-xl px-10 py-5 shadow-xl md:px-16 md:py-8 lg:px-8">
                <div className="text-center">
                <ParagraphContent
                pargraphValue="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex recusandae porro, atque necessitatibus eius hic provident voluptatem laborum debitis quaerat unde accusamus molestiae ipsum blanditiis voluptatum, tempora, quidem illum ducimus. Itaque quod, impedit placeat commodi aliquam minima corrupti recusandae unde eos iure facilis adipisci similique ipsum provident aspernatur, nihil libero, illum odio! Reiciendis autem molestias earum, pariatur ratione accusantium odit quibusdam dolorem quos tempore doloremque maxime cupiditate vitae architecto, quia minus sit nihil fugiat odio voluptatibus. Minus repudiandae, facilis in sunt nulla aperiam sit illo neque quibusdam est temporibus mollitia. Nobis odit, cum autem quam tenetur provident deleniti animi ex."
                />
                <ParagraphContent
                pargraphValue="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex recusandae porro, atque necessitatibus eius hic provident voluptatem laborum debitis quaerat unde accusamus molestiae ipsum blanditiis voluptatum, tempora, quidem illum ducimus. Itaque quod, impedit placeat commodi aliquam minima corrupti recusandae unde eos iure facilis adipisci similique ipsum provident aspernatur, nihil libero, illum odio! Reiciendis autem molestias earum, pariatur ratione accusantium odit quibusdam dolorem quos tempore doloremque maxime cupiditate vitae architecto, quia minus sit nihil fugiat odio voluptatibus. Minus repudiandae, facilis in sunt nulla aperiam sit illo neque quibusdam est temporibus mollitia. Nobis odit, cum autem quam tenetur provident deleniti animi ex."
                />
                    <Link to="/login" className="bg-yellow-300 px-4 py-2 rounded-xl mb-4 shadow-lg md:text-lg md:px-6 hover:bg-yellow-500 transition duration-500" >Get Started</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContentAboutPage;