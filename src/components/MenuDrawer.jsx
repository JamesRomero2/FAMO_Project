import { GoHome } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TiDocumentAdd } from "react-icons/ti";
import { BiLineChart } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import MenuDrawerItem from "./MenuDrawerItem";
const MenuDrawer = () => {
  const menuItems = [
    {
      icon: <GoHome />,
      label: "Dashboard",
      redirect: "/"
    },
    {
      icon: <PiUsers />,
      label: "User Management",
      redirect: "/"
    },
    {
      icon: <TbBuildingWarehouse />,
      label: "Inventory",
      redirect: "/"
    },
    {
      icon: <TiDocumentAdd />,
      label: "Request",
      redirect: "/"
    },
    {
      icon: <BiLineChart />,
      label: "Analysis Report",
      redirect: "/"
    },
    {
      icon: <HiOutlineDocumentReport />,
      label: "Supply Report",
      redirect: "/"
    },
  ]

  return (
    <div className="flex flex-col h-full left-0 top-14 sticky">
      {
        menuItems.map((item) => {
          return (
            <MenuDrawerItem key={item.label} icon={item.icon} label={item.label} redirect={item.redirect}/>
          )
        })
      }
    </div>
  )
}

export default MenuDrawer