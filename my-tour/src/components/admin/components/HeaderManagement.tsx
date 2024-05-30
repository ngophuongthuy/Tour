import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderManagement() {
  const [userName, setUserName] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (userData && userData.userName && isAdmin && location.pathname === "/TourManagement") {
      setUserName(userData.userName);
    }
  }, [location.pathname]);

  return (
    <div className="p-2 bg-gray-900">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-white font-bold ml-3">TRANG QUẢN LÝ</h1>
        </div>

        <div className="flex items-center space-x-4 mr-5 ">
          <img src="/Header/Avt.png" alt="Avatar" className="w-10 h-10" />
          <div>
            <span className="text-xs text-white">{userName}</span>
          </div>
          <div className="border-l border-border_header pl-4">
            <Link to="/Login">
              <img src="/Header/Logout.png" alt="Logout" className="w-6 h-6 hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
