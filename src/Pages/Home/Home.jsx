import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:ml-64 lg:mt-64 lg:mr-64">
                <Banner></Banner>
                <div className="mt-96">
                    <About></About>
                </div>
            </div>
        </div>
    );
};

export default Home;