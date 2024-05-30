import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

export type ContactData = {
  id: number;
  nameCustomer: string;
  phoneNumber: string;
  email: string;
  gender: string;
  content: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactData>({
    id: 0,
    nameCustomer: "",
    phoneNumber: "",
    email: "",
    gender: "",
    content: "",
  });

  

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addContact = async () => {
    try {
      const response = await axios.post(
        "https://localhost:44390/AddContact",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      if (response.status === 200 || response.status === 201) {
       
        setFormData({
          id: 0,
          nameCustomer: "",
          phoneNumber: "",
          email: "",
          gender: "",
          content: "",
        });
      } else {
        
      }
    } catch (error: any) {
      console.error("Lỗi khi thêm liên hệ: ", error.message);
      if (axios.isAxiosError(error)) {
        
      } else {
        
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addContact();
  };

  return (
    <div className=" ">
      <div className=" inset-0 flex justify-center items-center bg-opacity-50 bg-gray-400 p-7 ">
        <div className="w-1/2 flex justify-center items-center ">
          <div className="flex items-center ">
            <div>
              <img src="/Contact/contact2.png" alt="" className="w-50 h-60" />
              <div className="text-green-950 mb-2 font-bold ">
                <span>
                  Trụ sở chính: Số 1 Phố Xốm, Phú Lãm, Hà Đông, Hà Nội
                </span>
              </div>
              <div className="text-green-950 mb-2 font-bold">
                <span>Email: VNtravel@gmail.com</span>
              </div>
              <div className="text-green-950 mb-2 font-bold">
                <span>Tel: 0397070999</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white p-5 mr-20 rounded-lg shadow-md ">
          <h2 className="text-3xl font-bold mb-3 text-center text-green-900">
            Thông tin liên hệ
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mr-8">
            <div className="mb-4">
              <label
                className="block text-gray-800 text-base font-bold mb-2 px-5"
                htmlFor="nameCustomer"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="nameCustomer"
                name="nameCustomer"
                value={formData.nameCustomer}
                onChange={handleChange}
                className="appearance-none text-sm border border-gray-900 rounded w-full py-2 ml-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nhập họ tên"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 text-base font-bold mb-2 px-5"
                htmlFor="gender"
              >
                Giới tính
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="appearance-none border border-gray-900 rounded w-full py-2 px-3 ml-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 text-base font-bold mb-2 px-5"
                htmlFor="phoneNumber"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="appearance-none text-sm border border-gray-900 rounded w-full py-2 px-3 ml-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 text-base font-bold mb-2 px-5"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none border border-gray-900 text-sm rounded w-full ml-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nhập Email"
                required
              />
            </div>
            <div className="col-span-2 mb-4">
              <label
                className="block text-gray-700 text-base font-bold mb-2 px-5"
                htmlFor="content"
              >
                Nội dung lời nhắn
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="appearance-none border border-gray-900 text-sm rounded w-full py-2  px-3 ml-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nhập nội dung lời nhắn"
                required
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Gửi
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
