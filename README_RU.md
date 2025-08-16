# Виртуальный тур — готовый репозиторий

Этот репозиторий содержит фронтенд-про젝트 (Vite + React + Tailwind) — **виртуальный тур по Сухуму**.
Ниже — пошаговая инструкция, чтобы просто **запушить на GitHub** и **задеплоить на Vercel**.

---

## 1) Подготовка

1. Клонируй/скопируй этот репозиторий в локальную папку.
2. (Опционально) Проверь, что в `package.json` есть скрипт `build` (`vite build`) и есть `vercel.json` — они уже добавлены.

## 2) Публикация на GitHub

1. Создай новый репозиторий на GitHub (например `sukhum-virtual-tour`).
2. Запушь все файлы в репозиторий:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: virtual tour"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

## 3) Деплой на Vercel (за 2 клика)

1. Зайди на https://vercel.com/ и войди через GitHub.
2. Нажми **Add New → Project**, выбери репозиторий, который только что запушил.
3. Vercel автоматически определит проект Vite. Если потребуется, выставь:
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (или `yarn build`)
   - Output Directory: `dist`
4. Нажми **Deploy**.
5. После успешного деплоя появится публичный URL (например `https://sukhum-virtual-tour.vercel.app`).

> В `vercel.json` уже указано, что `dist` — директория сборки, так что Vercel будет использовать `npm run build` и разместит `dist` как статику.

## 4) Интеграция в портфолио (iframe)

После деплоя скопируй публичную ссылку и вставь в HTML-портфолио, например:

```html
<section class="portfolio-case">
  <h2>Виртуальный тур — Сухум</h2>
  <p>Интерактивный виртуальный тур и панорамы.</p>

  <!-- Вставь сюда URL, который вернул Vercel -->
  <iframe src="https://ВАША_ССЫЛКА_NA_TUR.vercel.app" width="100%" height="650" frameborder="0" allowfullscreen></iframe>

  <!-- Пример врезки Яндекс-панорам -->
  <div class="panoramas-grid">
    <iframe src="https://yandex.com/map-widget/v1/-/CHtcMD1Q" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
    <iframe src="https://yandex.com/map-widget/v1/-/CHtcM28p" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
    <iframe src="https://yandex.com/map-widget/v1/-/CHtcQM30" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
    <iframe src="https://yandex.com/map-widget/v1/-/CHtcQ4PK" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
    <iframe src="https://yandex.com/map-widget/v1/-/CHtcQSN9" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
  </div>
</section>
```

## 5) Полезные замечания

- На Vercel сборка будет происходить автоматически (он запустит `npm install` и `npm run build`).  
- Если проект требует специфической версии Node.js, можно настроить её в файле `.nvmrc` (он уже присутствует).  
- Если хочешь тестировать локально перед пушем: `npm install` → `npm run build` → `npm run preview`.

---
Если хочешь, могу добавить в репозиторий файл `portfolio-embed.html` с готовой врезкой и примерами — скажи, и я его добавлю.