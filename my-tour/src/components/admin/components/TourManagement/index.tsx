import React, { useEffect, useState } from "react";
import axios from "axios";
import { TourData } from "../../../../types/TourData";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AddTourDialog from "./AddTour/AddTour";
import UpdateTour from "./UpdateTour/Update";
import ConfirmDialog from "./DeleteTour";
 // Import ConfirmDialog

export default function TourManagement() {
  const [tours, setTours] = useState<TourData[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);  // State to manage ConfirmDialog visibility
  const [selectedTour, setSelectedTour] = useState<TourData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [tourToDelete, setTourToDelete] = useState<number | null>(null);  // State to store tour ID to delete
  const navigate = useNavigate();
  const pageSize = 5;

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = () => {
    axios
      .get("https://localhost:44390/GetTour")
      .then((response) => {
        setTours(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu: ", error);
      });
  };

  const deleteTour = (id: number) => {
    axios
      .delete(`https://localhost:44390/DeleteTour?id=${id}`)
      .then(() => {
        fetchTours();
      })
      .catch((error) => {
        console.error("Lỗi khi xóa tour: ", error);
      });
  };

  const handleAddTourSuccess = () => {
    fetchTours();
    setShowAddDialog(false);
    navigate("/TourManagement");
  };

  const handleUpdateTour = (tour: TourData) => {
    setSelectedTour(tour);
    setShowUpdateDialog(true);
  };

  const handleUpdateTourSuccess = () => {
    fetchTours();
    setShowUpdateDialog(false);
    setSelectedTour(null);
  };

  const nextPage = () => {
    if (currentPage * pageSize < tours.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayedTours = tours
    .filter((tour) => tour.idTour.includes(searchTerm))
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const emptyTour: TourData = {
    id: 0,
    idTour: "",
    tourName: "",
    location: "",
    startDate: "",
    endDate: "",
    price: "",
    hotelName: "",
    transport: "",
    image: "",
    iD_Account: 0,
    userName: "",
  };

  const displayedToursWithFiller = [...displayedTours];
  while (displayedToursWithFiller.length < pageSize) {
    displayedToursWithFiller.push(emptyTour);
  }

  const confirmDeleteTour = (id: number) => {
    setTourToDelete(id);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    if (tourToDelete !== null) {
      deleteTour(tourToDelete);
    }
    setShowConfirmDialog(false);
    setTourToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
    setTourToDelete(null);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-2xl p-2">Quản lý tour</h2>
      </div>
      <div className="flex justify-end items-end px-5 mb-2">
        <input
          type="text"
          placeholder="Tìm kiếm ID Tour..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-1 border border-gray-500 rounded mr-2"
        />
        <button
          className="px-4 py-1 bg-green-800 hover:bg-green-900 text-white rounded"
          onClick={() => setShowAddDialog(true)}
        >
          Thêm
        </button>
      </div>
      <div>
        <hr className="border-hr" />
        <div className="grid grid-cols-11 text-center items-center w-full text-sm font-medium p-2">
          <div className="col-span-1">ID Tour</div>
          <div className="col-span-1">Tên Tour</div>
          <div className="col-span-1">Địa điểm</div>
          <div className="grid col-span-3 grid-cols-6">
            <div className="col-span-3">Thời gian bắt đầu</div>
            <div className="col-span-3">Thời gian kết thúc</div>
          </div>
          <div className="col-span-1">Giá</div>
          <div className="col-span-1">Khách sạn</div>
          <div className="col-span-1">Phương tiện</div>
          <div className="col-span-1">Hình ảnh</div>
          <div className="col-span-1">Chức năng</div>
        </div>
        <hr className="border-hr" />

        {displayedToursWithFiller.map((tour, index) => (
          <div
            key={index}
            className={`grid grid-cols-11 text-text_table_laber text-center items-center w-full text-xs relative p-2 ${
              index % 2 === 0
                ? "bg-gray-400 border-y border border-gray-400 "
                : "border-y border border-gray-200 "
            }`}
          >
            <div className="col-span-1">{tour.idTour || ""}</div>
            <div className="col-span-1">{tour.tourName}</div>
            <div className="col-span-1">{tour.location}</div>
            <div className="grid col-span-3 grid-cols-6">
              <div className="col-span-3">
                {tour.startDate
                  ? moment(tour.startDate).format("DD-MM-YYYY")
                  : ""}
              </div>
              <div className="col-span-3">
                {tour.endDate ? moment(tour.endDate).format("DD-MM-YYYY") : ""}
              </div>
            </div>
            <div className="col-span-1">{tour.price}</div>
            <div className="col-span-1">{tour.hotelName}</div>
            <div className="col-span-1">{tour.transport}</div>
            <div className="col-span-1 flex justify-center items-center">
              {tour.image ? (
                <img src={tour.image} className="w-14 h-10" alt="tour" />
              ) : (
                ""
              )}
            </div>
            <div className="col-span-1 flex space-x-2 items-center justify-center ">
              {tour.idTour ? (
                <>
                  <div>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="w-4 h-4 cursor-pointer  hover:text-blue-800 hover:scale-110"
                      onClick={() => handleUpdateTour(tour)}
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="w-4 h-4 cursor-pointer hover:text-red-600 hover:scale-110"
                      onClick={() => confirmDeleteTour(tour.id)}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <hr className="border-hr" />
      <div className="flex justify-between px-5 mt-2">
        <button
          className="px-4 py-1 bg-green-800 hover:bg-green-900 text-white rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Trang trước
        </button>
        <button
          className="px-4 py-1 bg-green-800 hover:bg-green-900 text-white rounded"
          onClick={nextPage}
          disabled={currentPage * pageSize >= tours.length}
        >
          Trang tiếp theo
        </button>
      </div>

      {showAddDialog && (
        <AddTourDialog
          onClose={() => setShowAddDialog(false)}
          onAddSuccess={handleAddTourSuccess}
        />
      )}
      {showUpdateDialog && selectedTour && (
        <UpdateTour
          onClose={() => setShowUpdateDialog(false)}
          onUpdateSuccess={handleUpdateTourSuccess}
          tour={selectedTour}
        />
      )}
      {showConfirmDialog && (
        <ConfirmDialog
         
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
}
