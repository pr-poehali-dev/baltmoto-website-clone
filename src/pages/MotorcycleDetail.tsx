import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const MotorcycleDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <Icon name="ArrowLeft" size={20} />
          Назад к каталогу
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img
              src="https://cdn.poehali.dev/files/f385c341-4e7e-47ae-b7a0-54b06b393ede.jpg"
              alt="Husqvarna SM 701"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h1 className="text-2xl font-bold text-white mb-1">
                Husqvarna SM 701
              </h1>
              <p className="text-lg text-gray-200">Супермото мотоцикл</p>
            </div>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Описание
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Husqvarna SM 701 — это идеальное сочетание уличной
                  практичности и внедорожных возможностей. Этот супермото
                  мотоцикл оснащён мощным одноцилиндровым двигателем объёмом 693
                  см³, который обеспечивает невероятную динамику и отзывчивость
                  на городских дорогах и за их пределами.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Особенности
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Лёгкий хромомолибденовый каркас
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Система контроля тяги
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Регулируемая подвеска WP
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Дисковые тормоза Brembo
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Технические характеристики
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Двигатель
                      </span>
                      <span className="text-gray-700">
                        1-цилиндровый, 4-тактный
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">Объём</span>
                      <span className="text-gray-700">693 см³</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Мощность
                      </span>
                      <span className="text-gray-700">
                        74 л.с. / 8000 об/мин
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Крутящий момент
                      </span>
                      <span className="text-gray-700">
                        73,5 Нм / 6750 об/мин
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Вес (сухой)
                      </span>
                      <span className="text-gray-700">146 кг</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Топливный бак
                      </span>
                      <span className="text-gray-700">13 л</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Макс. скорость
                      </span>
                      <span className="text-gray-700">~230 км/ч</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    454 800 ₽
                  </div>
                  <p className="text-blue-700 mb-4">
                    Цена может варьироваться у дилеров
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://dealer-motorcycles.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium text-center"
                    >
                      Перейти на сайт дилера
                    </a>
                    <ShareButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetail;
