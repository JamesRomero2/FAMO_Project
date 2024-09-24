/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
const NotificationItem = ({ message, timeElapsed, important }) => {
  return (
    <li
      className={`flex justify-between items-center py-2 cursor-pointer px-2 rounded-md mb-2 ${
        important === '1' ? 'bg-sec' : ''
      }`}
    >
      <span className="flex-1">{message}</span>
      <span className="text-xs text-gray-500 mr-4">{timeElapsed}</span>
      <button className="rounded-full hover:bg-red-200 p-2 mr-2">
        <IoMdClose />
      </button>
    </li>
  )
}

export default NotificationItem