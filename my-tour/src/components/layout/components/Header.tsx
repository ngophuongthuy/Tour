import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const loadUserData = () => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (userData && userData.userName && !isAdmin) {
      setUserName(userData.userName);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    loadUserData();
    const handleStorageChange = () => {
      loadUserData();
    };
    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(() => {
      loadUserData();
    }, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setUserName("");
  };

  const location = useLocation();

  return (
    <>
      <div>
        <div className="flex items-center justify-between ">
          <div className="ml-4">
            <img src="/Header/logo.png" alt="Logo" className="w-60 h-25" />
          </div>
          <div className="flex items-center ml-auto mr-12 text-2xl font-bold ">
            <div className={`hover:scale-110 mr-20 ${location.pathname === "/HomeCustomer" ? "text-green-800" : "hover:text-green-800"}`}>
              <Link to="/HomeCustomer">Trang chủ</Link>
            </div>
            <div className={`hover:scale-110 mr-20 ${location.pathname === "/Blog" ? "text-green-900" : "hover:text-green-900"}`}>
              <Link to="/Blog">Tin tức</Link>
            </div>
            <div
              onMouseEnter={() => setShowDestinations(true)}
              onMouseLeave={() => setShowDestinations(false)}
              className={`hover:scale-110 relative mr-20 cursor-pointer ${location.pathname.includes("/Bac") || location.pathname.includes("/Trung") || location.pathname.includes("/Nam") ? "text-green-900" : "hover:text-green-900"}`}
            >
              Điểm đến
              {showDestinations && (
                <div className="absolute text-sm flex flex-col justify-center items-center border border-gray-300 bg-white">
                  <Link to="/Bac">
                    <button className="px-3 py-2 hover:bg-gray-200">
                      Miền Bắc
                    </button>
                  </Link>
                  <Link to="/Trung">
                    <button className="px-1 py-2 hover:bg-gray-200">
                      Miền Trung
                    </button>
                  </Link>
                  <Link to="/Nam">
                    <button className="px-2 py-2 hover:bg-gray-200">
                      Miền Nam
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className={`hover:scale-110 mr-20 ${location.pathname === "/Contact" ? "text-green-900" : "hover:text-green-900"}`}>
              <Link to="/Contact">Liên hệ</Link>
            </div>
            {isLoggedIn ? (
              <div className="flex items-center">
                <img
                  src="/Header/Avt.png"
                  alt="Avatar"
                  className="w-10 h-10 mr-5"
                />
                <span className="text-xs text-black mr-5">{userName}</span>
                <Link to="/Login" onClick={handleLogout}>
                  <img
                    src="/Header/LogoutCustomer.png"
                    alt="Logout"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            ) : (
              <div
                onMouseEnter={() => setShowUser(true)}
                onMouseLeave={() => setShowUser(false)}
                className="hover:scale-110 relative mr-20 cursor-pointer hover:text-green-900"
              >
                <FontAwesomeIcon icon={faUser} className="mr-5" />
                {showUser && (
                  <div className="absolute text-sm flex flex-col justify-center items-center border border-gray-300 bg-white">
                    <Link to="/Register" className="">
                      <button className="  px-3 py-2 hover:bg-gray-200">
                        Đăng ký
                      </button>
                    </Link>
                    <Link to="/Login" className="w-20">
                      <button className=" px-1 py-2  hover:bg-gray-200">
                        Đăng nhập
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
