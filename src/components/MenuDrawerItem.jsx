import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MenuDrawerItem = ({icon, label, redirect}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(redirect);
  };
  return (
    <div className="flex items-center p-4 hover:bg-slate-200 cursor-pointer mb-2 rounded-md" onClick={handleClick}>
      {icon}
      <span className="ml-2 whitespace-nowrap">{label}</span>
    </div>
  );
}

export default MenuDrawerItem