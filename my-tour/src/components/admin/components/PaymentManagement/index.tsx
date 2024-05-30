import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"; // Import thư viện moment

import { paymentDate } from "../../../../types/PaymentData";

export default function PaymentManagement() {
  const [payments, setPayments] = useState<paymentDate[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("https://localhost:44390/GetPayment");
        setPayments(response.data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-2xl p-2">Quản Lý Thanh Toán Tour</h2>
        </div>
        <div className="flex justify-end items-end px-5 mb-4">
          <button className="px-4 py-1 bg-blue-500 text-white rounded">
            Thêm
          </button>
        </div>
        <div>
          <hr className="border-hr" />
          <div className="grid grid-cols-5 text-center items-center w-full text-sm font-medium p-2">
            <div className="col-span-1">STT</div>
            <div className="col-span-1">Tên tour</div>
            <div className="col-span-1">Ngày thanh toán</div>
            <div className="col-span-1">Phương thức thanh toán</div>
            <div className="col-span-1">Số tiền</div>
          </div>
          {payments.map((payment, index) => (
            <div
              key={payment.id}
              className={`grid grid-cols-4 text-text_table_laber text-center items-center w-full text-xs relative p-2 ${
                index % 2 === 0
                  ? "bg-gray-400 border-y border border-gray-400 "
                  : "border-y border border-gray-200 "
              }`}
            >
              <div className="col-span-1">{index + 1}</div>
              <div className="col-span-1">{payment.tourName}</div>
              <div className="col-span-1">
                {/* Sử dụng moment để định dạng ngày */}
                {moment(payment.paymentDate).format("DD/MM/YYYY")}
              </div>
              <div className="col-span-1">{payment.paymentMethod}</div>
              <div className="col-span-1">{payment.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
