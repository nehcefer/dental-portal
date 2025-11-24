import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Будь ласка, введіть ваше ім'я";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Ім'я має містити мінімум 2 символи";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Будь ласка, введіть номер телефону";
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = "Невірний формат телефону";
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = "Номер телефону занадто короткий";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Форма відправлена:', formData);
      setSubmitted(true);
      

      setTimeout(() => {
        setFormData({ name: '', phone: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Контакти</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Зв'яжіться з нами</h3>
          
          {/* Контактна інформація */}
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Адреса:</p>
                <p className="text-gray-600">м. Київ, вул. Військова, 1<br/>Санітарна частина ВВНЗ</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Телефон:</p>
                <p className="text-gray-600">+380 44 123 45 67<br/>+380 44 123 45 68</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">dental@military.ua</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Графік роботи:</p>
                <p className="text-gray-600">
                  Понеділок - П'ятниця: 08:00 - 18:00<br/>
                  Субота: 09:00 - 14:00<br/>
                  Неділя: вихідний
                </p>
              </div>
            </div>
          </div>
          
          {/* Форма запису */}
          <div className="mt-8">
            <h4 className="font-semibold mb-4">Запис на прийом:</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Поле імені */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше ім'я"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.name}
                  </p>
                )}
              </div>
              
              {/* Поле телефону */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Телефон (+380 XX XXX XX XX)"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.phone}
                  </p>
                )}
              </div>
              
              {/* Поле повідомлення */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Повідомлення (необов'язково)"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                />
              </div>
              
              {/* Кнопка відправки */}
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  submitted 
                    ? 'bg-green-500 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                }`}
              >
                {submitted ? (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">✓</span>
                    Заявку успішно відправлено!
                  </span>
                ) : (
                  'Відправити заявку'
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Карта */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6394134679846!2d30.52336961571698!3d50.45010997947597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50c93f4139%3A0x78f4e7a383a5c3d2!2z0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1647854321234!5m2!1suk!2sua"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
