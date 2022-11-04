import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaDiscord, FaCompass } from 'react-icons/fa';
import { TbIcons } from 'react-icons/tb';
import { GiConsoleController } from 'react-icons/gi';

const SideBar = () => {
  return (
  <div>
    <div class="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaDiscord size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<TbIcons size="20" />} />
        <SideBarIcon icon={<GiConsoleController size="24" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
        <SideBarIcon icon={<FaCompass size="22" />} />
    </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div class="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-200">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;