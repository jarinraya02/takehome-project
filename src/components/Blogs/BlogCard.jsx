import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, incrementNotificationCount }) => {
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

  const handleCardClick = () => {
    incrementNotificationCount();
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={handleCardClick}>
      {/* Blog Thumbnail */}
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      {/* Date and Category */}
      <div className="flex justify-between px-4 py-2 text-sm text-gray-500">
        <span className="font-semibold">
          <FaCalendarAlt className="inline-block mr-1" />
          {formattedDate}
        </span>
        <span className="capitalize font-semibold">{blog.category}</span>
      </div>

      {/* Blog Title */}
      <div className="px-4">
        <h3 className="text-lg font-bold text-gray-800 text-left">
          {blog.title}
        </h3>
      </div>

      {/* Blog Content */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600 mt-2 text-left">
          {blog.content.substring(0, 100)}...{" "}
          <Link
            to={`/blog/${blog.slug}`}
            className="text-blue-500 hover:underline text-sm"
          >
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
