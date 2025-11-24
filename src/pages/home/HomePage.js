import React from 'react';
import { newsData } from '../../data'; 

function HomePage({ visibleNews, onNewsClick }) {
  return (
    <div className="container mx-auto px-4">
      {/* Ваш інший контент головної сторінки */}
      
      {/* Секція новин */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Останні новини</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, 6).map((news, index) => (
            <div 
              key={news.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform ${
                visibleNews.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              onClick={() => {
                console.log('Клік на новину з головної:', news.id);
                onNewsClick(news.id);
              }}
              style={{ 
                transition: 'all 0.5s ease',
                pointerEvents: 'auto' 
              }}
            >
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600">{news.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.description}</p>
                <span className="text-blue-600 hover:text-blue-800 font-semibold">
                  Читати повністю →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
