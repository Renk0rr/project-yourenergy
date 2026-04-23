// ============================================================
//  СТОРІНКА FAVORITES — відповідальний: [ПОСТАВ ІМ'Я]
//
//  Що реалізувати (ТЗ п.32-34):
//  - Працює на favorites.html
//  - Блок цитати дня (викликаємо з quote.js)
//  - Блок списку улюблених вправ з localStorage
//  - Картка: назва, калорії, частина тіла, мета + Start + "видалити"
//  - Клік по Start → dispatchEvent EXERCISE_OPEN
//  - Клік по "видалити" → removeFavorite(id) → перерендер
//  - Якщо нема улюблених — повідомлення
//  - Слухати FAVORITES_CHANGED → перерендер
//
//  Твоя розмітка: src/partials/favorites-list.html
//  Твої стилі:    src/css/components/favorites-page.css
// ============================================================

import { getFavorites, removeFavorite } from './favorites-storage.js';
import { EVENTS } from './constants.js';

// TODO: renderFavorites() — забрати з localStorage, намалювати
// TODO: кнопка "видалити" → removeFavorite(id) → перерендер
// TODO: кнопка Start → dispatchEvent EXERCISE_OPEN
// TODO: слухати FAVORITES_CHANGED → renderFavorites()
