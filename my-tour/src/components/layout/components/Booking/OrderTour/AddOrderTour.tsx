import React, { useState, useEffect } from "react";
import axios from "axios";
import { TourData } from "../../../../../types/TourData";

interface BookingFormProps {
  tour: TourData;
  onBookingSuccess: () => void;
}

export type OrderTourData = {
  id: string;
  iD_Tour: string;
  tourName: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  price: string;
  date: string;
  amount: string;
  totalPayment: string;
  paymentMethod: string; // Added paymentMethod field
};

const initialFormData: OrderTourData = {
  id: "",
  iD_Tour: "",
  tourName: "",
  name: "",
  address: "",
  phoneNumber: "",
  email: "",
  price: "",
  date: "",
  amount: "",
  totalPayment: "",
  paymentMethod: "cash", // Default payment method
};

const BookingForm: React.FC<BookingFormProps> = ({
  tour,
  onBookingSuccess,
}) => {
  const [formData, setFormData] = useState<OrderTourData>(initialFormData);
  const [tourPrice, setTourPrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTourPrice(parseFloat(tour.price.replace(".", "").replace(",", ".")));
    setFormData((prevFormData) => ({
      ...prevFormData,
      iD_Tour: tour.id.toString(),
      tourName: tour.tourName,
      price: tour.price,
    }));
  }, [tour]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the required fields are filled
    if (
      !formData.name ||
      !formData.address ||
      !formData.phoneNumber ||
      !formData.email
    ) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    setError(null);

    try {
      const response = await axios.post(
        "https://localhost:44390/AddOrder",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        onBookingSuccess();
      } else {
        console.error("Error placing order: API response invalid", response);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "amount") {
      if (!isNaN(parseFloat(value)) || value === "") {
        const amount = value;
        const totalPaymentVND = (
          parseFloat(amount) *
          tourPrice *
          1000
        ).toLocaleString("vi-VN");
        setFormData({
          ...formData,
          [name]: value,
          totalPayment: totalPaymentVND,
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="flex justify-center p-5 bg-green-50">
      <div className="bg-white p-5 rounded-lg shadow-md border">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-900">
          Thông tin đặt tour
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="name"
            >
              Họ và tên:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="appearance-none text-sm border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập họ tên"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="address"
            >
              Địa chỉ:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="appearance-none text-sm border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập địa chỉ"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="phoneNumber"
            >
              Số điện thoại:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="appearance-none text-sm border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none text-sm border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="date"
            >
              Ngày thanh toán:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="appearance-none text-sm w-48 border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="amount"
            >
              Số lượng người đi:
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="appearance-none text-sm border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-800 text-base font-bold mb-2 px-5"
              htmlFor="paymentMethod"
            >
              Phương thức thanh toán:
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="appearance-none w-48 text-sm border border-gray-900 rounded py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Phương thức thanh toán</option>
              <option value="cash">Tiền mặt</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <div className="col-span-2 flex items-center px-5 py-5">
            <label
              className="block text-gray-800 text-base font-bold mb-2"
              htmlFor="totalPayment"
            >
              Tổng tiền:
            </label>
            <div className="flex items-center mb-2 px-5">
              <input
                type="text"
                id="totalPayment"
                name="totalPayment"
                value={formData.totalPayment}
                className="px-3 py-1 text-xl w-40 font-bold text-red-600"
                readOnly
              />
            </div>
            <div className="ml-auto">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Đặt Ngay
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
