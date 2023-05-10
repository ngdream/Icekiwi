import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <section className="book px-5" style={{ backgroundImage: 'url(book.jpg)' }} >

                <div className='content'>

                    <div className='text'>
                        <span className="text-5xl font-bold text-blue">
                            literary service</span>

                        <p className="text-gray text-xl">
                            we offer content editing and translation services for translation services, you will send the text to our mailbox after we will send you an invoice and the translation time after payment and we will send you the translated document in time, 0.02$ min per word
                        </p>
                    </div>
                </div>

            </section>

            <Footer />

        </>
    )
}