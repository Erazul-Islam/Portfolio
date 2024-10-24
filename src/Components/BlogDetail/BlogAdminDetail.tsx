import React, { useState } from 'react';
import { useDeleteblogMutation, useGetAllBlogsQuery, useUpdateBlogMutation } from '../../redux/feature/Endpoint/Endpoint';
import DOMPurify from 'dompurify';
import { Button, Form, Input, Modal } from 'antd';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2'
import './custombutton.css'

const BlogAdminDetail = () => {

    const { data, refetch } = useGetAllBlogsQuery(null)
    const [updateBlog] = useUpdateBlogMutation()
    const [deleteBlog] = useDeleteblogMutation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [quillValue, setQuillValue] = useState('')
    const [form] = Form.useForm();

    const posts = data?.data;

    const showUpdateModal = (blog) => {
        setCurrentBlog(blog);
        form.setFieldsValue({
            caption: blog.caption,
            photo: blog.photo,
        });
        setQuillValue(blog.description)
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const handleUpdate = async (values) => {
        const updatedValues = {
            ...values,
            description: DOMPurify.sanitize(values.description),
        };
        try {
            const x = await updateBlog({ blogId: currentBlog?._id, data: updatedValues }).unwrap();
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

    const handleDelete = async (blogId) => {
        Swal.fire({
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
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteBlog(blogId).unwrap();
                    refetch();
                    Swal.fire("Deleted!", "Blog has been deleted.", "success");
                } catch (error) {
                    console.error("Failed to delete blog:", error);
                    Swal.fire("Error!", "Failed to delete the blog.", "error");
                }
            }
        });
    };

    return (
        <div>
            <div className=" py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
                        Latest Posts
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts?.map((post) => (
                            <div
                                key={post._id}
                                className="bg-purple-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={post?.photo}
                                    alt={post?.caption}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {post.caption}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description) }} className="text-white mb-4"></div>
                                </div>
                                <div className='flex mb-4 justify-around'>
                                    <button onClick={() => showUpdateModal(post)} className='btn bg-pink-600 border-none rounded-sm '>Update</button> <button onClick={() => handleDelete(post._id)} className='btn bg-pink-600 border-none rounded-sm '>Delete</button>
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
                        label="Caption"
                        name="caption"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <ReactQuill
                            className="h-40 text-black"
                            placeholder="Write an engaging description here..."
                            theme="snow"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Photo URL"
                        name="photo"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="btn bg-purple-700 text-white rounded-sm">
                            Update Blog
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default BlogAdminDetail;