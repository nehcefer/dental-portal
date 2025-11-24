import React, { useState, useEffect } from 'react';
import { newsData, slides } from './data';
import { HomePage, AboutPage, GalleryPage, NewsPage, ContactsPage } from './pages';
import { Header, Navigation, Footer, Slider, ImageModal } from './components';
import { useScrollEffect, useSlider } from './hooks';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleNews, setVisibleNews] = useState([]);

  const scrolled = useScrollEffect();
  const { currentSlide, setCurrentSlide, nextSlide, prevSlide } = useSlider(slides.length);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [selectedNewsId]);

  // Animate news cards
  useEffect(() => {
    if (currentPage === 'home') {
      setVisibleNews([]);
      newsData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNews(prev => [...prev, index]);
        }, index * 100);
      });
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page === 'news') {
      setSelectedNewsId(null);
    }
  };

  const openNewsDetail = (newsId) => {
    setSelectedNewsId(newsId);
    setCurrentPage('news');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage 
          visibleNews={visibleNews} 
          onNewsClick={openNewsDetail}
        />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage onImageClick={setSelectedImage} />;
      case 'news':
        return <NewsPage 
          selectedNewsId={selectedNewsId} 
          setSelectedNewsId={setSelectedNewsId}
        />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage 
          visibleNews={visibleNews}
          onNewsClick={openNewsDetail}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange}
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />

      <main className="pt-32 sm:pt-36 lg:pt-32">
        {currentPage === 'home' && (
          <Slider 
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        )}
        {renderPage()}
      </main>

      <Footer />

      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
}

export default App;
