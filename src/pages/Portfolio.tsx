import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Портфолио — интерактивные проекты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="p-4 border rounded">
          <h2 className="text-xl font-semibold">Гостиница «Парадиз»</h2>
          <p className="mt-2">Виртуальный тур по номерному фонду и лобби — помогает повысить прямые бронирования.</p>
          <Link to="/projects/paradiz" className="mt-3 inline-block underline">Смотреть кейс</Link>
        </article>

        <article className="p-4 border rounded">
          <h2 className="text-xl font-semibold">Заповедник «Утриш»</h2>
          <p className="mt-2">Интерактивный экологический тур с подсказками и галереей.</p>
          <Link to="/projects/utrish" className="mt-3 inline-block underline">Смотреть кейс</Link>
        </article>

        <article className="p-4 border rounded">
          <h2 className="text-xl font-semibold">RED Arena</h2>
          <p className="mt-2">Детализированная презентация развлекательной площадки для посетителей и организаторов.</p>
          <Link to="/projects/red-arena" className="mt-3 inline-block underline">Смотреть кейс</Link>
        </article>
      </div>

    </div>
  );
}