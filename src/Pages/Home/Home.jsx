import Navbar from "../../Components/Navbar/Navbar";
import "./app.scss"

const Home = () => {
    return (
        <div>
            <section id="Homepage">
                <Navbar></Navbar>
            </section>
            <section>Paralax</section>
            <section id="Portfolio">Paralax</section>
            <section id="Services">Services</section>
            <section>portfolio1</section>
            <section>portfolio2</section>
            <section>portfolio3</section>
            <section id="Contact">Contact</section>
            <section id="About">About</section>
        </div>
    );
};

export default Home;