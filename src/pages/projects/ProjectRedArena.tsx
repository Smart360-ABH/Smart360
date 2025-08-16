import { Link } from "react-router-dom";

export default function ProjectRedArena() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">RED Arena — виртуальная презентация площадки</h1>
      <p className="leading-relaxed mb-4">
        Для развлекательного центра был создан детализированный виртуальный обзор основных зон: арен, зон отдыха и фудкорта.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Что включено</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Сферические панорамы ключевых пространств.</li>
        <li>Переходы между локациями и описания сервисов.</li>
        <li>Интеграция с картой расположения и простая навигация для посетителей.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Польза</h2>
      <p className="leading-relaxed mb-4">
        Посетители получают возможность заранее изучить площадку — это особенно полезно для планирования мероприятий и аренды зон.
      </p>

      <Link to="/portfolio" className="underline">← Назад в портфолио</Link>
    </div>
  );
}