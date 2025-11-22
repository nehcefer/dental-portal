import React from 'react';

const menuItems = [
  { name: 'Головна', page: 'home' },
  { name: 'Про кабінет', page: 'about' },
  { name: 'Галерея', page: 'gallery' },
  { name: 'Новини', page: 'news' },
  { name: 'Контакти', page: 'contacts' }
];

export const Navigation = ({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) => {
  return (
    <nav className={`fixed w-full top-14 sm:top-16 z-40 bg-white shadow-md transition-all duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'}`}>
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-col lg:flex-row lg:justify-center py-2 lg:py-3 gap-2">
            {menuItems.map(item => (
              <li key={item.page} className="flex-1 lg:flex-initial">
                <button
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMenuOpen(false);
                  }}
                  className={`w-full lg:w-auto px-4 lg:px-6 py-2 rounded-lg transition-colors text-sm font-medium whitespace-nowrap ${
                    currentPage === item.page 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;