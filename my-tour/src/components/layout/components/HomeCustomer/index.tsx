import { Link } from "react-router-dom";
import TravelGuide from "../Blog/TravelGuide";

export default function HomeCustomer() {
  return (
    <>
      <div className="bg-green-50">
        <div className="">
          <img src="Home/home.jpg" alt=""  />
        </div>
        <div className="mt-5">
          <div className="flex px-6">
            <div className="w-1/2 p-5">
              <Link to="/HealingTravel">
                <img
                  className="w-full border-4 border-bg-teal-700 rounded-lg cursor-pointer"
                  src="/Home/home1.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-1/2 p-5">
              <Link to="/HealingTravel">
                <h2 className="text-black text-xl font-black mt-6 mb-4 text-center cursor-pointer">
                  Du lịch chữa lành - xu hướng mới, trải nghiệm mới
                </h2>
              </Link>
              <Link to="/HealingTravel">
                <div className="text-base px-2 font-normal text-justify">
                  <div className="py-2">
                    <span className="text-black ml-7  ">
                      Thời gian gần đây, thay vì đi đến những địa điểm tập trung
                      đông người tại các thành phố lớn, các trung tâm thương mại
                      để vui chơi, mua sắm, nhiều người lại chọn cho mình những
                      chuyến đi đến những nơi hoang sơ với cảnh vật thiên nhiên
                      phong phú để trải nghiệm “du lịch chữa lành”.
                    </span>
                  </div>

                  <span className="ml-7">
                    Những trải nghiệm này không chỉ giúp du khách tìm lại sự cân
                    bằng và yên bình trong cuộc sống mà còn giúp họ học hỏi và
                    phát triển kiến thức về cách chăm sóc bản thân một cách toàn
                    diện hơn. Đồng thời, du lịch chữa lành cũng thúc đẩy việc
                    bảo vệ môi trường và tạo ra những trải nghiệm du lịch bền
                    vững và tích cực cho cộng đồng địa phương.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className=" p-5 ">
            <h2 className="text-black text-4xl font-serif text-center my-6 ">
              Địa điểm nổi bật
              <hr className="w-full border-t border-black " />
            </h2>
            <div className="grid grid-cols-3 gap-4 p-8">
              <div className="relative">
                <img
                  src="/Home/danang.jpg"
                  alt="Đà Nẵng"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/DaNang">
                    <span className="text-white text-4xl font-black">
                      Đà Nẵng
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Home/ninhbinh.jpg"
                  alt="Ninh Bình"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/NinhBinh">
                    <span className="text-white text-4xl font-black">
                      Ninh Bình
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Home/hue.jpg"
                  alt="Huế"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/Hue">
                    <span className="text-white text-4xl font-black">Huế</span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Home/phuquoc.jpg"
                  alt="Phú Quốc"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/PhuQuoc">
                    <span className="text-white text-4xl font-black">
                      Phú Quốc
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Home/sapa.jpg"
                  alt="Sa Pa"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/SaPa">
                    <span className="text-white text-4xl font-black">SaPa</span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Home/vinhhalong.jpg"
                  alt="Vịnh Hạ Long"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/VinhHaLong">
                    <span className="text-white text-4xl font-black">
                      Vịnh Hạ Long
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img src="/Home/DL.jpg" alt="" className="w-full rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/DaLat">
                    <span className="text-white text-4xl font-black">
                      Đà Lạt
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img src="/Home/HN.jpg" alt="" className="w-full rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/HN">
                    <span className="text-white text-4xl font-black">
                      Hà Nội
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img src="/Home/HCM.jpg" alt="" className="w-full rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                  <Link to="/HCM">
                    <span className="text-white text-4xl font-black">
                      Hồ Chí Minh
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-9  ">
          <div className="relative bg-blue-100 hover:drop-shadow-xl  ">
            <div className=" text-black p-4 mx-5 text-center">
              <div className="flex justify-center p-4 mx-5 ">
                <img src="/Home/service3.png" alt="" className="w-8 h-6" />
              </div>

              <h3 className="text-lg font-semibold ">
                Khám phá không giới hạn
              </h3>
              <span className="text-sm mt-2">
                Khám phá thế giới với chúng tôi và trải nghiệm những kỳ quan tự
                nhiên và văn hóa độc đáo trên toàn thế giới.
              </span>
            </div>
          </div>
          <div className="relative bg-blue-100 hover:drop-shadow-xl ">
            <div className=" text-black p-4 mx-5 text-center">
              <div className="flex justify-center p-4 mx-5 ">
                <img src="/Home/service4.png" alt="" className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold ">Dịch vụ hàng đầu</h3>
              <span className="text-sm mt-2">
                Chúng tôi cam kết cung cấp dịch vụ tận tâm và chất lượng nhất để
                đảm bảo sự hài lòng của khách hàng.
              </span>
            </div>
          </div>
          <div className="relative bg-blue-100 hover:drop-shadow-xl ">
            <div className=" text-black p-4 mx-5 text-center">
              <div className="flex justify-center p-4 mx-5 ">
                <img src="/Home/service1.png" alt="" className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold">Ưu đãi đặc biệt</h3>
              <span className="text-sm mt-2">
                Khám phá những ưu đãi hấp dẫn và giảm giá cho chuyến đi của bạn.
              </span>
            </div>
          </div>
          <div className="relative bg-blue-100 hover:drop-shadow-xl ">
            <div className=" text-black p-4 mx-5 text-center">
              <div className="flex justify-center p-4 mx-5 ">
                <img src="/Home/service2.png" alt="" className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold ">Trải nghiệm độc đáo</h3>
              <span className="text-sm mt-2">
                Khám phá những điểm đến mới mẻ và độc đáo mà bạn chưa từng trải
                nghiệm trước đây.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-3">
        <div className="p-8">
          <h2 className="text-black text-4xl font-serif text-center my-6">
            Cẩm nang du lịch
            <hr className="w-full border-t border-black" />
          </h2>
          <div className="flex">
            <TravelGuide />
          </div>
        </div>
      </div>
    </>
  );
}
