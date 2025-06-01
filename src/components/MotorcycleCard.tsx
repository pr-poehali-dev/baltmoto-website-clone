import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface MotorcycleCardProps {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  engine: string;
  image: string;
  location: string;
}

const MotorcycleCard = ({
  brand,
  model,
  year,
  price,
  mileage,
  engine,
  image,
  location,
}: MotorcycleCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900 mb-2">
          {brand} {model}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="Gauge" size={16} className="mr-2 text-orange-500" />
            <span>{mileage.toLocaleString()} км</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="Zap" size={16} className="mr-2 text-orange-500" />
            <span>{engine}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="MapPin" size={16} className="mr-2 text-orange-500" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">454 800 ₽</div>
          <button
            onClick={() => navigate("/motorcycle/husqvarna-sm-701")}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleCard;
