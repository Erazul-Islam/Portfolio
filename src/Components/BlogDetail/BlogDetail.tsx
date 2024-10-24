import React from 'react';
import { useGetAllBlogsQuery } from '../../redux/feature/Endpoint/Endpoint';
import DOMPurify from 'dompurify';

const BlogDetail = () => {

    const { data } = useGetAllBlogsQuery(null)
    
    const posts = data?.data

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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;