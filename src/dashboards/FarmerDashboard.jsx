import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getSession, clearSession } from "../utils/cookieUtils";
import {
  PackagePlus,
  ShoppingBag,
  Heart,
  ShoppingCart,
  CreditCard,
  User,
  Milk,
  Package,
  ClipboardList,
  Menu,
  X,
  LogOut,
  ChevronRight,
  Home,
} from "lucide-react";

// Import your page components
import AddProduct from "../pages/AddProduct";
import ViewAllProducts from "../pages/ViewAllProducts";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile";
import DairyAdd from "../pages/DairyAdd";
import DairyProductList from "../pages/DairyProductList";
import SellerOrders from "../pages/SellerOrders";

// Dashboard Home Content Component
const DashboardHome = () => {
  // Smart card data for quick stats display
  const quickStats = [
    {
      title: "Total Products",
      value: "24",
      icon: <ShoppingBag className="h-8 w-8 text-[#4CAF50]" />,
      change: "+12% from last month",
      positive: true,
    },
    {
      title: "Total Orders",
      value: "38",
      icon: <ClipboardList className="h-8 w-8 text-[#4CAF50]" />,
      change: "+5% from last month",
      positive: true,
    },
    {
      title: "Revenue",
      value: "$2,450",
      icon: <CreditCard className="h-8 w-8 text-[#4CAF50]" />,
      change: "+18% from last month",
      positive: true,
    },
  ];

  // Recent activities mock data
  const recentActivities = [
    {
      activity: "New order received",
      time: "10 minutes ago",
      details: "Order #38492 - Organic Tomatoes (5kg)",
    },
    {
      activity: "Payment processed",
      time: "2 hours ago",
      details: "Order #38491 - Payment of $127.50 received",
    },
    {
      activity: "Product added",
      time: "Yesterday",
      details: "You added 'Organic Carrots' to your products",
    },
  ];

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your farm today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="flex items-start">{stat.icon}</div>
            </div>
            <div
              className={`mt-2 text-xs font-medium ${
                stat.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b px-4 py-3">
            <h2 className="font-semibold text-gray-800">Recent Activities</h2>
          </div>
          <div className="p-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className={`py-3 ${
                  index !== recentActivities.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">
                    {activity.activity}
                  </span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 px-4 py-3 border-t">
            <Link
              to="/activities"
              className="text-[#4CAF50] hover:text-[#2E7D32] text-sm font-medium"
            >
              View all activities
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b px-4 py-3">
            <h2 className="font-semibold text-gray-800">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-3">
            <Link
              to="/farmerdashboard/addproduct"
              className="flex items-center p-3 bg-[#4CAF50]/5 hover:bg-[#4CAF50]/10 rounded-lg transition-colors"
            >
              <PackagePlus size={18} className="text-[#4CAF50] mr-3" />
              <span className="font-medium text-gray-800">Add New Product</span>
            </Link>
            <Link
              to="/farmerdashboard/sellerorders"
              className="flex items-center p-3 bg-[#4CAF50]/5 hover:bg-[#4CAF50]/10 rounded-lg transition-colors"
            >
              <ClipboardList size={18} className="text-[#4CAF50] mr-3" />
              <span className="font-medium text-gray-800">View Orders</span>
            </Link>
            <Link
              to="/chatbot"
              className="flex items-center p-3 bg-[#4CAF50]/5 hover:bg-[#4CAF50]/10 rounded-lg transition-colors"
            >
              <ClipboardList size={18} className="text-[#4CAF50] mr-3" />
              <span className="font-medium text-gray-800">ChatBot</span>
            </Link>
            <Link
              to="/farmerdashboard/adddairy"
              className="flex items-center p-3 bg-[#4CAF50]/5 hover:bg-[#4CAF50]/10 rounded-lg transition-colors"
            >
              <Milk size={18} className="text-[#4CAF50] mr-3" />
              <span className="font-medium text-gray-800">
                Add Dairy Product
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const FarmerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the active section from the path
  // Default to dashboard if at the root farmer dashboard
  const currentPath = location.pathname.split("/");
  const activePage = currentPath.length > 2 ? currentPath[2] : "dashboard";

  useEffect(() => {
    const storedUserId = getSession("userId");
    const storedRole = getSession("role");

    if (!storedUserId || storedRole !== "Farmer") {
      alert("Unauthorized Access! Please log in again.");
      console.log(userId,role);
      navigate("/"); // Redirect to login if not logged in as a Farmer
    } else {
      setUserId(storedUserId);
      setRole(storedRole);
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    clearSession("userId");
    clearSession("role");
    alert("Logged out successfully!");
    navigate("/");
  };

  // Define the menu items with modified paths
  const menuItems = [
    {
      name: "Dashboard",
      path: "/farmerdashboard",
      icon: <Home size={20} />,
      id: "dashboard",
    },
    {
      name: "chatbot",
      path: "/chatbot",
      icon: <PackagePlus size={20} />,
      id: "chatbot",
    },
    {
      name: "Add Product",
      path: "/farmerdashboard/addproduct",
      icon: <PackagePlus size={20} />,
      id: "addproduct",
    },
    {
      name: "View All Products",
      path: "/farmerdashboard/viewallproducts",
      icon: <ShoppingBag size={20} />,
      id: "viewallproducts",
    },
    {
      name: "Wishlist",
      path: "/farmerdashboard/wishlist",
      icon: <Heart size={20} />,
      id: "wishlist",
    },
    {
      name: "Cart",
      path: "/farmerdashboard/cart",
      icon: <ShoppingCart size={20} />,
      id: "cart",
    },
    {
      name: "Payment Registration",
      path: "/farmerdashboard/payment",
      icon: <CreditCard size={20} />,
      id: "payment",
    },
    {
      name: "Profile",
      path: "/farmerdashboard/profile",
      icon: <User size={20} />,
      id: "profile",
    },
    {
      name: "Add Dairy Product",
      path: "/farmerdashboard/adddairy",
      icon: <Milk size={20} />,
      id: "adddairy",
    },
    {
      name: "View All Dairy Products",
      path: "/farmerdashboard/viewalldairy",
      icon: <Package size={20} />,
      id: "viewalldairy",
    },
    {
      name: "My Orders",
      path: "/farmerdashboard/sellerorders",
      icon: <ClipboardList size={20} />,
      id: "sellerorders",
    },
  ];

  // Function to render the appropriate content based on the active page
  const renderContent = () => {
    switch (activePage) {
      case "addproduct":
        return <AddProduct />;
      case "viewallproducts":
        return <ViewAllProducts />;
      case "wishlist":
        return <Wishlist />;
      case "cart":
        return <Cart />;
      case "payment":
        return <Payment />;
      case "profile":
        return <Profile />;
      case "adddairy":
        return <DairyAdd />;
      case "viewalldairy":
        return <DairyProductList />;
      case "sellerorders":
        return <SellerOrders />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed h-full z-20 lg:relative transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "left-0" : "-left-64 lg:left-0"
        }`}
      >
        <div className="h-full w-64 bg-white shadow-md overflow-y-auto">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center px-4 h-16 border-b">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-[#4CAF50]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,3C8.5,3 5.5,4.5 3.5,7L2,5.5V10H6.5L5,8.5C6.5,6.5 9,5 12,5C16.5,5 20,8.5 20,13C20,17.5 16.5,21 12,21C7.5,21 4,17.5 4,13H2C2,18.5 6.5,23 12,23C17.5,23 22,18.5 22,13C22,7.5 17.5,3 12,3M17,13H12V7H14V11H17V13Z" />
              </svg>
              <span className="text-xl font-bold text-[#2E7D32]">
                AgroCraft
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 rounded-full hover:bg-gray-100"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Sidebar Menu */}
          <div className="px-2 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center px-4 py-3 mb-1 rounded-lg transition-all duration-200 ${
                  activePage === item.id
                    ? "bg-[#4CAF50]/10 text-[#2E7D32]"
                    : "hover:bg-[#4CAF50]/5 text-gray-700 hover:text-[#2E7D32]"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {activePage === item.id && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </Link>
            ))}

            <div className="border-t border-gray-200 my-4"></div>

            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut size={20} className="mr-3" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-4 lg:px-6">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div className="ml-auto flex items-center space-x-2">
            <div className="relative">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF50]/10 text-[#2E7D32]">
                <Link to="/farmerdashboard/profile">
                  <User size={18} />
                </Link>
              </span>
            </div>
            <div className="font-medium text-gray-700">Hi, Farmer</div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <main className="p-4 lg:p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default FarmerDashboard;
