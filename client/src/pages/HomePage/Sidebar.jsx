import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebar_items_top = {
    Home: "/",
    Items: "/items",
    Stock: "/stock",
    Build: "/build",
    Customers: "/customers",
    "Sales Orders": "/",
    Suppliers: "/",
    Manufacturers: "/",
    "Purchase Orders": "/",
    Reports: "/",
  };

  const sidebar_items_down = {
    Help: "/",
    Integrations: "/",
    Logout: "/",
    "My Profile": "/",
  };
  return (
    <div className="flex flex-col justify-between p-4 h-screen">
      {/* sidebar top */}
      <div>
        {Object.entries(sidebar_items_top).map(([key, value]) => (
          <Link
            to={value}
            key={key}
            className="flex items-center  p-2 my-2 transition-colors duration-200 justify-start text-gray-800 hover:text-white hover:bg-yellow-500 rounded-lg "
          >
            <span className="mx-4 text-white font-bold">{key}</span>
          </Link>
        ))}
      </div>
      {/* sidebar down */}
      <div>
        {Object.entries(sidebar_items_down).map(([key, value]) => (
          <Link
            to={value}
            key={key}
            className="flex items-center  p-2 my-2 transition-colors duration-200 justify-start text-gray-800 hover:text-white hover:bg-yellow-500 rounded-lg "
          >
            <span className="mx-4 text-white font-bold">{key}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
