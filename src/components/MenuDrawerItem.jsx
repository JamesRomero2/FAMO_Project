import { useNavigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MenuDrawerItem = ({icon, label, redirect}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(redirect);
  };
  const isActive = location.pathname === redirect;
  return (
    <div className={`flex items-center p-4 hover:bg-slate-200 cursor-pointer mb-2 rounded-md ${isActive ? 'bg-pri text-white' : 'hover:bg-slate-200'}`} onClick={handleClick}>
      {icon}
      <span className="ml-2 whitespace-nowrap">{label}</span>
    </div>
  );
}

export default MenuDrawerItem