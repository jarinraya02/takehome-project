import React, { useState, useRef, useEffect } from "react";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import BlogCard from "../Blogs/BlogCard";
import SearchBar from "../SearchBar";
import Navbar from "../Navbar";

const BlogList = () => {
    const { blogs, loading, error } = useFetchBlogs("https://jsonplaceholder.org/posts");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleBlogs, setVisibleBlogs] = useState(20);
    const [notificationCount, setNotificationCount] = useState(0);
    const observerRef = useRef(null);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const loadMoreBlogs = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 10);
    };

    const incrementNotificationCount = () => {
        setNotificationCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (!observerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting) {
                    loadMoreBlogs();
                }
            },
            { root: null, rootMargin: "0px", threshold: 1.0 }
        );

        const currentObserverRef = observerRef.current;
        observer.observe(currentObserverRef);


        return () => observer.unobserve(currentObserverRef);
    }, []);

    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

    return (
        <div className="container mx-auto p-4">

            <Navbar notificationCount={notificationCount} />
            {/* Searchbar */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">Blog Posts</h1>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
                    <BlogCard key={blog.id} blog={blog} incrementNotificationCount={incrementNotificationCount} />
                ))}
            </div>


            {visibleBlogs < filteredBlogs.length && (
                <div ref={observerRef} className="h-10 mt-6 flex items-center justify-center">
                    <span className="text-gray-500">Loading more blogs...</span>
                </div>
            )}
        </div>
    );
};

export default BlogList;
