import { Link } from "react-router-dom";

export default function ProjectParadiz() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Гостиница «Парадиз» — виртуальный тур</h1>
      <p className="leading-relaxed mb-4">
        Комплексный проект виртуального тура для гостиницы: шут-стопы, панорамные фотографии номеров и общих зон.
        Задача — передать атмосферу места и упростить процесс выбора номера для гостя.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Что сделано</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Съёмка 360° номеров и холлов с тщательной цветокоррекцией.</li>
        <li>Добавление точек интереса (описания номеров, услуги, CTA).</li>
        <li>Оптимизация для мобильных устройств и встраивание на сайт отеля.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Результат</h2>
      <p className="leading-relaxed mb-4">
        Гость получает полный обзор номера и общественных зон до приезда — это повышает долю прямых бронирований и сокращает количество вопросов от клиентов.
      </p>

      <Link to="/portfolio" className="underline">← Назад в портфолио</Link>
    </div>
  );
}