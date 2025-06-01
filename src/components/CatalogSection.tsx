import MotorcycleCard from "./MotorcycleCard";

const motorcycles = [
  {
    id: 1,
    brand: "Husqvarna",
    model: "SM 701",
    year: 2025,
    price: 890000,
    mileage: 0,
    engine: "692cc, 74 л.с.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
    location: "Германия",
  },
  {
    id: 2,
    brand: "BMW",
    model: "R 1250 GS",
    year: 2024,
    price: 1250000,
    mileage: 5200,
    engine: "1254cc, 136 л.с.",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
    location: "Санкт-Петербург",
  },
  {
    id: 3,
    brand: "Yamaha",
    model: "MT-09",
    year: 2023,
    price: 750000,
    mileage: 12000,
    engine: "889cc, 119 л.с.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=300&fit=crop",
    location: "Москва",
  },
  {
    id: 4,
    brand: "Ducati",
    model: "Monster 821",
    year: 2022,
    price: 980000,
    mileage: 8500,
    engine: "821cc, 109 л.с.",
    image:
      "https://images.unsplash.com/photo-1551744486-25d6a2717b4d?w=500&h=300&fit=crop",
    location: "Калининград",
  },
  {
    id: 5,
    brand: "Honda",
    model: "CB650R",
    year: 2024,
    price: 680000,
    mileage: 3200,
    engine: "649cc, 95 л.с.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    location: "Новгород",
  },
  {
    id: 6,
    brand: "KTM",
    model: "Duke 390",
    year: 2023,
    price: 420000,
    mileage: 7800,
    engine: "373cc, 44 л.с.",
    image:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&h=300&fit=crop",
    location: "Псков",
  },
];

const CatalogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Мотоциклы в наличии
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Большой выбор мотоциклов из Европы. Все мотоциклы прошли
            предпродажную подготовку и готовы к эксплуатации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} {...motorcycle} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors text-lg">
            Показать все мотоциклы
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
