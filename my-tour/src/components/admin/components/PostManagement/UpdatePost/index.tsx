import React, { useState, useEffect } from "react";
import axios from "axios";

type PostData = {
  id: number;
  postName: string;
  content: string;
  image: string;
  iD_Account: number;
  accountName: number;
};

type UpdatePostProps = {
  onClose: () => void;
  onUpdateSuccess: () => void;
  post: PostData;
};

export default function UpdatePost({
  onClose,
  onUpdateSuccess,
  post,
}: UpdatePostProps) {
  const [updatePost, setUpdatePost] = useState<PostData>(post);

  useEffect(() => {
    setUpdatePost(post);
  }, [post]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatePost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://localhost:44390/UpdatePost",
        updatePost,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Include other headers here if needed
          },
        }
      );
      if (response.status === 200) {
        onUpdateSuccess();
      }
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="font-bold text-green-900 text-xl flex items-center justify-center mb-4">
          Cập nhật Bài viết
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="text-sm text-black p-2">
            <label
              className="block text-green-900  text-base font-bold mb-1"
              htmlFor="content"
            >
              Tên bài viết
            </label>
            <input
              type="text"
              name="postName"
              value={updatePost.postName}
              onChange={handleInputChange}
              placeholder="Tên Bài Viết"
              className="w-full p-1 mb-3 border border-gray-400"
            />
            <label
              className="block text-green-900  text-base font-bold mb-1"
              htmlFor="content"
            >
              Hình ảnh
            </label>

            <input
              type="text"
              name="image"
              value={updatePost.image}
              onChange={handleInputChange}
              placeholder="Hình ảnh"
              className="w-full p-1 border border-gray-400 mb-3"
            />
            <label
              className="block text-green-900  text-base font-bold mb-1"
              htmlFor="content"
            >
              Nội dung
            </label>
            <textarea
              name="content"
              value={updatePost.content}
              onChange={handleInputChange}
              placeholder="Nội dung"
              className="border border-gray-400 w-full h-40 p-1 "
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4 px-5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
