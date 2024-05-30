import React, { useState } from "react";
import axios from "axios";

type PostData = {
  id: number;
  postName: string;
  content: string;
  image: string;
  iD_Account: number;
  accountName: string;
};

type AddPostDialogProps = {
  onClose: () => void;
  onAddSuccess: () => void;
};

export default function AddPostDialog({
  onClose,
  onAddSuccess,
}: AddPostDialogProps) {
  const [newPost, setNewPost] = useState<PostData>({
    id: 0,
    postName: "",
    content: "",
    image: "",
    iD_Account: 1,
    accountName: "",
  });

  const addPost = async () => {
    try {
      const response = await axios.post(
        "https://localhost:44390/AddPost",
        newPost,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      if (response.status === 200 || response.status === 201) {
        console.log("Thêm bài đăng thành công!");
        onAddSuccess();
      } else {
        console.error("Thêm bài đăng thất bại: ", response.data);
      }
    } catch (error: any) {
      console.error("Lỗi khi thêm bài đăng: ", error.message);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="font-bold text-green-900 text-xl flex items-center justify-center ">
          Thêm Bài Viết
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="text-sm text-black p-2">
            <label
              className="block text-green-900  text-base font-bold mb-1"
              htmlFor="postName"
            >
              Tên bài viết
            </label>
            <input
              type="text"
              name="postName"
              value={newPost.postName}
              onChange={handleInputChange}
              placeholder="Tên Bài Viết"
              className="w-full p-1 mb-3 border border-gray-400"
            />
            <label
              className="block text-green-900  text-base font-bold mb-1"
              htmlFor="image"
            >
              Hình ảnh
            </label>
            <input
              type="text"
              name="image"
              value={newPost.image}
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
              value={newPost.content}
              onChange={handleInputChange}
              placeholder="Nội dung"
              className="border border-gray-400 w-full h-40 p-1 "
            />
          </div>
          <div className="flex justify-end space-x-2 mt-2">
            <button
              onClick={onClose}
              className="px-4 py-1 bg-gray-400 hover:bg-gray-500 rounded"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 hover:bg-blue-800 text-white rounded "
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
