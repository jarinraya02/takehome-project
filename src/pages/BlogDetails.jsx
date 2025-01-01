import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaTag } from "react-icons/fa";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.org/posts");
        const blogs = await response.json();
        const foundBlog = blogs.find((b) => b.slug === slug);

        if (!foundBlog) {
          setError("Blog not found. Please check the URL.");
        } else {
          setBlog(foundBlog);
        }
      } catch (err) {
        setError("Failed to fetch blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const formattedDate = (() => {
    try {
      const parsedDate = parseDate(blog.publishedAt);
      return parsedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid Date";
    }
  })();

  return (
    <div className="container mx-auto p-4 max-w-6xl mt-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-col md:flex-row">
         
          <div className="md:w-1/2 w-full relative">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
            />
          </div>

        
          <div className="md:w-1/2 w-full p-6 md:p-8">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-left mb-2 md:mb-0">
                {blog.title}
              </h1>
              <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center text-left">
                  <FaTag className="mr-2" />
                  <span className="capitalize">{blog.category}</span>
                </div>
              </div>
            </div>

         
            <div className="flex items-center text-gray-600 mb-6 text-left">
              <FaCalendarAlt className="mr-2" />
              <span>{formattedDate}</span>
            </div>

        
            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed text-left">
                {blog.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews */}
      <Reviews />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default BlogDetails;