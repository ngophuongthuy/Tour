import { Link } from "react-router-dom";

export default function TravelGuide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-9">
      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Post/12T.jpg"
            alt="Đà Nẵng"
            style={{ width: "400px", height: "300px" }}
          />
          <div className="text-white bg-green-700 px-4 py-2 rounded-b-lg">
            <h3 className="text-xl font-semibold">
              Khám Phá 12 tháng ở Việt Nam
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Link to="/CamNang12T">
            <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors duration-300">
              Xem ngay
            </button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Post/CD.jpg"
            alt="Đà Nẵng"
            style={{ width: "400px", height: "300px" }}
          />
          <div className="text-white bg-green-700 px-4 py-2 rounded-b-lg">
            <h3 className="text-xl font-semibold">
              Kinh nghiệm du lịch Côn Đảo
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Link to="/CamNang12T">
            <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors duration-300">
              Xem ngay
            </button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Post/HG.jpg"
            alt="Đà Nẵng"
            style={{ width: "400px", height: "300px" }}
          />
          <div className="text-white bg-green-700 px-4 py-2 rounded-b-lg">
            <h3 className="text-xl font-semibold">Hà Giang Mùa Nào Đẹp Nhất</h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Link to="/CamNang12T">
            <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors duration-300">
              Xem ngay
            </button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Post/HN.jpg"
            alt="Đà Nẵng"
            style={{ width: "400px", height: "300px" }}
          />
          <div className="text-white bg-green-700 px-4 py-2 rounded-b-lg">
            <h3 className="text-xl font-semibold">
              Kinh Nghiệm, Cẩm Nang Du Lịch Hà Nội Từ A – Z
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Link to="/CamNang12T">
            <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors duration-300">
              Xem ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
