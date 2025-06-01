import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="Bike" size={32} className="text-orange-500" />
            <span className="text-xl font-bold text-blue-900">BaltMoto</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            ></a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            ></a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Phone" size={16} className="text-orange-500" />
              <span className="text-gray-700"></span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Заказать звонок
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
