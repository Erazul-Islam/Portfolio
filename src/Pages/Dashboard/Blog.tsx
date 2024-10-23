import React, { useState } from 'react';
import { useCreateBlogMutation } from '../../redux/feature/Endpoint/Endpoint';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2'

const Blog = () => {

    const [createBlog] = useCreateBlogMutation();
    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const blogData = { caption, description };
            await createBlog(blogData).unwrap();
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            setCaption('');
            setDescription('');
        } catch (error) {
            console.error('Failed to create blog:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#0c0c1d] flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                ✍️ Create Your Awesome Blog
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full p-3 border bg-purple-700 text-white border-gray-300 rounded-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                        placeholder="Enter a catchy caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <ReactQuill
                        className="h-40 text-black"
                        placeholder="Write an engaging description here..."
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-3 mt-12 rounded-sm text-white font-semibold transition-colors ${
                        loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
                    }`}
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                            Creating...
                        </div>
                    ) : (
                        'Create Blog Post'
                    )}
                </button>
            </form>
        </div>
    </div>
    );
};

export default Blog;