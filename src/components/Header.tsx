import logo from '../assets/react.svg';

const Header = () => {
    return (
        <div className="bg-[#072114] h-16 flex items-center justify-between p-6">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="mr-4" />
            </div>
            <div className="text-[#e8ebed]">
                <p className="mb-2">T : +387 (0) 33 219 568</p>
                <p>E: info@eolpetrol.ba</p>
            </div>
        </div>
    );
}

export default Header;
