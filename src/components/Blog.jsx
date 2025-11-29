import React from 'react';
import { motion } from 'framer-motion';

const posts = [
    {
        title: "The Future of Generative AI",
        excerpt: "How large language models are reshaping the creative industry.",
        date: "Nov 28, 2025",
        category: "Technology"
    },
    {
        title: "Scaling AI Infrastructure",
        excerpt: "Best practices for deploying machine learning models at scale.",
        date: "Nov 25, 2025",
        category: "Engineering"
    },
    {
        title: "AI Ethics and Safety",
        excerpt: "Why responsible AI development matters more than ever.",
        date: "Nov 20, 2025",
        category: "Policy"
    },
    {
        title: "Optimizing Neural Networks",
        excerpt: "Techniques for reducing latency and improving inference speed.",
        date: "Nov 15, 2025",
        category: "Research"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest Insights</h1>
                    <p className="text-xl text-gray-400">News, updates, and thoughts from our team.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-neon-blue text-sm font-bold uppercase tracking-wider">{post.category}</span>
                                <span className="text-gray-500 text-sm">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors">{post.title}</h2>
                            <p className="text-gray-400">{post.excerpt}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
