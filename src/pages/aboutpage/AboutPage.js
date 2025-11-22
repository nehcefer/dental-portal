import React from 'react';
// About Page Component
function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Про наш кабінет</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <p className="text-lg">
          Стоматологічний кабінет санітарної частини ВВНЗ надає повний спектр стоматологічних 
          послуг для військовослужбовців та членів їх сімей.
        </p>
        <h3 className="text-2xl font-bold mt-6">Наші послуги:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Терапевтична стоматологія (лікування карієсу, пульпіту)</li>
          <li>Хірургічна стоматологія (видалення зубів)</li>
          <li>Ортопедична стоматологія (протезування)</li>
          <li>Ортодонтія (виправлення прикусу)</li>
          <li>Профілактика та гігієна порожнини рота</li>
          <li>Відбілювання зубів</li>
          <li>Дитяча стоматологія</li>
        </ul>
        <h3 className="text-2xl font-bold mt-6">Обладнання:</h3>
        <p className="text-gray-700">
          Кабінет оснащений сучасним стоматологічним обладнанням провідних виробників, 
          включаючи цифрову рентген-діагностику, що дозволяє проводити точну діагностику 
          та ефективне лікування.
        </p>
        <h3 className="text-2xl font-bold mt-6">Наша команда:</h3>
        <p className="text-gray-700">
          У кабінеті працюють висококваліфіковані спеціалісти з багаторічним досвідом роботи, 
          які постійно підвищують свою кваліфікацію на спеціалізованих курсах та семінарах.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;