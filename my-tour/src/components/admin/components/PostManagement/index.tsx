import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddPostDialog from "./AddPost";
import UpdatePost from "./UpdatePost";

import { PostData } from "../../../../types/PostData";
import ConfirmDeleteDialog from "./DeletePost";

export default function PostManagement() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("https://localhost:44390/GetPost")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const deletePost = (id: number) => {
    axios
      .delete(`https://localhost:44390/DeletePost?id=${id}`)
      .then(() => {
        fetchPosts();
        setShowConfirmDelete(false);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const handleAddPostSuccess = () => {
    fetchPosts();
    setShowAddDialog(false);
  };

  const handleUpdatePostSuccess = () => {
    fetchPosts();
    setShowUpdateDialog(false);
  };

  const handleShowAddDialog = () => {
    setShowAddDialog(true);
  };

  const handleShowUpdateDialog = (post: PostData) => {
    setSelectedPost(post);
    setShowUpdateDialog(true);
  };

  const handleCloseAddDialog = () => {
    setShowAddDialog(false);
  };

  const handleCloseUpdateDialog = () => {
    setShowUpdateDialog(false);
  };

  const handleShowConfirmDelete = (id: number) => {
    setPostToDelete(id);
    setShowConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setPostToDelete(null);
    setShowConfirmDelete(false);
  };

  const handleConfirmDelete = () => {
    if (postToDelete !== null) {
      deletePost(postToDelete);
    }
  };

  const nextPage = () => {
    if (currentPage * pageSize < posts.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayedPosts = posts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-2xl p-2">Quản Lý Bài Viết</h2>
        </div>
        <div className="flex justify-end items-end px-5 mb-4">
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded"
            onClick={handleShowAddDialog}
          >
            Thêm
          </button>
        </div>
        <div>
          <hr className="border-hr" />
          <div className="grid grid-cols-5 text-center items-center w-full text-sm font-medium p-2">
            <div className="col-span-1">STT</div>
            <div className="col-span-1">Tên bài</div>
            <div className="col-span-1">Nội dung</div>
            <div className="col-span-1">Hình ảnh</div>
            <div className="col-span-1">Chức năng</div>
          </div>
          <hr className="border-hr" />
          {displayedPosts.map((post, index) => (
            <div
              key={post.id}
              className={`grid grid-cols-5 text-text_table_laber text-center items-center w-full text-xs relative p-2 ${
                index % 2 === 0
                  ? "bg-gray-400 border-y border border-gray-400 "
                  : "border-y border border-gray-200 "
              }`}
            >
              <div className="col-span-1">{(currentPage - 1) * pageSize + index + 1}</div>
              <div className="col-span-1">{post.postName}</div>
              <div className="col-span-1">{post.content}</div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src={post.image}
                  alt={post.postName}
                  className="w-14 h-10"
                />
              </div>
              
              <div className="col-span-1 flex space-x-2 items-center justify-center">
                <div>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleShowUpdateDialog(post)}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleShowConfirmDelete(post.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr" />
      <div className="flex justify-between px-5 mt-4">
        <button
          className="px-4 py-1 bg-blue-500 text-white rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Trang trước
        </button>
        <button
          className="px-4 py-1 bg-blue-500 text-white rounded"
          onClick={nextPage}
          disabled={currentPage * pageSize >= posts.length}
        >
          Trang tiếp theo
        </button>
      </div>

      {showAddDialog && (
        <AddPostDialog
          onClose={handleCloseAddDialog}
          onAddSuccess={handleAddPostSuccess}
        />
      )}

      {showUpdateDialog && selectedPost && (
        <UpdatePost
          onClose={handleCloseUpdateDialog}
          onUpdateSuccess={handleUpdatePostSuccess}
          post={selectedPost}
        />
      )}

      {showConfirmDelete && (
        <ConfirmDeleteDialog
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
}
