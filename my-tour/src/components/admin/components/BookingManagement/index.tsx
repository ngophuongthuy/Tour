import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { OrderTourData } from "../../../../types/OrderTourData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import UpdateBooking from "./Update"; // Adjust the import path as needed

export default function BookingManagement() {
  const [bookings, setBookings] = useState<OrderTourData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBooking, setSelectedBooking] = useState<OrderTourData | null>(
    null
  );
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const pageSize = 6;

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios
      .get("https://localhost:44390/GetOrder")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings: ", error);
      });
  };

  const deleteOrderTour = (id: number) => {
    axios
      .delete(`https://localhost:44390/DeleteOrder?id=${id}`)
      .then(() => {
        fetchBookings(); // Refresh the bookings list after deletion
      })
      .catch((error) => {
        console.error("Error deleting booking: ", error);
      });
  };

  const handleUpdateClick = (booking: OrderTourData) => {
    setSelectedBooking(booking);
    setShowUpdateDialog(true);
  };

  const handleUpdateSuccess = () => {
    fetchBookings();
    setShowUpdateDialog(false);
    setSelectedBooking(null);
  };

  const nextPage = () => {
    if (currentPage * pageSize < bookings.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayedBookings = bookings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-2xl p-2">Quản lý đặt tour</h2>
        </div>

        <hr className="border-hr" />
        <div className="grid grid-cols-10 text-center items-center w-full text-sm font-medium p-2">
          <div className="col-span-1">STT</div>
          <div className="col-span-1">Tên Tour </div>
          <div className="col-span-1">Tên Khách hàng</div>
          <div className="col-span-1">Email</div>
          <div className="col-span-1">Số điện thoại</div>
          <div className="col-span-1">Ngày đặt</div>
          <div className="col-span-1">Số tiền</div>
          <div className="col-span-1">Số người</div>
          <div className="col-span-1">Tổng tiền</div>
          <div className="col-span-1">Chức năng</div>
        </div>
        <hr className="border-hr" />
        <div>
          {displayedBookings.map((booking, index) => (
            <div
              key={index}
              className={`grid grid-cols-10 text-text_table_laber text-center items-center w-full text-xs relative p-2 ${
                index % 2 === 0
                  ? "bg-gray-400 border-y border border-gray-400 "
                  : "border-y border border-gray-200 "
              }`}
            >
              <div className="col-span-1">{index + 1}</div>
              <div className="col-span-1">{booking.tourName}</div>
              <div className="col-span-1">{booking.name}</div>
              <div className="col-span-1">{booking.email}</div>
              <div className="col-span-1">{booking.phoneNumber}</div>
              <div className="col-span-1">
                {moment(booking.date).format("DD-MM-YYYY")}
              </div>
              <div className="col-span-1">{booking.price}</div>
              <div className="col-span-1">{booking.amount}</div>
              <div className="col-span-1">{booking.totalPayment}</div>
              <div className="col-span-1 flex space-x-2 items-center justify-center">
                <div>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="w-4 h-4 cursor-pointer hover:text-blue-900 hover:scale-110"
                    onClick={() => handleUpdateClick(booking)}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="w-4 h-4 cursor-pointer hover:text-blue-900 hover:scale-110"
                    onClick={() => deleteOrderTour(booking.id)}
                  />
                </div>
              </div>
            </div>
          ))}
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
            disabled={currentPage * pageSize >= bookings.length}
          >
            Trang tiếp theo
          </button>
        </div>
      </div>
      {showUpdateDialog && selectedBooking && (
        <UpdateBooking
          onClose={() => setShowUpdateDialog(false)}
          onUpdateSuccess={handleUpdateSuccess}
          booking={selectedBooking}
        />
      )}
    </>
  );
}
