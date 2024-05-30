import React, { useState, useEffect } from "react";
import axios from "axios";

type TourData = {
  idTour: string;
  tourName: string;
  location: string;
  startDate: string;
  endDate: string;
  price: string;
  hotelName: string;
  transport: string;
  image: string;
  iD_Account: number;
  userName: string;
};

type UpdateTourProps = {
  onClose: () => void;
  onUpdateSuccess: () => void;
  tour: TourData;
};

export default function UpdateTour({
  onClose,
  onUpdateSuccess,
  tour,
}: UpdateTourProps) {
  const [updateTour, setUpdateTour] = useState<TourData>(tour);

  useEffect(() => {
    setUpdateTour(tour);
  }, [tour]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://localhost:44390/UpdateTour",
        updateTour,
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
      console.error("Error updating tour:", error);
    } finally {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="font-bold text-black text-xl flex items-center justify-center mb-4">
          Cập nhật Tour
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="text-sm text-black">
            <input
              type="text"
              name="idTour"
              value={updateTour.idTour}
              onChange={handleInputChange}
              placeholder="ID Tour"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="tourName"
              value={updateTour.tourName}
              onChange={handleInputChange}
              placeholder="Tên Tour"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="location"
              value={updateTour.location}
              onChange={handleInputChange}
              placeholder="Địa điểm"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="date"
              name="startDate"
              value={updateTour.startDate}
              onChange={handleInputChange}
              className="w-full p-1 mb-2 border"
            />
            <input
              type="date"
              name="endDate"
              value={updateTour.endDate}
              onChange={handleInputChange}
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="price"
              value={updateTour.price}
              onChange={handleInputChange}
              placeholder="Giá"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="hotelName"
              value={updateTour.hotelName}
              onChange={handleInputChange}
              placeholder="Khách sạn"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="transport"
              value={updateTour.transport}
              onChange={handleInputChange}
              placeholder="Phương tiện"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="image"
              value={updateTour.image}
              onChange={handleInputChange}
              placeholder="Hình ảnh"
              className="w-full p-1 mb-2 border"
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 bg-gray-400 rounded"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white rounded"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
