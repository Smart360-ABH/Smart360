
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import VirtualTourFrame from '@/components/VirtualTourFrame';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Виртуальные туры по Абхазии
              </h1>
              <p className="text-xl mb-6">
                Лучшее решение для продвижения вашего бизнеса в Абхазии. Создаём иммерсивные виртуальные туры для организаций по доступной цене.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/portfolio">Посмотреть работы</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <VirtualTourFrame
                src="https://yandex.com/map-widget/v1/?l=stv%2Csta&ll=41.057345%2C42.982470&mode=search&oid=194863417396&ol=biz&panorama%5Bdirection%5D=66.838510%2C3.861791&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=41.056935%2C42.983444&panorama%5Bspan%5D=110.729797%2C60.000000&z=16.68"
                title="Сухумская бухта"
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">О нас</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Наша компания была основана в 2023 году группой энтузиастов, объединённых страстью к путешествиям и современным технологиям. За годы работы мы создали более 100 высококачественных виртуальных туров по Абхазии.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Мы специализируемся на создании виртуальных туров для бизнеса и организаций в Республике Абхазия. Наши услуги помогут вам привлечь больше клиентов, продемонстрировав ваши объекты в формате 360°.
              </p>
              <Button asChild className="mt-4">
                <Link to="/about">Узнать больше о нас</Link>
              </Button>
            </div>
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/XYljglml2UQ?si=eap5K1gnyWiu8U7g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Наши преимущества</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-.244l.614-.614c.43-.43.614-1.055.476-1.655A4.118 4.118 0 0012 2.25a4.125 4.125 0 00-3.533 2.02L8.115 5.19z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.97 8.97c.294-.268.619-.494.971-.674a3.55 3.55 0 011.964-.357 4.119 4.119 0 012.771 2.772c.131.34.179.703.143 1.062M18.97 15.03c.294.268.619.494.971.674.345.18.708.256 1.07.227a4.119 4.119 0 002.894-2.773 3.549 3.549 0 00-.143-1.062M12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Высокое качество</h3>
              <p className="text-gray-700">
                Мы используем профессиональное оборудование для создания панорам высокого разрешения, которые показывают ваш объект в лучшем свете.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Оперативность</h3>
              <p className="text-gray-700">
                Выполняем заказы в кратчайшие сроки без потери качества. Вы получите готовый виртуальный тур в течение нескольких дней.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m-6-1.5H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Доступные цены</h3>
              <p className="text-gray-700">
                Предлагаем конкурентные цены на создание виртуальных туров для любых объектов на территории Абхазии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы заказать виртуальный тур?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Свяжитесь с нами сегодня, чтобы обсудить ваш проект и получить бесплатную консультацию.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/contact">Связаться с нами</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+79409435555">Позвонить</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Подписывайтесь на нас</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/_smart_360_?igsh=MWF6cnVtY3V2dXM3Nw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
