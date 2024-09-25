import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMap, FaChartBar, FaTools, FaRobot, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className=''>
        <div className={`flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} h-full bg-slate-950 text-white px-2 transition-all duration-300 rounded-tr-xl rounded-br-xl`}>
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="flex items-center justify-end w-fit p-2 mb-4 hover:bg-gray-700 rounded">
        <FaBars className="text-xl" />
      </button>

      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/map"
              className={`flex items-center space-x-2 p-2 rounded transition-colors duration-300 
                ${isActive('/dashboard/map') ? 'bg-richblack text-yellow-300' : 'hover:bg-yellow-400 hover:bg-opacity-75'} `}
            >
              <FaMap className="text-xl" />
              {!isCollapsed && <span>Map Visualization</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/charts"
              className={`flex items-center space-x-2 p-2 rounded transition-colors duration-300 
                ${isActive('/dashboard/charts') ? 'bg-richblack text-yellow-300' : 'hover:bg-yellow-400 hover:bg-opacity-75'} `}
            >
              <FaChartBar className="text-xl" />
              {!isCollapsed && <span>Charts</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/tools"
              className={`flex items-center space-x-2 p-2 rounded transition-colors duration-300 
                ${isActive('/dashboard/tools') ? 'bg-richblack text-yellow-300' : 'hover:bg-yellow-400 hover:bg-opacity-75'} `}
            >
              <FaTools className="text-xl" />
              {!isCollapsed && <span>Data Tools</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/ai-recommendations"
              className={`flex items-center space-x-2 p-2 rounded transition-colors duration-300 
                ${isActive('/dashboard/ai-recommendations') ? 'bg-richblack text-yellow-300' : 'hover:bg-yellow-400 hover:bg-opacity-75'} `}
            >
              <FaRobot className="text-xl" />
              {!isCollapsed && <span>AI Recommendations</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mb-5">
        <Link
          to="/dashboard/settings"
          className={`flex items-center space-x-2 p-2 rounded transition-colors duration-300 
            ${isActive('/dashboard/settings') ? 'bg-richblack text-yellow-300' : 'hover:bg-yellow-400 hover:bg-opacity-75'} `}
        >
          <FaCog className="text-xl" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
