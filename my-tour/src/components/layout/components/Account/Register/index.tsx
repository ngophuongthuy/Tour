import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:44390/Register", {
        UserName: username,
        Password: password,
        Email: email,
        Gender: gender,
        ID_Role: "2",
      });

      console.log("Response from API:", response.data);

      if (response.data) {
        // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
        navigate("/Login");
      } else {
        alert("Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Hiển thị lỗi cụ thể từ API
        alert(`Đăng ký thất bại: ${error.response.data}`);
      } else {
        console.error("Đã xảy ra lỗi:", error);
        alert("Đã xảy ra lỗi trong quá trình đăng ký. Vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div className=" inset-0 flex justify-center items-center bg-green-50 py-7 ">
      
      <div className="flex w-full  justify-center items-center  bg-green-50 ">
        <form
          className="shadow-2xl w-1/2 p-5 border border-gray-300 rounded-lg bg-white"
          onSubmit={handleRegister}
        >
          <h1 className="mb-8 text-4xl text-green-900 font-bold text-center">
            Đăng Ký
          </h1>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-green-900 text-sm font-bold mb-2"
            >
              Họ và tên
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập họ và tên"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-green-900 text-sm font-bold mb-2"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-green-900 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Giới tính
            </label>
            <select
              id="gender"
              name="gender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="mb-4 flex justify-center">
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Đăng Ký
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="">
              Đã có tài khoản?
              <Link to="/Login" className="text-red-500 hover:underline ml-1">
                Đăng nhập ngay
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="w-1/2 mr-20 flex justify-center items-center ">
        <div className="flex items-center ">
          <div>
            <img
              src="VN.png"
              alt=""
              style={{ width: "400px", height: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
