import Layout from '@/components/layout/Layout';
import VirtualTourFrame from '@/components/VirtualTourFrame';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const tours = [
  { title: 'Тур 1', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%83%D0%BD%D0%B4%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5/' },
  { title: 'Тур 2', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-%D1%80%D0%B8%D1%86%D0%B0-%D1%81-%D0%B2%D1%8B/' },
  { title: 'Тур 3', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B0%D1%84%D0%BE%D0%BD-%D1%81-%D0%B2%D1%8B/' },
  { title: 'Тур 4', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B0%D1%84%D0%BE%D0%BD-%D0%B4%D0%B0%D1%87/' },
  { title: 'Тур 5', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%83%D0%BD%D0%B4%D1%81%D0%BA%D0%B8%D0%B9-%D1%85%D1%80%D0%B0/' },
  { title: 'Тур 6', src: 'https://go-abxazia.ru/%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%D1%8F-%D0%B2%D0%B5%D0%B1%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0-%D0%BD%D0%B0-%D0%BE%D0%B7%D0%B5%D1%80%D0%B5-%D1%80%D0%B8%D1%86%D0%B0/' },
  { title: 'Тур 7', src: 'https://go-abxazia.ru/%D0%B2%D0%B5%D0%B1%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B0%D1%84%D0%BE%D0%BD-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0/' },
  { title: 'Тур 8', src: 'https://truevirtualtours.com/tour/picunda' },
  { title: 'Тур 9', src: 'https://truevirtualtours.com/tour/daca-stalina-v-abhazii' },
  { title: 'Тур 10', src: 'https://truevirtualtours.com/tours?tagged=abhazia' },
  { title: 'Тур 11', src: 'https://www.360cities.net/image/tourist-camp-in-the-kodori-gorge-abkhazia' },
  { title: 'Тур 12', src: 'https://www.360cities.net/de/image/8199-abh-ricca-1' },
  { title: 'Тур 13', src: 'https://www.360cities.net/ru/image/novy-afon-abhaziya' },
  { title: 'Тур 14', src: 'https://www.360cities.net/it/image/8000-abh-opk2-mol' },
  { title: 'Тур 15', src: 'https://www.360cities.net/de/image/lake-amtkel-abkhazia' },
  { title: 'Тур 16', src: 'https://www.360cities.net/it/image/7929-abh-opk-beach-1' },
  { title: 'Тур 17', src: 'https://www.360cities.net/image/view-from-the-square-of-an-abandoned-railway-station-new-athos-abkhazia' },
  { title: 'Тур 18', src: 'https://www.360cities.net/ru/image/abkhazia-new-athos-fortress-church-2010' },
  { title: 'Тур 19', src: 'https://www.360cities.net/nl/image/6076-abh-kavkaz' },
  { title: 'Тур 20', src: 'https://www.360cities.net/image/8931-abh-suh-atrium-1' },
  { title: 'Тур 21', src: 'https://www.360cities.net/st/image/abkhazia-new-athos-monastery-2-2010' },
  { title: 'Тур 22', src: 'https://otdich-v-gagrach.ru/abhaziya-otdyh-panoramy/' },
  { title: 'Тур 23', src: 'https://dolphin-picunda.com/%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B0%D0%B1%D1%85%D0%B0%D0%B7%D0%B8%D0%B8/' },
  { title: 'Тур 24', src: 'https://sputnik-abkhazia.ru/panorama/' },
  { title: 'Тур 25', src: 'https://abkhazworld.com/aw/blogs/1642-ritsa-auadhara-national-park-abkhazia' },
  { title: 'Тур 26', src: 'https://www.youtube.com/watch?v=-N5KKvmMs_c' },
  { title: 'Тур 27', src: 'https://www.reddit.com/r/Abkhazia/comments/1fmmxw8/video_of_the_coastal_area_of_abkhazias_capital/' },
  { title: 'Тур 28', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%83%D0%BD%D0%B4%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5/#variant28' },
  { title: 'Тур 29', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-%D1%80%D0%B8%D1%86%D0%B0-%D1%81-%D0%B2%D1%8B/#variant29' },
  { title: 'Тур 30', src: 'https://go-abxazia.ru/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-3d-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B0%D1%84%D0%BE%D0%BD-%D1%81-%D0%B2%D1%8B/#variant30' }
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Портфолио — виртуальные туры по Абхазии</h1>
          <p className="mb-6 text-muted-foreground">Демонстрация реальных панорам и туров по разным локациям Абхазии. Нажмите «Открыть» чтобы посмотреть в новой вкладке.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((t, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm mb-4 break-words">{t.src}</p>
                </div>
                <div className="w-full">
                  <VirtualTourFrame src={t.src} title={t.title} height={280} />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <a href={t.src} target="_blank" rel="noreferrer"><Button>Открыть</Button></a>
                  <a href={t.src} target="_blank" rel="noreferrer" className="text-sm underline">Открыть в новой вкладке</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Portfolio;
