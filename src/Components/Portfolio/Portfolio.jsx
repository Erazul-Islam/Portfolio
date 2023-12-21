import './portfolio.scss'


const Portfolio = () => {

    return (
        <div>
            <h1 className='text-5xl text-center text-orange-400 font-bold pt-16'>Featured Works</h1>
            <div className='flex justify-between mt-36 ml-56 mr-56 text-center items-center'>
                <div>
                    <a href="https://food-wave-dba6f.web.app/">
                        <img className='w-[650px] h-[500px]' src="https://i.ibb.co/YNwdnjX/poco-food-wordpress-theme.jpg" alt="" />
                    </a>
                </div>
                <div>
                    <h1 className='text-3xl text-white font-semibold'>Food Wave</h1>
                    <p className='text-left pt-4'>
                        This is a food donation website where a person post his rest food to donate and a person who can easily get this food. <br /> This is a interesting feature of the website.
                        The interesting feature of the project is , <br /> if a person post food he can see in the available section. If a person request for food then <br /> he can easily request for the food.
                        In the project <br /> I use some react application which make the website impressive and catchy.I explore some package which help me <br /> to apply in the interesting part of the project.
                        The website is a donation type website which poor people to collect food. <br /> So I think this is the main and interesting part of the project.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;