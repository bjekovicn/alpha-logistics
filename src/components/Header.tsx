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
          <FaPhone className="mr-3" />
          +387 57 111 111
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-3" />
          alphalogistics@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Header;
