import React from 'react';
import { Menu, X } from 'lucide-react';

export const Header = ({ scrolled, menuOpen, setMenuOpen }) => {
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-blue-600'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <img 
              src={process.env.PUBLIC_URL + '/tooth.png'} 
              alt="Логотип" 
              className="w-12 h-12 sm:w-12 sm:h-12 object-contain flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h1 className={`text-sm sm:text-base md:text-xl font-bold truncate ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Стоматологічний кабінет
              </h1>
              <p className={`text-xs sm:text-sm truncate ${scrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                Санітарна частина ВВНЗ
              </p>
            </div>
          </div>
          <button 
            className={`lg:hidden flex-shrink-0 ml-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
