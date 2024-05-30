export default function Footer() {
  return (
    <footer className="bg-blue-100 text-black py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row  ">
        <div className="">
          
        <div className="flex-1 mb-2 ">
            <img src="/Header/logo.png" alt="Logo" className="h-14 w-auto" />
          </div>
          <div className="text-green-950 mb-2 font-bold">
            <span>Tel: 0397070999</span>
          </div>
          <div className="text-green-950 mb-2 font-bold">
            <span>Email: VNtravel@gmail.com</span>
          </div>
          <div className="text-green-950 mb-2 font-bold ">
            <span>Địa chỉ: Số 1 Phố Xốm, Phú Lãm, Hà Đông, Hà Nội</span>
          </div>
          
        </div>

        <div className="flex-1 flex flex-col justify-center items-center  md:py-0">
          <div className="flex flex-col items-center text-green-950 font-bold">
            <div>
              <h3>Hãy đến với chúng tôi để trải nghiệm</h3>
            </div>
            <div className="flex flex-col items-center mt-2">
              <span>Ưu đãi đặc biệt</span>
              <span>Dịch vụ hàng đầu</span>

              <span>Trải nghiệm độc đáo</span>
              <span>Khám phá không giới hạn</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center py-4 md:py-0">
          <div className="w-full  flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9735771259656!2d105.73235971488378!3d21.03573148599488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552515fc07a3%3A0xd32b52bbabf53d36!2zROG6oWkgSOG7jWMgROG6oWkgTmFt!5e0!3m2!1sen!2s!4v1650527597290!5m2!1sen!2s"
              width="50%"
              height="50%"
              // style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
