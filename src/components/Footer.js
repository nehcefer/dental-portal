import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Контакти</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone size={16} className="mr-2" /> +380 44 123 45 67</p>
              <p className="flex items-center"><Mail size={16} className="mr-2" /> dental@military.ua</p>
              <p className="flex items-center"><MapPin size={16} className="mr-2" /> м. Київ, вул. Військова, 1</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Графік роботи</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Clock size={16} className="mr-2" /> Пн-Пт: 08:00 - 18:00</p>
              <p className="ml-6">Сб: 09:00 - 14:00</p>
              <p className="ml-6">Нд: вихідний</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Про нас</h3>
            <p className="text-sm text-gray-300">
              Стоматологічний кабінет санітарної частини забезпечує якісне 
              медичне обслуговування військовослужбовців та членів їх сімей.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Стоматологічний кабінет санчастини ВВНЗ. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;