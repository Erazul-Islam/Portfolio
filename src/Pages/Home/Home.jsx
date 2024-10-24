import BlogDetail from "../../Components/BlogDetail/BlogDetail";
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
            <section>
                <Portfolio></Portfolio>
            </section>
            <section className="md:hidden">
            </section>
            <section> <BlogDetail /> </section>
            <section id="Contact"><Contact></Contact></section>
        </div>
    );
};

export default Home;