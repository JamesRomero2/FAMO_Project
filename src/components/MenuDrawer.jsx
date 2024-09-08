import { GoHome } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TiDocumentAdd } from "react-icons/ti";
import { BiLineChart } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import MenuDrawerItem from "./MenuDrawerItem";
const MenuDrawer = () => {
  const menuItems = {
    1 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <PiUsers />,
        label: "User Management",
        redirect: "/usermanagement"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <TiDocumentAdd />,
        label: "Request History",
        redirect: "/requesthistory"
      },
      {
        icon: <TiDocumentAdd />,
        label: "Request Approval",
        redirect: "/requestapproval"
      },
      {
        icon: <BiLineChart />,
        label: "Analysis Report",
        redirect: "/analysisreport"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
    ],
    2 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <TiDocumentAdd />,
        label: "Request Approval",
        redirect: "/requestapproval"
      },
      {
        icon: <TiDocumentAdd />,
        label: "Request History",
        redirect: "/requesthistory"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
    ],
    3 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
    ],
    4 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
    ],
    5 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
    ],
    6 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
    ],
    7 : [
      {
        icon: <GoHome />,
        label: "Dashboard",
        redirect: "/dashboard"
      },
      {
        icon: <TbBuildingWarehouse />,
        label: "Inventory",
        redirect: "/inventory"
      },
      {
        icon: <HiOutlineDocumentReport />,
        label: "Supply Report",
        redirect: "/supplyreport"
      },
      {
        icon: <TiDocumentAdd />,
        label: "Request History",
        redirect: "/requesthistory"
      },
    ]
  }
  // const userAccess = menuItems[userRole.role];
  const userAccess = menuItems[sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).role : 7];

  return (
    <div className="flex flex-col h-full left-0 top-14 sticky">
      {
        userAccess.map((item) => {
          return (
            <MenuDrawerItem key={item.label} icon={item.icon} label={item.label} redirect={item.redirect}/>
          )
        })
      }
    </div>
  )
}

export default MenuDrawer