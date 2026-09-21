# Progress

Тестовое задание — прототип блока Progress для мобильных web-приложений.

## Demo

https://fndya.github.io/progress-test/

## Возможности

- значение прогресса от 0 до 100;
- анимация вращения по часовой стрелке;
- скрытие блока;
- адаптация под portrait и landscape;
- переиспользуемый компонент с API;
- без сторонних библиотек и фреймворков.

## Технологии

- HTML
- CSS
- JavaScript (ES Modules)
- SVG

## Структура проекта

```text
progress-test/
├── index.html
├── README.md
└── src/
    ├── main.js
    ├── Progress.js
    └── progress.css
```

## API

Создание компонента:

```js
const progress = new Progress({
    value: 60,
    animated: false,
    hidden: false,
});
```

Управление значением:

```js
progress.setValue(80);
progress.getValue();
```

Управление анимацией:

```js
progress.setAnimated(true);
progress.isAnimated();
```

Управление видимостью:

```js
progress.setHidden(true);
progress.isHidden();
```

Изменение нескольких параметров:

```js
progress.setState({
    value: 40,
    animated: true,
    hidden: false,
});
```

Монтирование и удаление:

```js
progress.mount(container);
progress.destroy();
```

Значение автоматически ограничивается диапазоном `0–100`.


### Спасибо за внимание!