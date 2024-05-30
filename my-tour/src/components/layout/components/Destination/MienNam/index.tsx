import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TourData } from "../../../../../types/TourData";

export default function Nam() {
  const [tours, setTours] = useState<TourData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<string>("");
  const [filteredTours, setFilteredTours] = useState<TourData[]>([]);
  const toursPerPage = 8;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get<TourData[]>(
          "https://localhost:44390/GetTour"
        );
        setTours(response.data);
        const mnTours = response.data.filter((tour) => tour.idTour.startsWith("MN"));
        setFilteredTours(mnTours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  const handleSearch = () => {
    const filtered = tours.filter((tour) => {
      const matchesSearchTerm = tour.tourName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStartDate =
        startDate === "" || new Date(tour.startDate) >= new Date(startDate);
      return tour.idTour.startsWith("MN") && matchesSearchTerm && matchesStartDate;
    });
    setFilteredTours(filtered);
    setCurrentPage(1); // Reset to first page when search is performed
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

  return (
    <>
      <div className="px-10">
        <img
          src="Location/NAM.png"
          alt="Nam Location"
          style={{ width: "1200px", height: "400px" }}
        />
      </div>
      <hr className="border-hr" />
      <div className="mr-20">
        <form className="flex justify-end mt-8 space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm tên tour..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-green-900 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSearch}
            className="bg-green-900 text-white px-2 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-10">
        {currentTours.map((tour) => (
          <div
            key={tour.idTour}
            className="rounded-lg overflow-hidden relative"
          >
            <img
              src={tour.image}
              alt={tour.tourName}
              style={{ width: "300px", height: "200px" }}
            />
            <div className="text-black bg-gray-200 px-4 py-2 rounded-lg">
              <h3 className="text-xl font-semibold">{tour.tourName}</h3>
              <div>
                <span className="text-sm">Nơi khởi hành: </span>
                <span className="text-sm">{tour.location}</span>
              </div>
              <div>
                <span className="text-sm">Giá: </span>
                <span className="text-sm">{tour.price}/khách</span>
              </div>
              <div>
                <span className="text-sm">Ngày bắt đầu: </span>
                <span className="text-sm">{tour.startDate}</span>
              </div>
              <div>
                <span className="text-sm">Ngày kết thúc: </span>
                <span className="text-sm">{tour.endDate}</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <Link to={`/BookingTour/${tour.idTour}`}>
                <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors duration-300">
                  Xem ngay
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
