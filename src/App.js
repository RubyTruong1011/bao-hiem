import logo from "./logo.svg";
import "./App.css";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function App() {
  return (
    <div className="mt-[100px] mb-[30px]">
      <section>
        <div className=" relative container w-[1283px] h-[384px] left-2/4 -translate-x-2/4	mb-[100px]">
          <div>
            <BsArrowUpRight
              color="#000000"
              className="absolute flex w-[30px] h-[30px]"
            />
            <h1 className="flex text-[30px] font-black leading-[35px] pl-[39px]">
              CƠ HỘI CHO BẠN
            </h1>
          </div>
          <div className=" mt-[53px] grid grid-cols-9 gap-5">
            <div className=" col-span-3 relative w-[400px] h-[298px]">
              <div className="">
                <h1 className="underline text-[#C7D628] text-[30px] font-black leading-9">
                  BẠN SẼ LÀ
                </h1>
              </div>
              <div className="mt-[22px]">
                <p>
                  <span className="font-bold">
                    Chuyên Viên Quản Lý Khách Hàng Cấp Cao - Life Portfolio
                    Manager
                  </span>{" "}
                  là tuyến dịch vụ khách hàng đầu tiên của mô hình dịch vụ tài
                  chính khách hàng độc đáo, cao cấp và đáng tin cậy cho các
                  khách hàng hiện tại và khách hàng cao cấp tiềm năng của Sun
                  Life.
                </p>
                <br />
                <p>
                  Hoạt động hàng ngày của một Chuyên Viên Quản Lý Khách Hàng Cấp
                  Cao bao gồm tư vấn sản phẩm bảo hiểm, tạo nguồn khách hàng,
                  đạt chỉ tiêu kinh doanh, xây dựng thương hiệu và phối hợp với
                  các bộ phận khác để đảm bảo giao dịch xuyên suốt và trải
                  nghiệm tốt cho khách hàng.
                </p>
              </div>
            </div>
            <div className="col-span-3 relative w-[440px] h-[297px] object-cover mt-[30px] left-2/4 -translate-x-2/4">
              <img src="/images/ladies.png" className="absolute " />
            </div>
            <div className=" col-span-3 relative">
              {" "}
              <div className="">
                <h1 className="underline  decoration-[#C7D628] text-[#C7D628] text-[30px] font-black leading-9">
                  CHỈ CẦN BẠN CÓ{" "}
                </h1>
              </div>
              <div className="mt-[12px]">
                <p className="mb-[7px]">
                  Tối thiểu trình độ Cao đẳng, chuyên ngành Ngân hàng, Quản trị
                  Kinh doanh, Marketing,…
                </p>
                <p className="mb-[7px]">
                  Ưu tiên ứng viên có các bằng cấp/ chứng chỉ liên quan đến Bảo
                  hiểm Nhân thọ
                </p>
                <p className="mb-[7px]">
                  Tối thiểu 1 năm kinh nghiệm làm việc ở các vị trí bán hàng/
                  kinh doanh, đặc biệt trong ngành tài chính{" "}
                </p>
                <p className="mb-[7px]">Tiếng Anh giao tiếp </p>
                <p className="mb-[7px]">
                  Sử dụng thành thạo các ứng dụng văn phòng cơ bản (Microsoft
                  Office)
                </p>
              </div>
              <div className="relative w-[68px] h-[14px] left-2/4 -translate-x-2/4 grid grid-cols-8 gap-2">
                <div className="relative col-span-2">
                  <AiOutlineArrowLeft
                    color="#000000"
                    className="  w-[14px] h-[14px]"
                  />
                </div>
                <div className=" relative col-span-2 w-[8px] h-[8px] rounded-full bg-[#C7D628] translate-y-0.5"></div>
                <div className=" relative col-span-2 w-[8px] h-[8px] rounded-full bg-[#D9D9D9] translate-y-0.5"></div>
                <div className="relative col-span-2">
                  <AiOutlineArrowRight
                    color="#000000"
                    className="  w-[14px] h-[14px]"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[70px]">
        <div className="w-full h-[420px]  bg-[url('/public/images/background1.png')]">
          <div className="">
            <div className="relative -translate-y-16 flex justify-center">
              <BsArrowUpRight
                color="#000000"
                className=" flex w-[30px] h-[30px]"
              />
              <h1 className="flex  text-[30px] font-black leading-[35px] pl-[15px]">
                ĐÃI NGỘ LÝ TƯỞNG{" "}
              </h1>
            </div>
            <div className="  ">
              <img
                className="absolute w-[704px] h-[435px] mt-[-50px] left-2/4 object-cover"
                src="/images/background2.png"
              />
            </div>
            <div className="container relative w-[1291px] left-2/4 -translate-x-2/4 mt-[51px]">
              <div className="absolute w-[380px] h-[203px]  bg-white/30 backdrop-blur-lg  mt-[100px] ">
                <div className="w-[46px] h-[46px] bg-black absolute top-0 left-0 flex justify-center items-center">
                  <img
                    className="w-[28px] h-[28px]  absolute "
                    src="/images/benefit.png"
                  />
                </div>
                <div className="w-[334px] h-[46px] bg-[#C7D628] ml-[46px] top-0">
                  <h1 className="absolute font-extrabold ml-[19px] mt-[6px] text-[20px] text-[#FFFFFF] ">
                    Chế độ phúc lợi hấp dẫn
                  </h1>
                </div>
                <div className="absolute left-2/4 -translate-x-2/4 w-[319px] top-[75px] ">
                  <ul className="list-disc list-inside text-[15px]">
                    <li>Cung cấp công cụ làm việc</li>
                    <li>Ngày nghỉ phép trong năm</li>
                    <li>Bảo hiểm chăm sóc sức khỏe</li>
                    <li>Hỗ trợ chi phí huấn luyện</li>
                  </ul>
                </div>
              </div>

              <div className="absolute w-[380px] h-[203px]  bg-white/30 backdrop-blur-lg  mt-[-133px]">
                <div className="w-[46px] h-[46px] bg-black absolute top-0 left-0 flex justify-center items-center">
                  <img
                    className="w-[28px] h-[28px]  absolute "
                    src="/images/income.png"
                  />
                </div>
                <div className="w-[334px] h-[46px] bg-[#C7D628] ml-[46px] top-0">
                  <h1 className="absolute font-extrabold ml-[19px] mt-[6px] text-[20px] text-[#FFFFFF] ">
                    Thu nhập cạnh tranh{" "}
                  </h1>
                </div>
                <div className="absolute left-2/4 -translate-x-2/4 w-[319px] top-[75px] ">
                  <ul className="list-disc list-inside text-[15px]">
                    <li>Thù lao cố định hàng tháng: 18 - 21 triệu</li>
                    <li>Thưởng hoàn thành chỉ tiêu tháng/quý/năm</li>
                    <li>Thưởng thăng tiến</li>
                  </ul>
                </div>
              </div>

              <div className="absolute w-[380px] h-[203px]  bg-white/30 backdrop-blur-lg ml-[407px] mt-[100px]">
                <div className="w-[46px] h-[46px] bg-black absolute top-0 left-0 flex justify-center items-center">
                  <img
                    className="w-[28px] h-[28px]  absolute "
                    src="/images/program.png"
                  />
                </div>
                <div className="w-[334px] h-[46px] bg-[#C7D628] ml-[46px] top-0">
                  <h1 className="absolute font-extrabold ml-[19px] mt-[6px] text-[20px] text-[#FFFFFF] ">
                    Chương trình đào tạo khác biệt
                  </h1>
                </div>
                <div className="absolute left-2/4 -translate-x-2/4 w-[319px] top-[75px] ">
                  <ul className="list-disc list-inside text-[15px]">
                    <li>Các khóa học đào tạo kiến thức & kỹ năng</li>
                    <li>Chương trình phát triển năng lực lãnh đạo</li>
                    <li>Lộ trình thăng tiến rõ ràng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container relative w-[1291px] left-2/4 -translate-x-2/4 mt-[51px] ">
          <div className="pb-[200px]">
            <div className="relative flex justify-center">
              <BsArrowUpRight
                color="#000000"
                className=" flex w-[30px] h-[30px]"
              />
              <h1 className="flex text-[30px] font-black leading-[35px] pl-[15px]">
                VỀ CHÚNG TÔI
              </h1>
            </div>
            <div className="relative mt-[38px]">
              <div className="absolute w-[619px] h-[241px] text-[15px] text-[#000000]">
                <p className="mb-[10px]">
                  <strong>Sun Life Việt Nam</strong> là công ty bảo hiểm nhân
                  thọ 100% vốn từ Tập đoàn Sun Life Financial (Canada). Công ty
                  hướng đến mục đích giúp Khách hàng đạt được an toàn tài chính
                  trọn đời và tận hưởng cuộc sống khoẻ mạnh hơn. Sun Life Việt
                  Nam là công ty tiên phong và dẫn đầu thị trường trong lĩnh vực
                  bảo hiểm hưu trí, phục vụ cho cả Khách hàng cá nhân và doanh
                  nghiệp tại Việt Nam.
                </p>
                <p>
                  De La Sól – tên gọi mới của Kênh phát triển kinh doanh, một
                  cột mốc đặc biệt của Sun Life Việt Nam, đã được ra mắt với
                  hình ảnh hoàn toàn mới mẻ, bứt phá và góp phần nâng tầm trải
                  nghiệm cho khách hàng. Bên cạnh mô hình trung tâm dịch vụ
                  khách hàng cao cấp về bảo hiểm nhân thọ, De La Sól - Sun Life
                  Flagship còn là không gian kết hợp giữa triển lãm nghệ thuật,
                  trưng bày sản phẩm và trải nghiệm ăn uống đặc sắc.
                </p>
              </div>
              <div className="">
                <img
                  className="absolute flex w-[196px] h-[206px] object-cover ml-[660px]"
                  src="./images/pic1.png"
                />
              </div>
              <div className="">
                <img
                  className="absolute flex w-[196px] h-[206px] object-cover ml-[871px]"
                  src="./images/pic2.png"
                />
              </div>
              <div className="">
                <img
                  className="absolute flex w-[196px] h-[206px] object-cover ml-[1084px]"
                  src="./images/pic3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t-2 border-black mt-[70px]"></div>
      <section>
        <div className="container relative w-[1291px] h-[100px] pt-[33px] left-2/4 -translate-x-2/4  ">
          <div className="  ">
            <div className=" ">
              <img
                className="w-[150px] h-[54px] absolute"
                src="/images/navigos.png"
              />
            </div>
            <div className=" ">
              <img
                className="absolute w-[188px] h-[148px] ml-[178px] -translate-y-11"
                src="/images/vnw.png"
              />
            </div>
            <p className="absolute w-[125px] h-[41px] ml-[564px] mt-[20px] text-[#000000] text-[16px]">
              Follow us on
            </p>
            <div>
              <img
                className="absolute w-[39px] h-[39px] ml-[687px] mt-[10px]"
                src="/images/linkedin.png"
              />
            </div>
            <div>
              <img
                className="absolute w-[40px] h-[40px] ml-[744px] mt-[10px]"
                src="/images/fb.png"
              />
            </div>
          </div>
          <p className="absolute w-[480px] h-[46px] ml-[814px] mt-[20px] text-[#000000] text-[16px]">
            Copyright © Navigos Group Vietnam Joint Stock Company{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
