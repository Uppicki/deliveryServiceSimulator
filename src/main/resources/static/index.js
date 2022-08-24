var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [51.681658, 39.184459], // Воронеж
        zoom: 10,
        controls: ['smallMapDefaultSet']
    }, {
        searchControlProvider: 'yandex#search',
        restrictMapArea: [
            [51.61, 39.1],
            [51.74, 39.3]
        ]
    });

}