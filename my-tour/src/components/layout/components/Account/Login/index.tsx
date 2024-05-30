import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://localhost:44390/Login", {
        params: {
          Email: email,
          Password: password,
        },
      });

      if (response.data !== "Đăng nhập thất bại") {
        // Store user data in localStorage
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userName: response.data.userName,
            roleName: response.data.roleName,
          })
        );
        // Navigate based on role
        if (response.data.roleName !== "Admin") {
          localStorage.setItem("isAdmin", "false");
          navigate("/");
        } else {
          localStorage.setItem("isAdmin", "true");
          navigate("/TourManagement");
        }
      } else {
        // Handle failed login
        console.error("Nhập sai tài khoản hoặc mật khẩu");
        // Display error message and reload the page
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Nhập sai tài khoản hoặc mật khẩu",
          showConfirmButton: false,
          timer: 1800,
          customClass: {
            popup: "swal2-full",
          },
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      // Handle error
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  return (
    <div className=" inset-0 flex justify-center items-center bg-green-50  ">
      <div className="w-1/2 flex justify-center items-center ">
        <div className="flex items-center ">
          <div>
            <img src="VN.png" alt="" style={{ width: "400px", height: "500px" }}  />

            {/* <div className="text-green-950 mb-2 font-bold ">
              <span>Trụ sở chính: Số 1 Phố Xốm, Phú Lãm, Hà Đông, Hà Nội</span>
            </div>
            <div className="text-green-950 mb-2 font-bold">
              <span>Email: VNtravel@gmail.com</span>
            </div>
            <div className="text-green-950 mb-2 font-bold">
              <span>Tel: 0397070999</span>
            </div> */}
          </div>
        </div>
      </div>

   
      <div className=" w-1/2 flex justify-center items-center  bg-green-50 ">
        <form
          className="w-full max-w-sm p-4 border border-gray-300 shadow-2xl rounded-lg bg-white"
          onSubmit={handleLogin}
        >
          <h1 className="mb-8 text-4xl text-green-900 font-bold text-center">Đăng Nhập</h1>
          <div className="mb-4">
            <label
              htmlFor="customerEmail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="customerEmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="customerPassword"
              className="block text-green-900 text-sm font-bold mb-2"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="customerPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex justify-center">
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Đăng Nhập
            </button>
          </div>
          <div className="text-center p-2">
            <span>
              Chưa có tài khoản?
              <Link
                to="/register"
                className="ml-1 text-red-500 hover:underline"
              >
                Đăng ký ngay
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
