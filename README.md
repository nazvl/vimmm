# 🧙‍♂️ vimmm

> **Vim, но теперь тебе нужно ещё и прыгать.**

**vimmm** — небольшая браузерная мини-игра в духе Vim, где тебе предстоит управлять персонажем и добираться до цели, прыгая между платформами.

Проект сделан как эксперимент на стыке **Vim, браузерных игр и frontend-разработки**.

<div align="center">

[🎮 Play](#-запуск) · [✨ Features](#-возможности) · [🛠 Stack](#-стек)

</div>

---

## 🎮 Что это?

Ты — маленький Vim-персонаж.

Твоя задача — двигаться по уровню, прыгать между платформами и не падать.

Звучит просто.

Но это Vim.

```text
        ┌───────┐
        │  VIM  │
        └───┬───┘
            │
            ▼
      ┌───────────┐
      │           │
   ┌──┘           └──┐
   │                  │
   └──────────────────┘
```

Проект задуман как лёгкая браузерная игра с минималистичной визуальной стилистикой, вдохновлённой терминалом и Vim.

---

## ✨ Возможности

* 🧙 Vim в роли игрового персонажа
* 🟩 Платформы и прыжки
* 🎮 Управление с клавиатуры
* ⚡ Быстрый запуск в браузере
* 🌐 Работа как обычное веб-приложение
* 📱 Адаптация интерфейса под разные размеры экрана
* 🧩 Простая архитектура, которую легко расширять

---

## 🛠 Stack

| Технология                                    | Использование         |
| --------------------------------------------- | --------------------- |
| [Vue](https://vuejs.org/)                     | UI                    |
| [Nuxt](https://nuxt.com/)                     | Application framework |
| [TypeScript](https://www.typescriptlang.org/) | Типизация             |
| [Pinia](https://pinia.vuejs.org/)             | State management      |
| [Tailwind CSS](https://tailwindcss.com/)      | Стилизация            |

---

## 🚀 Запуск

### Требования

* Node.js
* npm / pnpm / yarn / bun

### Установка

```bash
git clone https://github.com/nazvl/vimmm.git
cd vimmm

npm install
```

### Development

```bash
npm run dev
```

После запуска приложение будет доступно по адресу:

```text
http://localhost:3000
```

---

## 📦 Production

Сборка:

```bash
npm run build
```

Предпросмотр production-сборки:

```bash
npm run preview
```

Для статической генерации:

```bash
npm run generate
```

---

## 🗂 Project structure

```text
vimmm/
├── app/              # Клиентская часть приложения
├── public/           # Статические ресурсы
├── server/
│   └── api/          # API endpoints
├── nuxt.config.ts    # Конфигурация Nuxt
├── package.json
└── README.md
```

---

## 🧠 Why?

Потому что обычный Vim недостаточно сложный.

```text
:q

    ↓

NO

    ↓

JUMP
```

---

## 🗺 Roadmap

* [x] Базовая игровая механика
* [x] Персонаж
* [x] Платформы
* [ ] Новые уровни
* [ ] Таблица рекордов
* [ ] Звуковые эффекты
* [ ] Больше Vim-пасхалок
* [ ] Mobile controls

---

## 🤝 Contributing

Pull requests и идеи приветствуются.

Если нашёл баг или придумал новую механику — создай [Issue](https://github.com/nazvl/vimmm/issues).

---

## 📄 License

This project is open source.

---

<div align="center">

### Made with ❤️, Vue and a suspicious amount of Vim

**`hjkl` your way to victory.**

</div>
