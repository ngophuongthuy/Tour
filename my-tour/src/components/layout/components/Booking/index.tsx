import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookingForm from "./OrderTour/AddOrderTour";
import { TourData } from "../../../../types/TourData";

export default function BookingTour() {
  const [selectedTour, setSelectedTour] = useState<TourData | null>(null);
  const { idTour } = useParams<{ idTour: string }>();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get<TourData[]>(
          "https://localhost:44390/GetTour"
        );
        const tour = response.data.find((t) => t.idTour === idTour);
        if (tour) {
          setSelectedTour(tour);
        } else {
          console.error("Không tìm thấy tour");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tour:", error);
      }
    };

    fetchTour();
  }, [idTour]);

  if (!selectedTour) {
    return <div>Đang tải...</div>;
  }

  return (
    <>
      <div className="mt-6 bg-green-50 flex px-6">
        <div className="p-6 w-1/2">
          <img
            className="border-4 border-teal-700 rounded-lg cursor-pointer"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            src={selectedTour.image}
            alt={selectedTour.tourName}
          />
          <h2 className="text-black text-xl font-black mt-6 mb-4 text-center cursor-pointer">
            {selectedTour.tourName}
          </h2>
          <div className="text-base ml-20 font-normal text-justify text-black">
            <div className="py-2">
              <strong>Nơi khởi hành:</strong>{" "}
              <span>{selectedTour.location}</span>
            </div>
            <div className="py-2">
              <strong>Ngày khởi hành:</strong> {selectedTour.startDate}
            </div>
            <div className="py-2">
              <strong>Ngày kết thúc:</strong> {selectedTour.endDate}
            </div>
            <div className="py-2">
              <strong>Giá:</strong> {selectedTour.price} VNĐ/Khách
            </div>
            <div className="py-2">
              <strong>Khách sạn:</strong> {selectedTour.hotelName}
            </div>
            <div className="py-2">
              <strong>Phương tiện di chuyển:</strong> {selectedTour.transport}
            </div>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <BookingForm
            tour={selectedTour}
            onBookingSuccess={() => alert("Đặt tour thành công!")}
          />
        </div>
      </div>
    </>
  );
}
