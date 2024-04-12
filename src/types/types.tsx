// Интерфейс для описания пищевой ценности
export interface Inutrition {
    proteins: number;  // Количество белков в граммах
    fats: number;      // Количество жиров в граммах
    carbohydrates: number;  // Количество углеводов в граммах
    kcal: number;     // Калорийность в килокалориях
}

// Интерфейс для описания элемента меню
export interface Iitem {
    itemCode: string;  // Уникальный код товара
    itemName: string;  // Название товара
    itemDescription: string;  // Описание товара
    url: string;  // URL изображения товара
    itemWeight: number;  // Вес товара в граммах
    itemPrice: number;  // Цена товара
    nutritionTip: Inutrition;  // Информация о пищевой ценности (объект Inutrition)
}

// Интерфейс для категорий меню
export interface ImenuCategories {
    catName: string;  // Название категории меню
    catCode: string;  // Код категории меню
    menuItems: Iitem[];  // Массив элементов меню (каждый элемент - объект Iitem)
}

// Интерфейс для времени обслуживания
export interface IserviceTimes {
    serviceTimeName: string;  // Название времени обслуживания
    serviceTimeCode: number;  // Код времени обслуживания
    serviceTimeZone: string;  // Временная зона
    menuCategories: ImenuCategories[];  // Массив категорий меню (каждая категория - объект ImenuCategories)
}

// Главный интерфейс, который описывает все времена обслуживания
export interface Imain {
    serviceTimes: IserviceTimes[];  // Массив времен обслуживания (каждое время - объект IserviceTimes)
}
