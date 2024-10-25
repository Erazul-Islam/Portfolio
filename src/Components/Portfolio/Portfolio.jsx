import { useGetAllProjectQuery } from '../../redux/feature/Endpoint/Endpoint';
import './portfolio.scss'


const Portfolio = () => {

    const { data } = useGetAllProjectQuery()

    

    const projects = data?.data

    return (
        <div>
            <div className="py-10  text-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {projects?.map((project) => (
                            <div
                                key={project._id}
                                className="bg-indigo-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.details}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg mb-4">{project.details}</p>
                                    <div className=''>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            View Project
                                        </a>
                                        <a
                                            href={project.client}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            Git hub client
                                        </a>
                                        <a
                                            href={project.backend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            Git hub backend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;