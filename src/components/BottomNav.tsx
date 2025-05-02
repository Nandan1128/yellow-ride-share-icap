
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, UserRound, Upload, FileText } from "lucide-react";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Profile", icon: UserRound, path: "/profile" },
    { name: "Publish", icon: Upload, path: "/publish" },
    { name: "My Booking", icon: FileText, path: "/my-booking" }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 py-2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${
              isActivePath(item.path)
                ? "text-icap-yellow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
