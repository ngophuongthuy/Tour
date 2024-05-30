import { useState, useEffect } from "react";
import axios from "axios";

type TourData = {
  idTour: string;
  tourName: string;
  location: string;
  startDate: string;
  endDate: string;
  price: string;
  hotelName: string;
  transport: string;
  image: string;
  iD_Account: number;
  userName: string;
};

type AddTourDialogProps = {
  onClose: () => void;
  onAddSuccess: () => void;
  selectedTour?: TourData;
};

export default function AddTourDialog({
  onClose,
  onAddSuccess,
  selectedTour,
}: AddTourDialogProps) {
  const [newTour, setNewTour] = useState<TourData>({
    idTour: "",
    tourName: "",
    location: "",
    startDate: "",
    endDate: "",
    price: "",
    hotelName: "",
    transport: "",
    image: "",
    iD_Account: 1,
    userName: "",
  });

  

  useEffect(() => {
    if (selectedTour) {
      setNewTour(selectedTour);
    }
  }, [selectedTour]);

  const addTour = async () => {
   
    try {
      const response = await axios.post(
        "https://localhost:44390/AddTour",
        newTour,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Include other headers here if needed
          },
        }
      );

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      if (response.status === 200 || response.status === 201) {
        console.log("Thêm tour thành công!");
        onAddSuccess();
      } else {
        console.error("Thêm tour thất bại: ", response.data);
      }
    } catch (error: any) {
      // Sử dụng kiểm tra kiểu any để TypeScript không báo lỗi
      console.error("Lỗi khi thêm tour: ", error.message);
      if (axios.isAxiosError(error)) {
        console.error("Error response data: ", error.response?.data);
      }
    } finally {
      
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTour((prevTour) => ({
      ...prevTour,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTour();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="font-bold text-black text-xl flex items-center justify-center mb-4">
          Thêm Tour
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="text-sm text-black">
            <input
              type="text"
              name="idTour"
              value={newTour.idTour}
              onChange={handleInputChange}
              placeholder="ID Tour"
              className="w-full p-1 mb-2 border "
            />
            <input
              type="text"
              name="tourName"
              value={newTour.tourName}
              onChange={handleInputChange}
              placeholder="Tên Tour"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="location"
              value={newTour.location}
              onChange={handleInputChange}
              placeholder="Địa điểm"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="date"
              name="startDate"
              value={newTour.startDate}
              onChange={handleInputChange}
              className="w-full p-1 mb-2 border"
            />
            <input
              type="date"
              name="endDate"
              value={newTour.endDate}
              onChange={handleInputChange}
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="price"
              value={newTour.price}
              onChange={handleInputChange}
              placeholder="Giá"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="hotelName"
              value={newTour.hotelName}
              onChange={handleInputChange}
              placeholder="Khách sạn"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="transport"
              value={newTour.transport}
              onChange={handleInputChange}
              placeholder="Phương tiện"
              className="w-full p-1 mb-2 border"
            />
            <input
              type="text"
              name="image"
              value={newTour.image}
              onChange={handleInputChange}
              placeholder="Hình ảnh"
              className="w-full p-1 mb-2 border"
            />
            
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button onClick={onClose} className="px-4 py-1 bg-gray-400 rounded">
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white rounded"
          
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
