/* eslint-disable react/prop-types */
import RoundedPanel from "./RoundedPanel"
import { LuShoppingBag } from "react-icons/lu";

const Shelf = ({supplyAmnt, categoryAmnt, usersAmnt}) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-row gap-4 items-center justify-start max-w-screen-md overflow-x-auto whitespace-nowrap pb-2 px-2">
        <RoundedPanel bgcolor={'bg-blue-400'}>
          <div className="flex flex-row items-center justify-between gap-4">
            <LuShoppingBag size={'2em'}/>
            <p className="flex flex-col text-slate-700">Supplies<span className="font-bold text-lg text-slate-800">{supplyAmnt || 0}</span></p>
          </div>
        </RoundedPanel>
        <RoundedPanel bgcolor={'bg-emerald-400'}>
          <div className="flex flex-row items-center justify-between gap-4">
            <LuShoppingBag size={'2em'}/>
            <p className="flex flex-col text-slate-700">Categories<span className="font-bold text-lg text-slate-800">{categoryAmnt || 0}</span></p>
          </div>
        </RoundedPanel>
        <RoundedPanel bgcolor={'bg-red-400'}>
          <div className="flex flex-row items-center justify-between gap-4">
            <LuShoppingBag size={'2em'}/>
            <p className="flex flex-col text-slate-700">Users<span className="font-bold text-lg text-slate-800">{usersAmnt || 0}</span></p>
          </div>
        </RoundedPanel>
        
      </div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Shelf