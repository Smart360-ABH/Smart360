import { Link } from "react-router-dom";

export default function ProjectUtrish() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Заповедник «Утриш» — интерактивный тур</h1>
      <p className="leading-relaxed mb-4">
        Проект нацелен на интерактивное знакомство с природной территорией: обзор троп, береговой линии и ключевых локаций.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Особенности</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Панорамы с возможностью «перемещения» по локациям.</li>
        <li>Информационные подсказки о редких видах и точках интереса.</li>
        <li>Встраиваемые медиа — галерея фотографий и короткие видеосюжеты.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Эффект</h2>
      <p className="leading-relaxed mb-4">
        Тур стимулирует интерес туристов и помогает планировать посещение — а также служит образовательной платформой для посетителей.
      </p>

      <Link to="/portfolio" className="underline">← Назад в портфолио</Link>
    </div>
  );
}