/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
const NotificationItem = ({message}) => {
  return (
    <li className="flex justify-between items-center py-2 cursor-pointer mb-2 border-b border-slate-300">
      <span className="">{message}</span>
      <button className="rounded-full hover:bg-red-200 p-2 mr-2">
        <IoMdClose />
      </button>
    </li>
  )
}

export default NotificationItem