import React, { useState, useEffect } from "react";
import { ContactData } from "../../../../types/ContactData";
import axios from "axios";

export default function ContactManagement() {
  const [contacts, setContacts] = useState<ContactData[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://localhost:44390/GetContact");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchContacts();
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="flex items-center justify-center">
            <h2 className="font-bold text-2xl p-2 mb-9">
              Quản Lý Thông Tin Khách Hàng
            </h2>
          </div>
          <hr className="border-hr" />
          <div className="grid grid-cols-6 text-center items-center w-full text-sm font-medium p-2">
            <div className="col-span-1">STT</div>
            <div className="col-span-1">Tên Khách Hàng</div>
            <div className="col-span-1">Số điện thoại</div>
            <div className="col-span-1">Email</div>
            <div className="col-span-1">Giới tính</div>
            <div className="col-span-1">Nội dung</div>
          </div>

          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`grid grid-cols-6 text-text_table_laber text-center items-center w-full text-xs relative p-4 ${
                index % 2 === 0
                  ? "bg-gray-400 border-y border border-gray-400 "
                  : "border-y border border-gray-200 "
              }`}
            >
              <div className="col-span-1">{index + 1}</div> {/* Số thứ tự */}
              <div className="col-span-1">{contact.nameCustomer}</div>{" "}
              {/* Tên khách hàng */}
              <div className="col-span-1">{contact.phoneNumber}</div>{" "}
              {/* Số điện thoại */}
              <div className="col-span-1">{contact.email}</div> {/* Email */}
              <div className="col-span-1">{contact.gender}</div>{" "}
              {/* Giới tính */}
              <div className="col-span-1">{contact.content}</div>{" "}
              {/* Nội dung */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
