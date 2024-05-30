import { useState, useEffect } from "react";
import axios from "axios";
import { CustomerData } from "../../../../types/CustomerData"; // Đảm bảo rằng đường dẫn đến file types là đúng

export default function CustomerManagement() {
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("https://localhost:44390/GetCustomer");
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const nextPage = () => {
    if (currentPage * pageSize < customers.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayedBookings = customers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div>
        <div>
          <div className="flex items-center justify-center">
            <h2 className="font-bold text-2xl p-2 mb-9">
              Quản Lý Thông Tin Khách Hàng
            </h2>
          </div>
          {/* <div className="flex justify-end items-end px-5 mb-4">
            <button
              className="px-4 py-1 bg-blue-500 text-white rounded"
              // onClick={() => setShowAddDialog(true)}
            >
              Thêm
            </button>
          </div> */}
          <hr className="border-hr" />
          <div className="grid grid-cols-4 text-center items-center w-full text-sm font-medium p-2 ">
            <div className="col-span-1">STT</div>
            <div className="col-span-1">Tên Khách Hàng</div>
            <div className="col-span-1">Email</div>
            <div className="col-span-1">Giới tính</div>
          </div>
          <hr className="border-hr" />
          {customers.map((customer, index) => (
            <div
              className={`grid grid-cols-4 text-text_table_laber text-center items-center w-full text-xs relative p-4 ${
                index % 2 === 0
                  ? "bg-gray-400 border-y border border-gray-400 "
                  : "border-y border border-gray-200 "
              }`}
              key={customer.id}
            >
              <div className="col-span-1">{index + 1}</div>
              <div className="col-span-1">{customer.customerName}</div>
              <div className="col-span-1">{customer.email}</div>
              <div className="col-span-1">{customer.gender}</div>
            </div>
          ))}
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
              disabled={currentPage * pageSize >= customers.length}
            >
              Trang tiếp theo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
