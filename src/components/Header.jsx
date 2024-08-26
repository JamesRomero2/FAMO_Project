import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-pri text-white top-0 sticky z-50">
      <div className="flex flex-row mx-10 2xl:mx-auto 2xl:w-3/4 items-center justify-between py-2">
        <p className="font-normal cursor-pointer text-xl"><span className="font-bold">PUP</span> FAMO</p>
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <p>Administrator</p>
          <div className="flex flex-row items-center gap-1 ">
            <FaRegCircleUser size={'1.5em'}/>
            <IoMdArrowDropdown size={'1.1em'}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header