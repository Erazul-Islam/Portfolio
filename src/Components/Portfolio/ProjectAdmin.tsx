import React, { useState } from 'react';
import { useDeleteProjectMutation, useGetAllProjectQuery, useUpdateBlogMutation } from '../../redux/feature/Endpoint/Endpoint';
import './portfolio.scss'
import Swal from 'sweetalert2';
import { Button, Form, Input, Modal } from 'antd';


const AdminProject = () => {

    const { data, refetch } = useGetAllProjectQuery(null)
    const [deleteProject] = useDeleteProjectMutation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [updateProject] = useUpdateBlogMutation()
    const [form] = Form.useForm();

    const showUpdateModal = (project) => {
        setCurrentBlog(project);
        form.setFieldsValue({
            details: project.details,
            link: project.link,
            image: project.image,
            client: project.client,
            backend: project.backend
        });
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = async (values) => {
        const updatedValues = {
            ...values,
        };

        try {
            const x = await updateProject({ projectId: currentBlog?._id, data: updatedValues }).unwrap();
            // console.log('x',x)
            refetch();
            Swal.fire({
                title: "Good job!",
                text: "Blog has been updated",
                icon: "success"
            });
            setIsModalOpen(false);
        } catch (error) {
            console.error('Failed to update blog:', error);
        }
    };

    const handleDelete = async (projectId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            customClass: {
                confirmButton: 'swal2-confirm',
                cancelButton: 'swal2-cancel'
            },
            reverseButtons: true,
            didOpen: () => {
                const confirmButton = Swal.getConfirmButton();
                const cancelButton = Swal.getCancelButton();
                if (confirmButton) {
                    confirmButton.style.backgroundColor = '#6b5dc5';
                    confirmButton.style.color = '#fff';
                }
                if (cancelButton) {
                    cancelButton.style.backgroundColor = '#8e7cc7';
                    cancelButton.style.color = '#fff';
                }
            }
        });

        if (result.isConfirmed) {
            try {
                await deleteProject(projectId).unwrap();
                refetch()
                Swal.fire("Deleted!", "Project has been deleted.", "success");
            } catch (error) {
                console.error("Failed to delete project:", error);
                Swal.fire("Error!", "Failed to delete the project.", "error");
            }
        }
    };


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
                                    <div className='flex mt-4 mb-4 justify-around'>
                                        {/* <button onClick={() => showUpdateModal(project)} className='btn bg-indigo-700 border-none rounded-sm '>Update</button> */}
                                         <button onClick={() => handleDelete(project._id)} className='btn bg-indigo-700 border-none rounded-sm '>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                title="Update Blog"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} onFinish={handleUpdate}>
                    <Form.Item
                        label="Details"
                        name="details"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="link"
                        name="link"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Photo URL"
                        name="image"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Client"
                        name="client"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Backend"
                        name="backend"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="btn bg-purple-700 text-white rounded-sm">
                            Update Project
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminProject;