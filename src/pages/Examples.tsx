import Layout from '@/components/layout/Layout';
import VirtualTourFrame from '@/components/VirtualTourFrame';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const examplesData = [
  {
    id: 1,
    title: 'Сухумская бухта — Панорама',
    desc: 'Пример виртуального тура 360° — панорамный вид на набережную и бухту.',
    src: 'https://yandex.com/map-widget/v1/?l=stv%2Csat%2Cskl%2Cstv&ll=41.0266%2C43.0025&z=16'
  },
  {
    id: 2,
    title: 'Городской парк — Виртуальная прогулка',
    desc: 'Интерактивная прогулка по парку с информационными сносками.',
    src: 'https://yandex.com/map-widget/v1/?l=stv&ll=41.0120%2C43.0090&z=16'
  },
  {
    id: 3,
    title: 'Интерьер отеля — Внутренний тур',
    desc: 'Демонстрация гостиничного номера и общественных зон в формате VR.',
    src: 'https://yandex.com/map-widget/v1/?l=stv&ll=41.0150%2C43.0200&z=17'
  }
];

const Examples = () => {
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-r from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Примеры виртуальных туров</h2>
          <p className="mb-6 text-muted-foreground">Ниже — несколько демонстрационных туров и форматов, которые можно реализовать.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {examplesData.map((ex) => (
              <Card key={ex.id} className="overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{ex.title}</h3>
                  <p className="text-sm mb-4">{ex.desc}</p>
                </div>
                <div className="w-full">
                  <VirtualTourFrame src={ex.src} title={ex.title} height={240} />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <Link to="/contact"><Button>Заказать подобный тур</Button></Link>
                  <a href={ex.src} target="_blank" rel="noreferrer" className="text-sm underline">Открыть в новой вкладке</a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-3">Услуги</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Создание VR 360° туров с навигацией по локациям</li>
              <li>Аудиогиды и информационные сноски</li>
              <li>Профессиональная фотосъёмка и видеосъёмка для презентаций</li>
              <li>Интеграция тура на сайт и размещение на картах</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Examples;
