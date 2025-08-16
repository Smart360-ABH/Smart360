
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">О нас</h1>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Наша компания</h2>
              <p className="text-lg text-gray-700 mb-4">
                Наша компания была основана в 2023 году группой энтузиастов, объединённых страстью к путешествиям и современным технологиям. За годы работы мы создали более 100 высококачественных виртуальных туров по Абхазии.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Мы специализируемся на создании профессиональных виртуальных туров для бизнеса и организаций в Республике Абхазия. Наши проекты отличаются высоким качеством исполнения, вниманием к деталям и оптимальной ценой.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Наша цель — помочь местным предприятиям и организациям привлечь больше клиентов, предоставив им возможность виртуально «посетить» пространство еще до реального визита.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Наши услуги</h2>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Виртуальные туры 360° для отелей</h3>
                  <p className="text-gray-700">
                    Создание иммерсивных виртуальных туров по отелям, гостиницам и гостевым домам, позволяющих показать номера и инфраструктуру будущим гостям.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Виртуальные туры для ресторанов</h3>
                  <p className="text-gray-700">
                    Разработка виртуальных туров по ресторанам, кафе и барам, демонстрирующих интерьер, атмосферу и живописные виды заведения.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Виртуальные туры для музеев и достопримечательностей</h3>
                  <p className="text-gray-700">
                    Создание виртуальных экскурсий по музеям, историческим объектам и природным достопримечательностям Абхазии.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Виртуальные туры для недвижимости</h3>
                  <p className="text-gray-700">
                    Создание виртуальных туров по объектам недвижимости, помогающих потенциальным покупателям оценить пространство дистанционно.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Почему стоит выбрать нас?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Опыт</h3>
                <p className="text-gray-700">
                  Многолетний опыт создания виртуальных туров высокого качества для различных объектов.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Качество</h3>
                <p className="text-gray-700">
                  Использование профессионального оборудования и современных технологий для создания виртуальных туров.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Сроки</h3>
                <p className="text-gray-700">
                  Оперативное выполнение заказов без потери качества и внимания к деталям.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m-6-1.5H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Цена</h3>
                <p className="text-gray-700">
                  Доступные цены на создание виртуальных туров для любых объектов на территории Абхазии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
