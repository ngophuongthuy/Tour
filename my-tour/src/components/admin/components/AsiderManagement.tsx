import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/TourManagement", src: "/Aside/tour.png", label: "Tour" },
  { to: "/BookingManagement", src: "/Aside/Booking.png", label: "Đặt Tour" },
  { to: "/CustomerManagement", src: "/Aside/Customer.png", label: "Khách Hàng" },
  { to: "/PaymentManagement", src: "/Aside/Payment.png", label: "Thanh Toán" },
  { to: "/PostManagement", src: "/Aside/post.png", label: "Bài Viết" },
  { to: "/ContactManagement", src: "/Aside/Call.png", label: "Liên Hệ" },
];

export default function AsiderManagement() {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-white text-xs" style={{ height: "600px" }}>
      <div className="px-6 pt-4">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.to;
          return (
            <div key={index} className="mb-7">
              <Link
                to={link.to}
                className={`flex flex-col items-center font-semibold transition duration-300 ease-in-out ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                <img
                  src={link.src}
                  alt={link.label}
                  className={`w-7 h-7 transform ${
                    isActive ? "scale-110" : "hover:scale-110"
                  }`}
                />
                <span className="mt-2">{link.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
