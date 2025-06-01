import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Мотоциклы из Европы
              <span className="block text-orange-400">
                с доставкой в Россию
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Официальный дилер европейских мотоциклов. Гарантия качества,
              полное юридическое сопровождение, сервисное обслуживание.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors text-lg font-medium">
                Посмотреть каталог
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors text-lg font-medium">
                Консультация
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={24} className="text-orange-400" />
                <span className="text-sm">Официальная гарантия</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Truck" size={24} className="text-orange-400" />
                <span className="text-sm">Доставка по РФ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Wrench" size={24} className="text-orange-400" />
                <span className="text-sm">Сервис и ТО</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
              alt="Мотоцикл"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
