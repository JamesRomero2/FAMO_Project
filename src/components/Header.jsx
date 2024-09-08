import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { requestToServer } from "../api/GlobalAPI";

const Header = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (redirect) => {
    navigate(redirect);
  };

  const handleLogout = () => {
    requestToServer('get', 'logout', '', true)
      .then((response) => {
        sessionStorage.clear(); // Clear session storage
        handleClick('/')
      }).catch((error) => {
        console.log(error);
      })
    
  };
  return (
    <header className="bg-pri text-white top-0 sticky z-50">
      <div className="flex flex-row mx-10 2xl:mx-auto 2xl:w-3/4 items-center justify-between py-2">
        <p className="font-normal cursor-pointer text-xl">
          <span className="font-bold">PUP</span> FAMO
        </p>
        <div className="relative">
          <div
            className="flex flex-row items-center gap-3 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
          >
            <p>{user ? `${user.first_name} ${user.last_name}` : 'Administrator'}</p>
            <div className="flex flex-row items-center gap-1">
              <FaRegCircleUser size={'1.5em'} />
              <IoMdArrowDropdown size={'1.1em'} />
            </div>
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded-md">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header