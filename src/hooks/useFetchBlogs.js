import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBlogs = (url) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(url);
        setBlogs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [url]);

  return { blogs, loading, error };
};

export default useFetchBlogs;
