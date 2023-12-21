/* eslint-disable react/prop-types */
import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
const items = [
    {
        id: 1,
        title: 'Food Donation campaign',
        img: "https://i.ibb.co/ZKzMjzC/React-Project-Ideas.webp",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, sint!"
    },
    {
        id: 2,
        title: 'React cmpaign',
        img: "https://i.ibb.co/yFZ151q/down.jpg",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, sint!"
    },
    {
        id: 3,
        title: 'JavaScript',
        img: "https://i.ibb.co/028QG1M/React-Projects.png",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, sint!"
    },
    {
        id: 4,
        title: 'Helping the poor people',
        img: "https://i.ibb.co/ZKzMjzC/React-Project-Ideas.webp",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, sint!"
    }
]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.des}</p>
                        <button>see</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    return (
        <div className='portfolio' >
            {
                items.map(item => (
                    <Single item={item} key={item.id}></Single>
                ))
            }
        </div>
    );
};

export default Portfolio;