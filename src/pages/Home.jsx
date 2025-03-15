import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Check,
  CirclePlus,
  Clock,
  Earth,
  IndianRupee,
  ShieldCheck,
  ShoppingCart,
  TruckIcon,
  X,
} from "lucide-react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl font-bold text-green-800">AgroCraft</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-green-800 hover:text-green-600 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-green-800 hover:text-green-600 font-medium"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/farmers"
                  className="text-green-800 hover:text-green-600 font-medium"
                >
                  Our Farmers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-800 hover:text-green-600 font-medium"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-green-700 hover:text-green-800 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition-colors duration-300"
            >
              Signup
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Image */}
        <section className="relative bg-green-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div className="max-w-lg">
                <h1
                  className={`text-4xl md:text-5xl font-bold text-green-800 mb-6 transition-all duration-1000 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Farm to Table, Simplified
                </h1>
                <p className="text-xl text-green-700 mb-8">
                  AgroCraft connects farmers directly with consumers. Fresh
                  produce, fair prices, no middlemen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/marketplace"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Shop Now
                  </Link>
                  <Link
                    to="/seller-signup"
                    className="px-6 py-3 bg-white text-green-700 rounded-lg shadow-lg hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Sell Your Produce
                  </Link>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-40"></div>
                <img
                  src="https://images.yourstory.com/cs/5/f02aced0d86311e98e0865c1f0fe59a2/indian-farmer-1610471656527.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                  alt="Farmers working in a green field with fresh produce"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                How AgroCraft Works
              </h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Our platform bridges the gap between farmers and consumers,
                creating a sustainable marketplace for fresh produce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Farmers List Products",
                  description:
                    "Local farmers add their fresh produce, set their prices, and manage their inventory.",
                  icon: (
                    <CirclePlus
                      className="w-16 h-16 text-green-600 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  ),
                },
                {
                  title: "Customers Shop Local",
                  description:
                    "Browse products by category, farm location, or growing practices. Know exactly where your food comes from.",
                  icon: (
                    <ShoppingCart
                      className="w-16 h-16 text-green-600 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  ),
                },
                {
                  title: "Direct Delivery",
                  description:
                    "Choose pickup options or have fresh produce delivered directly to your door within 24 hours of harvest.",
                  icon: (
                    <TruckIcon
                      className="w-16 h-16 text-green-600 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  ),
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`bg-green-50 rounded-xl p-8 text-center shadow-md transform hover:-translate-y-2 transition-all duration-500 delay-${
                    index * 100
                  } ${isLoaded ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-green-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-2">
                  Fresh From The Farm
                </h2>
                <p className="text-green-600">
                  This seasons best produce, directly from local farmers
                </p>
              </div>
              <Link
                to="/marketplace"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                View All Products →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Organic Tomatoes",
                  farmer: "Green Valley Farm",
                  price: "₹65/kg",
                  image:
                    "https://tagawagardens.com/wp-content/uploads/2023/08/TOMATOES-RED-RIPE-VINE-SS-1-scaled.jpg",
                },
                {
                  name: "Fresh Spinach",
                  farmer: "Riverside Gardens",
                  price: "₹45/bunch",
                  image:
                    "https://149880802.v2.pressablecdn.com/wp-content/uploads/53155733592_ce292a7118_c1.jpg",
                },
                {
                  name: "Apple Variety Pack",
                  farmer: "Mountain Orchards",
                  price: "₹120/kg",
                  image:
                    "https://www.ampimex.in/wp-content/uploads/2021/02/apples-.jpg",
                },
                {
                  name: "Honey (Raw)",
                  farmer: "Sunshine Apiaries",
                  price: "₹250/bottle",
                  image:
                    "https://5.imimg.com/data5/UD/MB/MY-42635865/natural-honey-500x500.jpg",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-green-800">
                      {product.name}
                    </h3>
                    <p className="text-green-600 text-sm mb-2">
                      By {product.farmer}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-700">
                        {product.price}
                      </span>
                      <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Why Choose AgroCraft?
              </h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                We're transforming agriculture commerce with technology that
                benefits both farmers and consumers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <IndianRupee
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Better Prices for Everyone
                  </h3>
                  <p className="text-green-700">
                    Farmers earn 20-30% more than traditional channels, while
                    consumers pay less than retail prices.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-green-700">
                    All farmers undergo verification. Products are inspected for
                    quality and proper growing practices.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Ultra-Fresh Produce
                  </h3>
                  <p className="text-green-700">
                    Most produce reaches you within 24 hours of harvest,
                    maintaining peak nutrition and flavor.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Earth
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Support Local Economy
                  </h3>
                  <p className="text-green-700">
                    Every purchase supports small and medium farms in your
                    region, strengthening local food systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-green-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
              What Our Community Says
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Farmer Testimonials */}
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                  <X
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  />
                  From Our Farmers
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-green-800 mb-4">
                      "AgroCraft has transformed my small farm business. I now
                      sell directly to customers who appreciate quality produce,
                      and I earn nearly 40% more than when I sold to
                      distributors."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Rajesh Patel"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-green-800">
                          Rajesh Patel
                        </h4>
                        <p className="text-sm text-green-600">
                          Organic Vegetable Farmer, Gujarat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-green-800 mb-4">
                      "The platform's inventory management and analytics tools
                      have helped me plan my harvests better. I waste less
                      produce and can predict demand patterns now."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/45.jpg"
                        alt="Anita Sharma"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-green-800">
                          Anita Sharma
                        </h4>
                        <p className="text-sm text-green-600">
                          Fruit Orchard Owner, Himachal Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Testimonials */}
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                  <Check
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  />
                  From Our Customers
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-green-800 mb-4">
                      "The difference in taste between AgroCraft produce and
                      supermarket options is incredible. Everything is so fresh,
                      and I love knowing exactly which farm my food comes from."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt="Priya Desai"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-green-800">
                          Priya Desai
                        </h4>
                        <p className="text-sm text-green-600">
                          Home Cook, Mumbai
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-green-800 mb-4">
                      "As a restaurant owner, AgroCraft has been a game-changer
                      for sourcing ingredients. The quality is consistent,
                      prices are fair, and delivery is reliable."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/47.jpg"
                        alt="Vikram Mehta"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-green-800">
                          Vikram Mehta
                        </h4>
                        <p className="text-sm text-green-600">
                          Restaurant Owner, Delhi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white text-green-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to experience farm-fresh goodness?
            </h2>
            <p className="text-lg mb-8 text-green-700">
              Join thousands of farmers and customers already transforming how
              we buy and sell food.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/marketplace"
                className="px-8 py-3 bg-white text-green-700 rounded-lg shadow-lg hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300 font-medium"
              >
                Shop Now
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 bg-green-800 text-white rounded-lg shadow-lg hover:bg-green-900 transform hover:-translate-y-1 transition-all duration-300 font-medium"
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-green-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">AgroCraft</h3>
              <p className="mb-4 text-green-200">
                Connecting farmers and consumers for a sustainable food future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white">
                  <Twitter
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Instagram
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Facebook
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/marketplace"
                    className="text-green-200 hover:text-white"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-green-200 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-green-200 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-green-200 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">For Farmers</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/seller-signup"
                    className="text-green-200 hover:text-white"
                  >
                    Become a Seller
                  </Link>
                </li>
                <li>
                  <Link
                    to="/farmer-resources"
                    className="text-green-200 hover:text-white"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/success-stories"
                    className="text-green-200 hover:text-white"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-green-200 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Newsletter</h4>
              <p className="text-green-200 mb-4">
                Get updates on fresh harvests and seasonal specials.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-300">
            <p>
              &copy; {new Date().getFullYear()} AgroCraft. All rights reserved.
            </p>
            <div className="mt-4 space-x-6">
              <Link
                to="/privacy-policy"
                className="text-green-200 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-green-200 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-green-200 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
