import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateProjectMutation, useGetAllProjectQuery } from '../../redux/feature/Endpoint/Endpoint';
import Swal from 'sweetalert2';
import AdminProject from '../../Components/Portfolio/ProjectAdmin';

type ProjectFormInputs = {
    details: string;
    link: string;
    image: string;
    client: string,
    backend: string
};

const Project: React.FC = () => {
    const [createProject] = useCreateProjectMutation();
    const {refetch} = useGetAllProjectQuery(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ProjectFormInputs>();

    const onSubmit = async (data: ProjectFormInputs) => {
        try {
            await createProject(data);
            Swal.fire({
                icon: 'success',
                title: 'Project added!',
                text: 'Your project has been successfully added.',
            });
            reset();
            refetch()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while adding the project!',
            });
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Add New Project</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="details" className="block font-semibold mb-2">
                                Project Details
                            </label>
                            <textarea
                                id="details"
                                {...register('details', { required: 'Project details are required' })}
                                className={`w-full px-4 text-white py-2 border rounded-lg focus:outline-none ${errors.details ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Describe your project..."
                            />
                            {errors.details && (
                                <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="link" className="block font-semibold mb-2">
                                Project Link
                            </label>
                            <input
                                type="url"
                                id="link"
                                {...register('link', {
                                    required: 'Project link is required',
                                    pattern: {
                                        value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                                        message: 'Please enter a valid URL',
                                    },
                                })}
                                className={`w-full px-4 text-white py-2 border rounded-lg focus:outline-none ${errors.link ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="https://yourproject.com"
                            />
                            {errors.link && (
                                <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="link" className="block font-semibold mb-2">
                                Github client link
                            </label>
                            <input
                                type="url"
                                id="client"
                                {...register('client', {
                                    required: 'Client link is required',
                                    pattern: {
                                        value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                                        message: 'Please enter a valid URL',
                                    },
                                })}
                                className={`w-full px-4 text-white py-2 border rounded-lg focus:outline-none ${errors.client ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="https://yourclientgithub.com"
                            />
                            {errors.client && (
                                <p className="text-red-500 text-sm mt-1">{errors.client.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="link" className="block font-semibold mb-2">
                                Github backend link
                            </label>
                            <input
                                type="url"
                                id="backend"
                                {...register('backend', {
                                    required: 'Backend link is required',
                                    pattern: {
                                        value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                                        message: 'Please enter a valid URL',
                                    },
                                })}
                                className={`w-full px-4 text-white py-2 border rounded-lg focus:outline-none ${errors.backend ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="https://yourbackendurl.com"
                            />
                            {errors.backend && (
                                <p className="text-red-500 text-sm mt-1">{errors.backend.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="image" className="block font-semibold mb-2">
                                Image Link
                            </label>
                            <input
                                type="url"
                                id="image"
                                {...register('image', {
                                    required: 'Image link is required',
                                    pattern: {
                                        value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                                        message: 'Please enter a valid URL',
                                    },
                                })}
                                className={`w-full px-4 py-2 text-white border rounded-lg focus:outline-none ${errors.image ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="https://imageurl.com"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Submit Project
                        </button>
                    </form>
                </div>
            </div>
            <AdminProject />
        </div>
    );
};

export default Project;
