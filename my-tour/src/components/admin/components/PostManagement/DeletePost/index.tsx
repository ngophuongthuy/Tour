import React from "react";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteDialog: React.FC<Props> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-lg font-bold mb-4">Xác nhận xóa</h2>
        <p className="mb-4">Bạn có chắc chắn muốn xóa bài viết này không?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            Xóa
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded"
            onClick={onCancel}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteDialog;
