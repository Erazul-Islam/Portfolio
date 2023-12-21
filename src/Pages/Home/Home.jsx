import Cursor from "../../Components/Cursor/Cursor";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Parallax from "../../Components/Parallax/Parallax";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Services from "../../Components/Services/Services";
import Contact from "./Contact/Contact";
import "./app.scss"

const Home = () => {
    return (
        <div>
            <Cursor></Cursor>
            <section id="Homepage">
                <Navbar></Navbar>
                <Hero></Hero>
            </section>
            <section id="Services"> <Parallax type="services"></Parallax> </section>
            <section> <Services></Services> </section>
            <section id="Portfolio"> <Parallax type="portfolio"></Parallax> </section>
            <Portfolio></Portfolio>
            <section id="Contact"> <Contact></Contact> </section>
            {/* <section id="About">About</section> */}
        </div>
    );
};

export default Home;