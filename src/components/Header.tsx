import { FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="bg-[#072114] h-16 flex items-center justify-between p-6">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-4" />
      </div>
      <div className="flex flex-col gap-1 text-[#e8ebed]">
        <div className="flex items-center">
          <FaPhone className="mr-2" />
          Tel: +387 (0) 33 219 568
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2" />
          Email: info@nekimejl.ba
        </div>
      </div>
    </div>
  );
};

export default Header;
