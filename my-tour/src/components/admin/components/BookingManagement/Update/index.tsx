import React, { useState, useEffect } from "react";
import axios from "axios";

export type OrderTourData = {
  id: number;
  iD_Tour: number;
  tourName: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  price: string;
  date: string;
  amount: string;
  totalPayment: string;
};

type UpdateBookingProps = {
  onClose: () => void;
  onUpdateSuccess: () => void;
  booking: OrderTourData;
};

export default function UpdateBooking({
  onClose,
  onUpdateSuccess,
  booking,
}: UpdateBookingProps) {
  const [updateBooking, setUpdateBooking] = useState<OrderTourData>(booking);
 

  useEffect(() => {
    setUpdateBooking(booking);
  }, [booking]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      const response = await axios.put(
        "https://localhost:44390/UpdateOrder",
        updateBooking,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        onUpdateSuccess();
      }
    } catch (error) {
      console.error("Error updating booking:", error);
    } finally {
    
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="font-bold text-black text-xl flex items-center justify-center mb-4">
          Cập nhật Đặt Tour
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="text-sm text-black">
            <input
              type="text"
              name="tourName"
              value={updateBooking.tourName}
              onChange={handleInputChange}
              placeholder="Tên Tour"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="name"
              value={updateBooking.name}
              onChange={handleInputChange}
              placeholder="Tên Khách Hàng"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="address"
              value={updateBooking.address}
              onChange={handleInputChange}
              placeholder="Địa chỉ"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="phoneNumber"
              value={updateBooking.phoneNumber}
              onChange={handleInputChange}
              placeholder="Số Điện Thoại"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="email"
              name="email"
              value={updateBooking.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="price"
              value={updateBooking.price}
              onChange={handleInputChange}
              placeholder="Giá"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="date"
              name="date"
              value={updateBooking.date}
              onChange={handleInputChange}
              placeholder="Ngày Đặt"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="amount"
              value={updateBooking.amount}
              onChange={handleInputChange}
              placeholder="Số Người"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="totalPayment"
              value={updateBooking.totalPayment}
              onChange={handleInputChange}
              placeholder="Tổng Thanh Toán"
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
