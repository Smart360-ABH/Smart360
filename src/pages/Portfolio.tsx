
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VirtualTourFrame from '@/components/VirtualTourFrame';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("sukhum");

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Портфолио</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры виртуальных туров по различным локациям Республики Абхазия
          </p>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <Tabs defaultValue="sukhum" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-6 overflow-x-auto">
            <TabsList className="h-auto p-1 flex w-full justify-start sm:justify-center">
              <TabsTrigger value="sukhum" className="text-sm sm:text-base py-2 px-4">Сухум</TabsTrigger>
              <TabsTrigger value="gagra" className="text-sm sm:text-base py-2 px-4">Гагра</TabsTrigger>
              <TabsTrigger value="pitsunda" className="text-sm sm:text-base py-2 px-4">Пицунда</TabsTrigger>
              <TabsTrigger value="new-athos" className="text-sm sm:text-base py-2 px-4">Новый Афон</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="sukhum" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Виртуальный тур по Сухуму</h2>
              <p className="text-gray-700 mb-6">
                Сухум — столица Республики Абхазия, город с древней историей, расположенный на побережье Черного моря. Виртуальный тур позволяет увидеть знаменитую Сухумскую бухту и набережную.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <VirtualTourFrame
                  src="https://yandex.com/map-widget/v1/?l=stv%2Csta&ll=41.057345%2C42.982470&mode=search&oid=194863417396&ol=biz&panorama%5Bdirection%5D=66.838510%2C3.861791&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=41.056935%2C42.983444&panorama%5Bspan%5D=110.729797%2C60.000000&z=16.68"
                  title="Сухумская бухта"
                  height={500}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Особенности локации:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Исторический центр города с колониальной архитектурой</li>
                  <li>Живописная набережная Махаджиров</li>
                  <li>Ботанический сад с редкими видами растений</li>
                  <li>Абхазский драматический театр</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gagra" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Виртуальный тур по Гагре</h2>
              <p className="text-gray-700 mb-6">
                Гагра — один из самых популярных курортов Абхазии, известный своими пляжами и живописными горными пейзажами. Виртуальный тур позволяет увидеть город с высоты птичьего полета.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <div style={{position:"relative", overflow:"hidden"}}>
                  <iframe 
                    src="https://yandex.com/map-widget/v1/?l=stv%2Csta&ll=40.265122%2C43.277622&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2ODQ3NhKNAeGDoeGDkOGDpeGDkOGDoOGDl-GDleGDlOGDmuGDnSwg4YOQ4YOk4YOu4YOQ4YOW4YOU4YOX4YOY4YOhIOGDkOGDleGDouGDneGDnOGDneGDm-GDmOGDo-GDoOGDmCDhg6Dhg5Thg6Hhg57hg6Phg5Hhg5rhg5jhg5nhg5AsIOGDkuGDkOGDkuGDoOGDkCIKDWQZIUIVmRctQg%2C%2C&panorama%5Bair%5D=true&panorama%5Bdirection%5D=172.823238%2C-25.100864&panorama%5Bfull%5D=true&panorama%5Bid%5D=1313930909_788325462_23_1719871883&panorama%5Bpoint%5D=40.264833%2C43.285767&panorama%5Bspan%5D=110.729797%2C60.000000&z=14" 
                    width="560" 
                    height="500" 
                    frameBorder="1" 
                    allowFullScreen={true} 
                    style={{position:"relative", width: "100%"}}
                  ></iframe>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Особенности локации:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Живописное побережье с галечными пляжами</li>
                  <li>Гагрская колоннада — символ города</li>
                  <li>Замок принца Ольденбургского</li>
                  <li>Красивые панорамные виды на горы и море</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pitsunda" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Виртуальный тур по Пицунде</h2>
              <p className="text-gray-700 mb-6">
                Пицунда — курортный поселок, знаменитый своими песчаными пляжами и реликтовой сосновой рощей. Виртуальный тур позволяет увидеть красоту этого места с высоты птичьего полета.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <div style={{position:"relative", overflow:"hidden"}}>
                  <iframe 
                    src="https://yandex.com/map-widget/v1/?l=stv%2Csta&ll=40.361646%2C43.169139&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2ODQ3NhKNAeGDoeGDkOGDpeGDkOGDoOGDl-GDleGDlOGDmuGDnSwg4YOQ4YOk4YOu4YOQ4YOW4YOU4YOX4YOY4YOhIOGDkOGDleGDouGDneGDnOGDneGDm-GDmOGDo-GDoOGDmCDhg6Dhg5Thg6Hhg57hg6Phg5Hhg5rhg5jhg5nhg5AsIOGDkuGDkOGDkuGDoOGDkCIKDWQZIUIVmRctQg%2C%2C&panorama%5Bair%5D=true&panorama%5Bdirection%5D=168.087451%2C-70.416594&panorama%5Bfull%5D=true&panorama%5Bid%5D=1314570710_789240724_23_1719651521&panorama%5Bpoint%5D=40.372088%2C43.173574&panorama%5Bspan%5D=110.729797%2C60.000000&z=14.91" 
                    width="560" 
                    height="500" 
                    frameBorder="1" 
                    allowFullScreen={true} 
                    style={{position:"relative", width: "100%"}}
                  ></iframe>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Особенности локации:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Реликтовая сосновая роща</li>
                  <li>Чистейшие песчаные пляжи</li>
                  <li>Патриарший собор X века</li>
                  <li>Живописные виды на море и горы</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="new-athos" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Виртуальный тур по Новому Афону</h2>
              <p className="text-gray-700 mb-6">
                Новый Афон — город, известный своими историческими и природными достопримечательностями, включая знаменитый Новоафонский монастырь и уникальную пещеру.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <VirtualTourFrame
                  src="https://yandex.com/map-widget/v1/?l=stv%2Csta&ll=40.812787%2C43.098081&panorama%5Bdirection%5D=44.595733%2C5.419071&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=40.812038%2C43.097903&panorama%5Bspan%5D=113.507965%2C60.000000&z=17"
                  title="Новоафонский монастырь"
                  height={500}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Особенности локации:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Новоафонский монастырь Святого Пантелеймона</li>
                  <li>Новоафонская пещера — одна из самых больших в мире</li>
                  <li>Водопад на реке Псырцха</li>
                  <li>Руины древней крепости Анакопия</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Portfolio;
