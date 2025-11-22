import React from 'react';
import { newsData } from '../../data';

// ВАЖЛИВО: Компонент ПОВИНЕН приймати пропси
function NewsPage({ selectedNewsId, setSelectedNewsId }) {
  
  // Якщо обрана конкретна новина
  if (selectedNewsId !== null) {
    const selectedNews = newsData.find(news => news.id === selectedNewsId);
    
    if (!selectedNews) {
      return <div>Новину не знайдено</div>;
    }

    return (
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={() => setSelectedNewsId(null)}
          className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
        >
          ← Назад до всіх новин
        </button>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={selectedNews.image} 
            alt={selectedNews.title} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <span className="text-sm text-blue-600">{selectedNews.date}</span>
            <h1 className="text-4xl font-bold mt-2 mb-6">{selectedNews.title}</h1>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">{selectedNews.description}</p>
              {selectedNews.fullText && <p>{selectedNews.fullText}</p>}
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Показати список всіх новин
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8">Всі новини</h2>
      <div className="space-y-6">
        {newsData.map((news) => (
          <div 
            key={news.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full md:w-64 h-48 object-cover" 
            />
            <div className="p-6 flex-1">
              <span className="text-sm text-blue-600">{news.date}</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <button 
                onClick={() => {
                  console.log('Клік на новину:', news.id); // для відлагодження
                  setSelectedNewsId(news.id);
                }}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Читати повністю →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
