import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PostData } from "../../../../types/PostData";

export default function BlogCustomer() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostData[]>(
          "https://localhost:44390/GetPost"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="px-10">
        <img
          src="Blog/logo.png"
          alt="Bac Location"
          style={{ width: "1200px", height: "400px" }}
        />
      </div>
      <hr className="border-hr" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-10">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden relative">
            <img
              src={post.image}
              alt={post.postName}
              style={{ width: "300px", height: "200px" }}
            />
            <div className="text-black bg-gray-200 px-4 py-2 roundedlg">
              <h3 className="text-xl font-semibold">{post.postName}</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <Link to={`/PostDetails/${post.id}`}>
                <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors duration-300">
                  Xem ngay
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
